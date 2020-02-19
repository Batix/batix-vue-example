<template>
  <nav class="navbar navbar-light navbar-gray">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" :to="{name: 'Home'}">
          <img src="../assets/bx.png" height="40" class="d-inline-block align-top" alt />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse">
          <div class="navbar-nav">
            <router-link
              class="nav-item nav-link"
              :class="{ 'active': $route.name === 'Auslastung'}"
              :to="{name: 'Auslastung'}"
            >Auslastung</router-link>
            <router-link
              class="nav-item nav-link"
              :class="{ 'active': $route.name === 'Absolut'}"
              :to="{ name: 'Absolut'}"
            >Prod. Mengen</router-link>
            <router-link
              class="nav-item nav-link"
              :class="{ 'active': $route.name === 'Maschinen'}"
              :to="{ name: 'Maschienen'}"
            >Maschinen</router-link>
          </div>
        </div>
      </nav>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar"
};
</script>

<style>
.navbar-gray {
    background-color: #ddd;
}

.navbar-brand {
    padding: 0px !important;
}
</style>