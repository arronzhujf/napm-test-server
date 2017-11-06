var index = 1;

function sendTestAJAXAsync () {
    sendAJAX(true, {
        index: index
    });
    index++;
}

function sendTestAJAXSync () {
    sendAJAX(false, {
        index: index
    });
    index++;
}

function sendAJAX(isAsync, param) {
    var jqGet = $.ajax('/api/returnParam', {
        method: 'GET',
        async: isAsync,
        dataType: 'json',
        data: param
    }).done(function (data) {
        let content = $('textarea').text();
        $('textarea').text(content + "\n" + JSON.stringify(data));
        let url = "MAMBridge://ajaxsucceed?data="+JSON.stringify(data)
        window.location.href = url;
    }).fail(function (data) {
        let content = $('textarea').text();
        $('textarea').text(content + "\n" + "error" + JSON.stringify(data));
        let url = "MAMBridge://ajaxfailed";
        window.location.href = url;
    });
}
