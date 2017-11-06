require(['utils'], function (utils) {
    var index = 1;

    function sendTestAJAXAsync() {
        sendAJAX(true, {
            index: index
        });
        index++;
    }

    function sendTestAJAXSync() {
        sendAJAX(false, {
            index: index
        });
        index++;ß
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
            let url = "MAMBridge://ajaxsucceed?data=" + JSON.stringify(data)
            utils.callNative(url);
        }).fail(function (data) {
            let content = $('textarea').text();
            $('textarea').text(content + "\n" + "error" + JSON.stringify(data));
            let url = "MAMBridge://ajaxfailed";
            utils.callNative(url);
        });
    }

    $('#async').click(sendTestAJAXAsync);
    $('#sync').click(sendTestAJAXSync);
});


