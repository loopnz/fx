require('./css/index.css');

var tpl='<div class="container">'+
    '<router-view keep-alive   transition="fade" transition-mode="out-in"></router-view>'+
'</div>';

module.exports={
	template:tpl
}