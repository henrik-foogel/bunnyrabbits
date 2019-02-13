<template>
  <div id="app">
      <transition
        name="fade"
        mode="out-in">
         <router-view/>
    </transition>
  </div>
</template>

<style>

body {
  margin: 0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #231F42;
  text-align: center;
  margin: 0;
  width: 100%;
  height: 100%;
  min-height: 568px;
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
