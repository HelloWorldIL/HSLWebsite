<template lang="pug">
    div.Container
      Parallax.home
      section
        p {{$store.state.home.data}}
</template>


<script>
import Parallax from '../components/homeParallax.vue'

export default {
  data: function(){
    return{
    }
  },
  computed: {
    
  },
  components: {
    Parallax
  }
  
}
</script>

<style lang="stylus">
  body
    font: 12px Helvetica, Arial, sans-serif
section
  text-align: center
  padding: 50px 80px
  height 1000px
</style>
