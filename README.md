# Threads Video Downloader (Estensione Firefox)

Scarica facilmente video e immagini da Threads.net e Threads.com direttamente dal browser Firefox.

## Disponibile anche come Userscript!
Se preferisci usare uno userscript (per Tampermonkey, Violentmonkey, Greasemonkey), trovi la versione dedicata qui:
[Threads-video-downloader-userscript](https://github.com/ManoloZocco/Threads-video-downloader-userscript)

## Installazione

1. Installa l'estensione da questa repository o dalla pagina ufficiale su Mozilla Add-ons.
2. Visita un post su Threads.net o Threads.com: vedrai comparire un pulsante "Scarica" sopra ogni video o immagine.

## Funzionalità
- Download diretto di video e immagini da Threads.net e Threads.com
- Pulsante "Scarica" aggiunto automaticamente ai contenuti rilevanti
- Download tramite API Firefox
- Rilevamento dinamico dei nuovi contenuti tramite `MutationObserver`

## Novità versione 1.0.2
- Compatibilità estesa anche al dominio threads.com
- Migliorata efficienza: ora l'estensione rileva i nuovi contenuti tramite MutationObserver
- Codice più leggibile e robusto

## FAQ / Troubleshooting

**D: Il pulsante "Scarica" non appare su alcuni post, cosa posso fare?**
R: Prova a ricaricare la pagina. Se il problema persiste, assicurati che l'estensione sia attiva e aggiornata. Segnala eventuali problemi aprendo una issue su GitHub.

**D: Il download non parte o ricevo un errore.**
R: Verifica di aver concesso i permessi necessari all'estensione. Alcuni contenuti potrebbero essere protetti da restrizioni del sito.

**D: Posso usare questa estensione anche su altri browser?**
R: Questa versione è ottimizzata per Firefox. Per altri browser, prova la versione userscript.

## Licenza
MIT

---

Per segnalare problemi o suggerire miglioramenti, apri una issue su [GitHub](https://github.com/ManoloZocco/Threads-Video-Downloader/issues). 