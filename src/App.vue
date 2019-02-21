<template>
  <div id="app">
      <transition
        name="fade"
        mode="out-in">
         <router-view/>
    </transition>
  </div>
</template>

<script>


export default {
  name: 'App',
    components: {
    
  },
  beforeMount() {
    this.$store.dispatch('getEvents');
  }
}
</script>

<style lang="scss">

@import './scss/variable';
body {
    background-color:$main_bg !important; 
}
#app {
  @extend %center;
  text-align: center;
  width: 100%;
}


.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
