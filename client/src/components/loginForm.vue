<template lang="pug">
  v-card(raised dark)
        v-card-title(primary-title) {{title}}
        v-card-text
          v-form(ref="form").loginForm
            transition(name="grow")
              v-text-field(v-if="signUp" prepend-inner-icon="person" label="Username" hint="For example, helloWorld" box)
            v-text-field(prepend-inner-icon="email" label="Email" hint="Enter your email" box)
            v-text-field(prepend-inner-icon="lock" label="Password" hint="Enter a strong password that you can remember" box)
            transition(name="grow")
              v-text-field(v-if="signUp" prepend-inner-icon="lock" label="Re-Enter Password" hint="Re-Enter your password" box)
        v-card-actions
          v-btn(large color="blue") {{title}}
          v-spacer
          v-btn(flat @click="signUp=!signUp") {{button}}
</template>

<script>
export default {
  data () {
    return{
      signUp: false
    }
  },
  computed: {
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
.grow-enter-active
  transition all .1s ease-in-out
  max-height 100px
.grow-leave-active
  transition all .1s ease-in-out
  max-height 0
.grow-enter
  max-height 0
.grow-leave
  max-height 100px
</style>
