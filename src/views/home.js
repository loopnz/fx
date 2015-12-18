require("../css/home.css");

   var tpl='<div class="page">'+
        '<div class="head">标题</div>'+
        '<a v-link=\'{path:"category"}\'>到分类</a>'+
        '<a v-link=\'{path:"list"}\'>到列表</a>'+
    	'</div>';

 module.exports={
 	template:tpl,
 	ready:function(){
        console.log("home-dom准备完毕");
 	}
 }