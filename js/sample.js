 $(function(){
	$(".dialog").dialog({
		modal: true,
		autoOpen: false,
		show : "fade",
	});
	
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
});
