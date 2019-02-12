<template lang="pug">
v-app()
  Parallax(background-image="/static/cropped.JPG" height="40vh")
    h1 About Us
  .aboutSection
    v-card.aboutTitle
      h1 We Build Satellites
    v-card.aboutText
      p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</template>

<script>
import Parallax from '../components/homeParallax.vue'
export default {
  components:{
    Parallax
  }
}
</script>

<style lang="stylus" scoped>
.aboutSection
  display grid
  grid-template-columns 200px 1fr 2fr 200px
  grid-template-rows 50px auto
  > .aboutTitle
    grid-column-start 2
    grid-row-start 2
    display flex
    background #212121
    align-items center
    justify-content center
    color white
    padding 50px
    > h1
      display inline-block
      vertical-align middle
  > .aboutText
    padding 0px 50px
    grid-column-start 3
    grid-row-start 2
</style>
