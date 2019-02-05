<template lang="pug">
  div
    header
      navigation
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
