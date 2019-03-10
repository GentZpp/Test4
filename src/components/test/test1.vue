<template>
  <div class="test1">
  	<!--<img src="../../../../sell0/src/components/star/star48_on@3x.png"/>-->
  	{{msg}} <br />
  	<router-link to="/test1/zhang1">zhang1</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'test1',
  data () {
    return {
      msg:"测试1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>/*scoped  改样式支队当前组件起作用*/
div.test1{
	color: red;
}
</style>
