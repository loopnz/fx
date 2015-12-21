<style>
   
   .head{
        width: 100%;
        height: 44px;
        text-align: center;
   }

</style>

<template>
    <div class="page">
        <div class="head">标题</div>
        <a v-link="{path:'category'}">到分类</a>
    </div>

</template>

<script>
    module.exports = {
        data: function(){
            return {

            }
        },
        ready: function () {
            console.log("home-dom准备完毕") // -> 'foo'
        }
    }
</script>
