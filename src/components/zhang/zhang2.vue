<template>
  <div class="zhang2">
  	<!--<img src="../../../../sell0/src/components/star/star36_off@3x.png"/>-->
  	{{msg}}  <br />
  	<router-link to="/test2/zhang2/pan2">pan2</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'zhang2',
  data () {
    return {
      msg:"张2"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.zhang2{
	color: red;
}
</style>
