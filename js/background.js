// == Background script for Threads Video Downloader ==
(() => {
    // Listener per i messaggi in arrivo
    browser.runtime.onMessage.addListener((request, sender) => {
        if (!request) {
            return Promise.resolve({ url: null, fileName: null });
        }
        if (request.action === "downloadFile") {
            if (!request.url) {
                return Promise.resolve({ err: "no_url" });
            }
            const downloadOptions = {
                url: request.url
            };
            if (request.filename) {
                downloadOptions.filename = request.filename;
            }
            // Prova a scaricare il file
            return browser.downloads.download(downloadOptions)
                .then(() => ({ ok: true }))
                .catch(() => {
                    // Riprova senza filename se fallisce
                    return browser.downloads.download({ url: request.url })
                        .then(() => ({ ok: true }))
                        .catch(() => ({ err: "download_failed" }));
                });
        }
        // Default: risposta vuota
        return Promise.resolve({ url: null, fileName: null });
    });
})();