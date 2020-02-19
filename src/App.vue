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
import store from "./store";
import Machines from "@/mock/machines";
import Api from "./Api";

export default {
    name: "App",
    components: {
        Navbar
    },
    store,
    mounted() {
        if (window.useApi) {
            Api.get("machines/").then(response => {
                this.$store.commit("setMachines", response.data);
                this.$store.commit("setFilteredMachines", response.data);
            });
        } else {
            this.$store.commit("setMachines", Machines);
            this.$store.commit("setFilteredMachines", Machines);
        }
    }
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
