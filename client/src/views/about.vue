<template lang="pug">
v-app(dark)
  Parallax(background-image="/static/IMG_2708.JPG" height="70vh")
  section
    h1 About us
</template>

<script>
import Parallax from '../components/homeParallax.vue'
export default {
  components:{
    Parallax
  }
}
</script>
