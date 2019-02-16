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
  margin: 1rem 0;
  /*background-color: #231F42;*/
      background-color: rgb(255, 189, 65);

}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 568px;
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
