// 一言调用
$.post("https://sslapi.hitokoto.cn/",null,function(e){
	$('.content').html(e.hitokoto+" —— <strong>"+e.from+"</strong>")
},'JSON');

// 背景大图加载
var img = new Image();
img.src = "http://isecret.vip/images/bg.jpg";
$(img).load(function(){
	$('#bg').css("backgroundImage","url("+img.src+")");
});
