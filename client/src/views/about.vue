<template lang="pug">
v-app()
  Parallax(background-image="/static/cropped.JPG" height="40vh")
    h1 About Us
  section
    H1 This is what we do
  imgInfoCard(title="We Build Satellites", background-image="/static/20180913_194503.jpg" :text="cardText")
</template>

<script>
import Parallax from '../components/homeParallax.vue'
import imgInfoCard from '../components/imgInfoCard.vue'
export default {
  components:{
    Parallax,
    imgInfoCard
  },
  data: function() {
    return{
      cardText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
  }
}
</script>