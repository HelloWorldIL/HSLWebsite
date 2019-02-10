<template lang="pug">
  div
    header
      navigation
    transition(name="fade" mode="out-in")
      router-view(class="main")
</template>

<script>

import navigation from './components/navigation'

export default {
  components: {
    navigation
  }
}
</script> 

<style lang="stylus" scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
