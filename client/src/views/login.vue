<template lang="pug">
	div.wrapper
    v-form(v-model="valid")
      v-text-field(v-model="firstname" label="First Name")
</template>

<style lang="stylus" scoped>
.wrapper
  display grid
  height: 100vh
  padding-top 7vh
</style>