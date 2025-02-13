# Threads Video Downloader

## Available Versions
- Tampermonkey (User Script)
- Firefox Extension

## Description
Threads Video Downloader is an extension for downloading videos and images from Threads, making it easier to access and save multimedia content.

## Installation and Usage

### Tampermonkey Version
1. Install a user script manager like [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Create a new user script using your preferred extension.
3. Copy and paste the content of `tampermonkey-script.js` into the new script.
4. Save the script and visit Threads to start downloading by clicking on the button (with the data-src attribute).
5. Note: The user script code has not been fully tested yet, but testing will be performed soon.

### Firefox Version
1. Install the extension on Firefox by following [these instructions](https://addons.mozilla.org/en-US/firefox/addon/threads-video-downloader/).
2. Open the extension and follow the steps to download videos and images.
3. The source code for the Firefox version is available in this repository so that anyone willing can use it as a base for improvements.

## Technologies Used
- MutationObserver for efficient dynamic DOM monitoring.
- Data attribute (data-src) for associating the resource URL to download.
