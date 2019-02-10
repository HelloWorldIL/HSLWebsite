<template lang="pug">
	div.root
    stars.test
    .content
      v-card(raised dark)
        v-card-title(primary-title) {{title}}
        v-card-text
          v-form(ref="form")
            v-text-field(v-if="signUp" prepend-inner-icon="person" label="Username" hint="For example, helloWorld" box)
            v-text-field(prepend-inner-icon="email" label="Email" hint="Enter your email" box)
            v-text-field(prepend-inner-icon="lock" label="Password" hint="Enter a strong password that you can remember" box)
            v-text-field(v-if="signUp" prepend-inner-icon="lock" label="Re-Enter Password" hint="Re-Enter your password" box)
        v-card-actions
          v-btn(large color="blue") {{title}}
          v-spacer
          v-btn(flat @click="signUp=!signUp") {{button}}
</template>

<script>
import stars from '../components/starBG.vue'

export default {
  components:{
    stars
  },
  data () {
    return{
      signUp: false
    }
  },
  computed:{
    title: function() {
      return !this.signUp ? 'Login' : 'Sign Up'
    },
    button: function() {
      return this.signUp ? 'Login' : 'Sign Up'
    }
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
