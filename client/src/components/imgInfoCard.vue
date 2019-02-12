<template lang="pug">
  .imgInfoContainer
    v-card.imgInfoTitle(v-bind:style="{ 'background-image': 'url(' + backgroundImage +')'}")
      h1 {{title}}
    v-card.imgInfoText
      p {{text}}
</template>

<script>
export default {
  props: {
    backgroundImage:{
      type: String,
      default: "/static/img.jpg"
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="stylus" scoped>
.imgInfoContainer
  display grid
  margin-top 50px
  grid-template-columns 100px 1fr 1fr 100px
  grid-template-areas:
    ". title text ."

  > .imgInfoTitle
    grid-area title
    background-size cover
    display flex
    align-items center
    justify-content center
    color white
    padding 50px
    > h1
      display inline-block
      vertical-align middle
  > .imgInfoText
    grid-area text
    padding 0px 50px


@media only screen and (max-width: 1200px) {
  .imgInfoContainer {
    grid-template-areas:
    ". title title ." ". text text .";
  }
}
</style>
