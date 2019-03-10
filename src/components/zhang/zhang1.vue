<template>
  <div class="zhang1">
  	<!--<img src="../../../../sell0/src/components/star/star36_off@3x.png"/>-->
  	{{msg}}  <br />
  	<router-link to="/test1/zhang1/pan1">pan1</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'zhang1',
  data () {
    return {
      msg:"张1"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.zhang1{
	color: red;
}
</style>
