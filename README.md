# Threads Video Downloader (Userscript)

Scarica facilmente video e immagini da Threads.net e Threads.com direttamente dal browser, grazie a questo userscript compatibile con Tampermonkey, Violentmonkey e Greasemonkey.

## Disponibile anche come Estensione Firefox!
Se preferisci usare un'estensione nativa per Firefox, trovi la versione dedicata qui:
[Threads-Video-Downloader (estensione Firefox)](https://github.com/ManoloZocco/Threads-Video-Downloader)

## Installazione

1. Installa un gestore di userscript come [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/).
2. [Scarica e installa lo script](https://github.com/ManoloZocco/Threads-video-downloader-userscript/releases/latest/download/threads-video-downloader.user.js) oppure copia il contenuto di `threads-video-downloader.user.js` in un nuovo script nel tuo gestore.
3. Visita un post su Threads.net o Threads.com: vedrai comparire un pulsante "Scarica" sopra ogni video o immagine.

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
R: Prova a ricaricare la pagina. Se il problema persiste, assicurati che lo userscript sia attivo e aggiornato. Segnala eventuali problemi aprendo una issue su GitHub.

**D: Il download non parte o ricevo un errore.**
R: Verifica di aver concesso i permessi necessari al gestore di userscript. Alcuni contenuti potrebbero essere protetti da restrizioni del sito.

**D: Posso usare questo userscript anche su Firefox?**
R: Sì, ma per la migliore integrazione su Firefox ti consigliamo la versione estensione dedicata.

## Contribuisci

Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Puoi:
- Aprire una issue su [GitHub](https://github.com/ManoloZocco/Threads-video-downloader-userscript/issues)
- Proporre una pull request con miglioramenti o nuove funzionalità
- Segnalare problemi di compatibilità o idee per nuove feature

## Privacy

Questo userscript **non raccoglie né trasmette alcun dato personale**. Tutte le operazioni avvengono localmente nel browser dell'utente. I permessi richiesti sono limitati esclusivamente alle funzionalità di download dei file.

## Licenza
MIT

---

Per segnalare problemi o suggerire miglioramenti, apri una issue su [GitHub](https://github.com/ManoloZocco/Threads-video-downloader-userscript/issues). 