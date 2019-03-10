import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test1 from '@/components/test/test1'
import test2 from '@/components/test/test2'
import test3 from '@/components/test/test3'
import test4 from '@/components/test/test4'
import zhang1 from '@/components/zhang/zhang1'
import zhang2 from '@/components/zhang/zhang2'
import zhang3 from '@/components/zhang/zhang3'
import pan1 from '@/components/pan/pan1'
import pan2 from '@/components/pan/pan2'
import pan3 from '@/components/pan/pan3'
import basic from '@/components/basic/basic'
import user from '@/components/user/user'
import cc from '@/components/user/cc'
import dd from '@/components/user/dd'
/*@ 直接定位在src中*/
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
//    name: 'HelloWorld',
      component: HelloWorld,
    },
    {
    	path:"/test1",
//  	name:"test1",
    	component:test1,
    	 children:[
    	 {path:"zhang1",component:zhang1,
    	 children:[
    	 {path:"pan1",component:pan1}
    	 ]
    	 }
    	 ]
    },
    {
    	path:"/test2",
//  	name:"test1",
    	component:test2,
    	 children:[
    	 {path:"zhang2",component:zhang2,
    	 children:[
    	 {path:"pan2",component:pan2}
    	 ]}
    	 ]
    },
    {
    	path:"/test3",
//  	name:"test1",
    	component:test3,
    	 children:[
    	 {path:"zhang3",component:zhang3,
    	 children:[
    	 {path:"pan3",component:pan3}
    	 ]
    	 }
    	 ]
    },
    {path:"/basic",component:basic},
    {path:"/test4",component:test4,
    children:[
    {path:"user/:user/age/:age",component:user},
    {path:"user/cc",name:'cc',component:cc},
    {path:"user/dd",name:'dd',component:dd}
    ]
    },
  ]
})
