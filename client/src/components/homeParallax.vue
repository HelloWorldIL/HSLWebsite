<template lang="pug">
div.proot
  div.pimage
  div.pcontent
    h1 {{$store.state.home.heading}}
    h1 {{$store.state.home.subHeading}}
    router-link(tag="div" to="/login")
      v-btn() Explore Hoopoe
</template>

<script>
export default {
  mounted: function(){
    // Parallax Effect
    const scrollSpeed = 0.2 // This is % of scroll speed: 0 Image is static, 1 no parallax effect
    const parallax = document.getElementsByClassName('pimage')[0]
    window.addEventListener("scroll", function(){
      let offset = window.pageYOffset
      parallax.style.backgroundPositionY = -offset * scrollSpeed + "px"
    })
  }
}
</script>

<style lang="stylus" scoped>
.proot
  position relative
  height 100vh
  overflow hidden
.pimage
  position:absolute
  left:0
  right:0
  top:0
  bottom:0
  background url('http://localhost:5000/static/img.jpg')
  background-size: 150%
  background-repeat no-repeat
  background-position 50% 0px
  background-attachment fixed
  z-index:1
 
.pcontent
  position relative
  display inline-block
  padding 50px 100px
  // Centering
  left 50%
  top 50%
  transform translate(-50%)
  text-align center
  font-size 1.5em
  z-index 2
  color white
</style>

