<template>
  <nav class="navbar navbar-light bg-info">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <router-link class="navbar-brand" :to="{name: 'Home'}">Home</router-link>
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
              :class="{ 'active': $route.name === 'Maschienen'}"
              :to="{ name: 'Maschienen'}"
            >Maschienen</router-link>
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
</style>