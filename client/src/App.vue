<template lang="pug">
  div
    v-app()
      header
        navigation
      router-view
</template>

<script>

import navigation from './components/navigation'

export default {
  components: {
    navigation
  }
}
</script> 