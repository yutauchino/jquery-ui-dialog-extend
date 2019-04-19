(function($) {
    $.confirm_jquery_ui_dialog = function(options) {
        var setting = $.extend({
            msg: '',
            dialog_id: '',
            ok_word: 'OK',
            cancel_word: 'キャンセル',
        }, options||{});

        if(setting.dialog_id == ''){
            throw "do not set dialog_id";
        }

        var d = new $.Deferred;
        var buttons = [
            {
                text: setting.ok_word,//OKボタン押下時
                click: function() {
                    $(this).dialog('close');
                    d.resolve();
                }
            },
            {
                text: setting.cancel_word,//キャンセルボタン押下時
                click: function() {
                    $(this).dialog('close');
                    d.reject();
                }
            },

        ];

        $(setting.dialog_id).dialog({
            buttons : buttons,
        });

        $(setting.dialog_id).text(setting.msg);
        $(setting.dialog_id).dialog('open');
        return d.promise();
    };
})(jQuery);