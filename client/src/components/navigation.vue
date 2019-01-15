<template lang="pug">
  nav.topNav
    ul
      li(v-for="navItem in $store.state.navigation.items") {{navItem.title}}
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
  position fixed
  color white
  z-index 2
</style>

