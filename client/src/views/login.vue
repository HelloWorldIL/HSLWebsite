<template lang="pug">
	div.root
    stars.test
    .content
      loginForm
</template>

<script>
import stars from '../components/starBG.vue'
import loginForm from '../components/loginForm.vue'

export default {
  components:{
    stars,
    loginForm
  }
}
</script>

<style lang="stylus" scoped>
.content
  position relative
  // Centering
  padding 0px 38%
  left 50%
  top 50%
  transform translate(-50%, -50%)
  text-align center
  font-size 1.5em
  z-index 1
  color white
.root
  height 100vh
  overflow hidden
</style>
