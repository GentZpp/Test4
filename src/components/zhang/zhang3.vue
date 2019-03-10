<template>
  <div class="zhang3">
  	<!--<img src="../../../../sell0/src/components/star/star36_off@3x.png"/>-->
  	{{msg}} <br />
  	<router-link to="/test3/zhang3/pan3">pan3</router-link>
  	<router-view/>
  </div>
</template>

<script>
export default {
name: 'zhang3',
  data () {
    return {
      msg:"张3"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.zhang3{
	color: red;
}
</style>
