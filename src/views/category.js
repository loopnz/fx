 	
require('../css/category.css');



var tpl='<div class="page" v-show="show">'+
		'<div class="head">这里是category</div>'+
		'<div class="img" ></div>'+
		'<a v-link=\'{path:"list"}\'>到列表</a>'+
	'</div>';

module.exports={
	template:tpl,
	data:function(){
		return {
			show:true
		}
	}
}