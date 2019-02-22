<template>
      <span class="linkHome">
      <router-link class="link" to="/Admin">Admin</router-link>
      <router-link class="link" to="/Tickets">Köpta Biljetter</router-link>
      <router-link class="link" to="/Verify">Staff</router-link>
    </span>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../scss/variable';

    .link {
        text-decoration: none;
        margin: 1rem;
        color:$greyich;
    }

</style>
