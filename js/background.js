(() => {
    function n() {
        // ...existing code...
        chrome.runtime.onConnect.addListener((function (n) { }));
        chrome.runtime.onMessage.addListener((function (n, r, o) {
            return n
                ? "downloadFile" === n.action && function (n, r) {
                    if (!n || !n.url) return r({ err: "no_opts" });
                    let o = { url: n.url };
                    n.filename ? o.filename = n.filename : o.filename = null,
                        browser.downloads.download(o, (o => {
                            if (o) return r({ ok: !0 });
                            browser.downloads.download({ url: n.url }, (n => r({ ok: !0 })))
                        }))
                }(n, o)
                : o({ url: null, fileName: null }),
                !0
        }));
        // ...existing code...
    }
    n()
})();
