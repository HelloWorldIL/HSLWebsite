<template lang="pug">
  div.proot
    div.pimage(v-bind:style="{ 'background-image': 'url(' + backgroundImage +')'}")
    div.pcontent
      slot
      scrollIndicator(v-if="scroll")
    
</template>
<script>
import scrollIndicator from './scrollIndicator'

export default {
  components: {
    scrollIndicator
  },
  props: {
    backgroundImage:{
      type: String,
      default: "/static/img.jpg"
    },
    height:{
      type: String,
      default: "100vh"
    },
    scroll:{
      type: Boolean,
      default: false
    }
  },
  mounted: function(){
    // Parallax Effect
    // Does not work on mobile
    const parallax = document.getElementsByClassName('pimage')[0]
    const proot = document.getElementsByClassName('proot')[0]
    proot.style.height = this.height
    parallax.style.height = this.height
    if (!/Mobi|Android/i.test(navigator.userAgent)) {
      const scrollSpeed = 0.2 // This is % of scroll speed: 0 Image is static, 1 no parallax effect
      window.addEventListener('scroll', function(){
        let offset = window.pageYOffset
        parallax.style.backgroundPositionY = -offset * scrollSpeed + 'px'
      })
    }
  },

}
</script>

<style lang="stylus" scoped>
.proot
  height 100vh
  overflow hidden
.pimage
  position:absolute

  left:0
  right:0
  top:0
  bottom:0
  background-attachment fixed
  background-size cover
  background-repeat no-repeat
  filter brightness(0.5)
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
  z-index 1
  color white
</style>

