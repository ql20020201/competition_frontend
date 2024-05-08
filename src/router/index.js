import Vue from 'vue'
import Router from 'vue-router';


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const router =  new Router({
	mode: 'history',//改成history模式
	routes: [
		{
			path: '/',
			redirect:'/index',
		},
    {
      path: '/index',
      name:'Adversarial Attack Competition',
      component: index => require(['@/pages/index.vue'], index),
      meta:{
        title: 'Adversarial Attack Competition',
      }
    },
		{
			path: '*',
			redirect:'/index',
		},
  ],
});

export default router;
