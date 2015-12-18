 	
require('../css/list.css');



var tpl='<div class="page" v-show="show">'+
		'<div class="list-head">这里是list1</div>'+
		'<div class="list-img" ></div>'+
		'<a v-link=\'{path:"home"}\'>首页</a>'+
	'</div>';

module.exports={
	template:tpl,
	data:function(){
		return {
			show:true
		}
	}
}