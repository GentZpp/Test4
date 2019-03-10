<template>
  <div class="test4">
  	<router-link to="/test4/user/aa/age/20">动态路由aa</router-link>
  	<router-link to="/test4/user/bb/age/18">动态路由bb</router-link>
  	<router-link :to="{name:'cc',params:{user:'cc',age:30}}">params cc</router-link>
  	<router-link :to="{path:'/test4/user/dd',query:{user:'dd',age:40}}">query dd</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'test4',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.test4{
	color: red;
}
</style>
