<template lang="pug">
  nav.topNav
    div.logo
      h1 HSL
    ul.nav-links
      li(v-for="navItem in $store.state.navigation.items")
        a {{navItem.title}}
</template>

<script>
export default {
  data: function(){
    return {
      
    }
  }
}
</script>

<style lang="stylus">
nav.topNav
  z-index 2
  display flex
  justify-content space-around
  align-items center
  min-height 7vh
  background rgba(33, 42, 50, 1)
  position fixed
  width 100vw
.logo
  color white
  text-transform uppercase
  letter-spacing 5px
  font-size 22px
.nav-links
  display flex
  justify-content space-around
  width 50%
  list-style none
  a
    font-size 20px
    color white
    letter-spacing 3px
    font-weight bold
</style>

