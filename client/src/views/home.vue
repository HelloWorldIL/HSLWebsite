<template lang="pug">
  v-app(dark).page
    Parallax.header(background-image="/static/img.jpg")
      h1 {{$store.state.home.heading}}
      h1 {{$store.state.home.subHeading}}
      router-link(tag="div" to="/login")
        v-btn(light) Login to your account
    section.content
      p {{$store.state.home.data}}
</template>


<script>
import Parallax from '../components/homeParallax.vue'

export default {
  components: {
    Parallax
  },
  data: function(){
    return{
    }
  }
}
</script>

<style lang="stylus">
*
  box-sizing border-box

body
  font-size: 20px
  font-family: 'Open Sans', sans-serif
section
  text-align: center
  padding: 50px 80px
</style>
