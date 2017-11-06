define(function () {
    var callNative = function (url) {
        var iframe = document.createElement('iframe');
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        iframe.style.display = 'none';
        iframe.src = url;
        document.body.appendChild(iframe);
        setTimeout(function () {
            iframe.remove();
        }, 100);
    };
    return {
        callNative: callNative
    };
});
