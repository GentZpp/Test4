<template>
  <div class="test1">
  这是 用户 {{$route.params.user}}<br />
  今年:{{$route.params.age}}岁
  </div>
</template>

<script>
export default {
name: 'user',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>/*scoped  改样式支队当前组件起作用*/
div.user{
	color: red;
}
</style>
