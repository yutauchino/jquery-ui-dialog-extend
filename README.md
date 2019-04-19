# jquery-ui-dialog-extendとは?
jQueryUI Dialogの拡張プラグインです。  
ダイアログの表示を、以下のようにpromiseオブジェクトを使ってより直感的な記述が可能です。

```js
	$("#save").click(function () {
		$.confirm_jquery_ui_dialog({
			msg: "登録しますか？",
			dialog_id: "#confirm",
		}).done(function(){
			//OKボタン押下時処理
		}).fail(function(e){
			//キャンセル時処理
		}).always(function(){
			//OKボタン押下時とキャンセルボタン押下時の共通処理
		});
	});
```

従来のjQueryUI Dialogは以下のようにしか記述できず、クリックイベントとダイアログ表示時を別に定義しなくてはならず見通しが悪くなり、加えてグローバル変数を使わないとクリックイベントから引数を渡せないなどの課題がありましたが、それらを解消することができます。
```js
    $("#save").click(function () {
            //何らかの値
            var hoge = $("#hoge").val();

            //確認ダイアログを表示
            $('#confirm').dialog('open');
    });

    //確認ダイアログ
    $("#confirm").dialog({
        buttons : {
            "OK" : function() {
                //何らかの値hogeを使ってバリデーション実施後、フォーム送信をするためには??

            },
            "キャンセル" : function() {
                //キャンセル時処理
            }
        }
    });
```