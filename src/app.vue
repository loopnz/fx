<style>
*{
    margin: 0;
    padding: 0;
}
html,body {
    height: 100%;
}
.fade-transition {
  transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
  opacity: 0;
}

.container,.page{
    width:100%;
    height: 100%;
    overflow: hidden;
}
</style>

<template>
    <div class="container">
        <router-view keep-alive   transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>


