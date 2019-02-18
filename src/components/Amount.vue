<template>
    <div class="amount">
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      count: 1
    }
  }
}
</script>

<style>

</style>
