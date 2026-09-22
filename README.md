# Consciousness Theory Expert Study — public web shell

This repository is the public GitHub Pages wrapper for the study. It contains no participant data. The interactive application is served by Google Apps Script inside an iframe.

## Configure the iframe

Edit `config.js` and set `appsScriptUrl` to the deployed Apps Script web-app URL:

```js
window.STUDY_CONFIG = {
  appsScriptUrl: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec'
};
```

Publish this repository with GitHub Pages. The homepage can then be shared with participants.

## Local preview

```bash
python -m http.server 8877
```

Open `http://localhost:8877/`.
