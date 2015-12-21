 <style scoped>
	.list-head{
			color: red;
		}
	.list-img{
		width:100px;
		height: 100px;
		background: url(../img/1.png)no-repeat;
	}

</style>

<template>
	<div class="page">
		<div class="list-head">这里是list1</div>
		<div class="list-img" ></div>
		<a v-link='{path:"home"}'>首页</a>
	</div>
</template>


