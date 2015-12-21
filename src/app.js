var Vue = require('vue')
Vue.config.debug = true;
var VueRouter = require('vue-router')
Vue.use(VueRouter);

var app =require('./app.vue');

var router = new VueRouter({
    hashbang: true 
})

router.map({
    '/home': {
        component: function(resolve){
            require(['./views/home.vue'],resolve);
        }
    },
    '/category':{
        component:function(resolve){
          require(['./views/category.vue'], resolve);
        },
        needWX:true
    },
    'list':{
      component:function(resolve){
         require(['./views/list.vue'], resolve);
      }
    }
})
router.redirect({
    '/':"/home"
})
router.beforeEach(function (transition) {
  console.log(transition.to.needWX)
    transition.next()
})
router.afterEach(function (transition) {
    console.log('成功浏览到: ' + transition.to.path)
})

router.start(app, '#app');

window.router = router;

