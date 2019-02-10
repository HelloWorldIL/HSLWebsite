<template lang="pug">
  div.scrollIndicator
    div.dot
    <span>&#8595;</span>
</template>

<script>
export default {
  
}
</script>


<style lang="stylus" scoped>
size = 2
color = white

.scrollIndicator
  // Centering
  position relative
  left 50%
  top 50%
  transform translate(-50%, 50%)
  
  border 1px * size color solid
  width size * 20px
  height size * 40px
  border-radius size * 20px
  > div.dot
    // Positioning
    position relative
    left 50%
    top 50%
    transform translate(-50%, -90%)
    
    width 30%
    height 15%
    border-radius 50%
    background color
    
    animation scrollIndicator 2s infinite ease-in-out
  > span 
    position relative
    top 65px 
    transform translate(-100%, 50%)

@keyframes scrollIndicator
  0%
    opacity 0
    transform translate(-50%, -250%)
  20%
    transform translate(-50%, -252%)
    opacity 1
  70%, 100%
    opacity 0
    transform translate(-50%, -80%)
</style>
