(() => {
    const t = {
        observeDom() {
            let t = this;
            document.querySelectorAll("video").forEach((e => {
                let n = t.findRoot(e);
                n.querySelector(".dw") || n.append(t.getBtn(e.src || null))
            }));
            document.querySelectorAll("img").forEach((e => {
                if (!(e.width < 200 || e.height < 200 || e.parentElement.querySelector(".dw")))
                    return e.parentElement.prepend(t.getBtn(e.src || null))
            }))
        },
        getBtn(t) {
            let e = document.createElement("button");
            e.innerText = browser.i18n.getMessage("btn_title");
            e.className = "dw";
            let n = document.createElement("span");
            return n.className = "icon", e.append(n),
                e.setAttribute("src", t),
                e.addEventListener("click", this.dw), e
        },
        findRoot(t) {
            let e = t.parentNode;
            if (!e) return;
            let n = e.querySelector("div[data-visualcompletion]");
            return n || this.findRoot(e)
        },
        dw(t) {
            t.preventDefault(), t.stopPropagation();
            let e = "button" === t.target.nodeName.toLowerCase() ? t.target : t.target.parentElement,
                n = e.hasAttribute("src") && e.getAttribute("src") || null;
            n && browser.runtime.sendMessage({ action: "downloadFile", url: n })
        }
    };
    function e() {
        let t = chrome.runtime.connect(),
            n = !1,
            o = setTimeout((function () {
                t && (n = !0, t.disconnect()), e()
            }), 295e3);
        t.onDisconnect.addListener((function () {
            n || (clearTimeout(o), e())
        }))
    }
    e(), setInterval(t.observeDom.bind(t), 500)
})();
