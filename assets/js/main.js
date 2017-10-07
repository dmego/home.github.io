// 一言调用
$.post("https://sslapi.hitokoto.cn/",null,function(e){
	$('.content').html(e.hitokoto+"<br/> —— <strong><h5>"+e.from+"</h5></strong>")
},'JSON');
