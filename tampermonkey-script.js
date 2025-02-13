// ==UserScript==
// @name         Threads Video Downloader
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Download photos and videos from Threads quickly and easily!
// @author       Your Name
// @match        https://*.threads.net/*
// @grant        GM_download
// ==/UserScript==

(() => {
    const t = {
        observeDom() {
            let self = this;
            document.querySelectorAll("video").forEach(video => {
                let root = self.findRoot(video);
                root.querySelector(".dw") || root.append(self.getBtn(video.src || null))
            });
            document.querySelectorAll("img").forEach(img => {
                if (!(img.width < 200 || img.height < 200 || img.parentElement.querySelector(".dw")))
                    return img.parentElement.prepend(self.getBtn(img.src || null))
            })
        },
        initObserver() {
            if (typeof MutationObserver !== "undefined") {
                const observer = new MutationObserver(() => {
                    this.observeDom();
                });
                observer.observe(document.body, { childList: true, subtree: true });
            } else {
                // Fallback for older browsers lacking MutationObserver support
                setInterval(() => {
                    this.observeDom();
                }, 500);
            }
            // Initialize observation immediately on load
            this.observeDom();
        },
        getBtn(src) {
            let btn = document.createElement("button");
            btn.innerText = "Download";
            btn.className = "dw";
            let icon = document.createElement("span");
            icon.className = "icon";
            btn.append(icon);
            // Use data attribute instead of "src"
            btn.dataset.src = src;
            btn.addEventListener("click", this.dw);
            return btn;
        },
        findRoot(elem) {
            let parent = elem.parentNode;
            if (!parent) return;
            let visualDiv = parent.querySelector("div[data-visualcompletion]");
            return visualDiv || this.findRoot(parent);
        },
        dw(event) {
            event.preventDefault();
            event.stopPropagation();
            let btn = event.target.nodeName.toLowerCase() === "button" ? event.target : event.target.parentElement;
            let src = btn.dataset.src || null;
            src && GM_download(src, "downloaded_file");
        }
    };
    // Start observers
    t.initObserver();
})();
