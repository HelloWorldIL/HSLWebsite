<template lang="pug">
  nav.topNav
    div.logo
      h1 HSL
    ul.nav-links
      li(v-for="navItem in $store.state.navigation.items")
        a {{navItem.title}}
      li.login
        v-btn(color="info" depressed)
          span(style="margin-right: 5px") Login
          v-icon(dark) lock_open
			
</template>

<script>
export default {
  data: function() {
    return {}
  },
  mounted: function() {
    const nav = document.getElementsByClassName('topNav')[0]
    window.addEventListener('scroll', () => {
      let offset = window.pageYOffset
      if (offset > document.body.clientHeight/4) {
        nav.classList.add('scrolled')
      }
      else{
        nav.classList.remove('scrolled')
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
navbarHeight = 5vh;
linkHoverColor = rgba(26, 31, 35, 0.5);

nav.topNav
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  min-height: navbarHeight;
  position: fixed;
  width: 100vw;
  transition 1s

.scrolled
  background-color rgba(31, 40, 56, 0.8)
  

.logo {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 48px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 26px;
  line-height: navbarHeight;
}
.login{
  position absolute
  top 0
  right 0
  padding 0 48px
}

.nav-links {
  margin-right: 8%;
  display: flex;
  justify-content: center;
  list-style: none;
  align-content: stretch;
  align-items: stretch;

  li {
    display: flex;
    align-items: stretch;
    justify-content: stretch;

    a {
      font-size: 14px;
      color: white;
      letter-spacing: 3px;
      line-height: navbarHeight;
      transition: 0.25s ease-in-out;
      padding: 0px 25px;
      opacity: 0.7;
      border: solid 1px transparent;
    }

    a:hover {
      background-color: linkHoverColor;
      opacity: 1;
      border-bottom: solid 1px white;
    }
  }
}
</style>

