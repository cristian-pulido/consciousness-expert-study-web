(function () {
  'use strict';
  var config = window.STUDY_CONFIG || {};
  var frame = document.getElementById('study-frame');
  var message = document.getElementById('frame-message');
  var url = String(config.appsScriptUrl || '').trim();
  if (!url || url.indexOf('YOUR_DEPLOYMENT_ID') !== -1) {
    message.textContent = 'The study application has not been connected yet. Set appsScriptUrl in config.js before publishing this page.';
    frame.style.display = 'none';
    return;
  }
  if (!/^https:\/\/script\.google\.com\/macros\/s\/.+\/exec(?:\?.*)?$/.test(url)) {
    message.textContent = 'The configured study URL does not look like a Google Apps Script web-app deployment URL.';
    frame.style.display = 'none';
    return;
  }
  frame.src = url;
  window.addEventListener('message', function (event) {
    if (event.source !== frame.contentWindow) return;
    var data = event.data || {};
    if (data.source !== 'consciousness-expert-study' || data.type !== 'height') return;
    var height = Number(data.height);
    if (!isFinite(height) || height < 300) return;
    frame.style.height = Math.ceil(height + 8) + 'px';
  });
  frame.addEventListener('load', function () { message.textContent = ''; });
  frame.addEventListener('error', function () { message.textContent = 'The study application could not be loaded. Please try again later.'; });
}());
