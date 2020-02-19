<template>
  <div id="app">
    <navbar></navbar>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
    name: "App",
    components: {
        Navbar
    }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
