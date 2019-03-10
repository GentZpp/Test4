<template>
  <div class="test2">
  	<!--<img src="../../../../sell0/src/components/star/star36_half@2x.png"/>-->
  	{{msg}} <br />
  	<router-link to="/test2/zhang2">zhang2</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'test1',
  data () {
    return {
      msg:"测试2"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.test2{
	color: red;
}
</style>
