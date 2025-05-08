[![Versione](https://img.shields.io/github/v/release/ManoloZocco/Threads-Video-Downloader?label=versione)](https://github.com/ManoloZocco/Threads-Video-Downloader/releases)
[![Licenza](https://img.shields.io/github/license/ManoloZocco/Threads-Video-Downloader)](LICENSE)
[![Firefox Add-on](https://img.shields.io/amo/v/threads-video-downloader?label=Mozilla%20Add-ons)](https://addons.mozilla.org/it/firefox/addon/threads-video-downloader/)

# Threads Video Downloader

Scarica facilmente video e immagini da Threads.net e Threads.com!

## Versioni disponibili

- **Estensione Firefox** (questa repository):
  - Download diretto di video e immagini su Threads.net e Threads.com
  - Pulsante "Scarica" integrato nell'interfaccia
  - Rilevamento dinamico dei nuovi contenuti
  - [Installazione da Mozilla Add-ons](https://addons.mozilla.org/it/firefox/addon/threads-video-downloader/)

- **Userscript** (per Tampermonkey/Violentmonkey):
  - Stesse funzionalità, ma installabile su qualsiasi browser con un gestore di userscript
  - [Repository userscript](https://github.com/ManoloZocco/Threads-video-downloader-userscript)

## Installazione (Estensione Firefox)
1. Scarica l'estensione da questa repository o da Mozilla Add-ons.
2. Visita un post su Threads.net o Threads.com: vedrai comparire un pulsante "Scarica" sopra ogni video o immagine.

## Funzionalità
- Download diretto di video e immagini da Threads.net e Threads.com
- Pulsante "Scarica" aggiunto automaticamente ai contenuti rilevanti
- Download tramite `GM_download` (compatibile Tampermonkey/Violentmonkey)
- Notifiche di successo o errore tramite `GM_notification`
- Rilevamento dinamico dei nuovi contenuti tramite `MutationObserver`

## Novità versione 1.0.2
- Compatibilità estesa anche al dominio threads.com
- Migliorata efficienza: ora lo script rileva i nuovi contenuti tramite MutationObserver
- Download tramite GM_download, notifiche tramite GM_notification
- Codice più leggibile e robusto

## FAQ / Troubleshooting

**D: Il pulsante "Scarica" non appare su alcuni post, cosa posso fare?**
R: Prova a ricaricare la pagina. Se il problema persiste, assicurati che l'estensione sia attiva e aggiornata. Segnala eventuali problemi aprendo una issue su GitHub.

**D: Il download non parte o ricevo un errore.**
R: Verifica di aver concesso i permessi necessari all'estensione. Alcuni contenuti potrebbero essere protetti da restrizioni del sito.

**D: Posso usare questa estensione anche su altri browser?**
R: Questa versione è ottimizzata per Firefox. Per altri browser, prova la versione userscript.

## Contribuisci

Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Puoi:
- Aprire una issue su [GitHub](https://github.com/ManoloZocco/Threads-Video-Downloader/issues)
- Proporre una pull request con miglioramenti o nuove funzionalità
- Segnalare problemi di compatibilità o idee per nuove feature

## Privacy

Questa estensione **non raccoglie né trasmette alcun dato personale**. Tutte le operazioni avvengono localmente nel browser dell'utente. I permessi richiesti sono limitati esclusivamente alle funzionalità di download dei file.

## Licenza
MIT

---

Per segnalare problemi o suggerire miglioramenti, apri una issue su [GitHub](https://github.com/ManoloZocco/Threads-Video-Downloader/issues). 