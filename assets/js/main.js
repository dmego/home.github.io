// 一言调用
$.post("https://sslapi.hitokoto.cn/",null,function(e){
	$('.content').html(e.hitokoto+"<hr/> —— <strong>"+e.from+"</strong>")
},'JSON');
