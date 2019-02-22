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

@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");
@import './scss/variable';
body {
    background-color:$main_bg; 
    overflow: scroll;
}
#app {
  @extend %center;
  text-align: center;
  width: 100%;
}
  .dot{
  grid-area: dot;
  @extend %center;
  position: fixed;
  width: 100%;
  height: 30px;
  padding: 1rem  0;
  z-index: 10;
  bottom: 0px;
  left: 0px;
  background: $main_bg;
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
