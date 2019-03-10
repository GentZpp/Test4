<template>
  <div class="test3">
  	<!--<img src="../../../../sell0/src/components/star/star48_off@3x.png"/>-->
  	{{msg}} <br />
  	<router-link to="/test3/zhang3">zhang3</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'test3',
  data () {
    return {
      msg:"测试3"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.test3{
	color: red;
}
</style>
