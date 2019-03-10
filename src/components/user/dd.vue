<template>
  <div class="dd">
  这是 用户 {{$route.query.user}}<br />
  今年:{{$route.query.age}}岁
  </div>
</template>

<script>
export default {
//name: "dd",//报错这个注释就行了
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>/*scoped  改样式支队当前组件起作用*/
div.dd{
	color: red;
}
</style>
