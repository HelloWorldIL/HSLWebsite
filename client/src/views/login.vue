<template lang="pug">
	div.root
    stars.test
    .content
      v-card(raised dark)
        v-card-title(primary-title) Login
        v-card-text
          v-form(ref="form")
            v-text-field(label="Username" box)
            v-text-field(label="Password" box)
        v-card-actions
          v-btn(large color="blue" dark) Login
          v-spacer
          v-btn(flat) Sign Up
</template>

<script>
import stars from '../components/starBG.vue'

export default {
  components:{
    stars
  }
}
</script>

<style lang="stylus" scoped>
.content
  position relative
  // Centering
  padding 0px 38%
  left 50%
  top 50%
  transform translate(-50%, -50%)
  text-align center
  font-size 1.5em
  z-index 1
  color white
.root
  height 100vh
  overflow hidden
</style>
