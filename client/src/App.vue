<template lang="pug">
  div.root
    header
      navigation
    transition(name="fade" mode="out-in" enter-active-class="animated slideInLeft faster" leave-active-class="animated slideOutLeft faster")
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
