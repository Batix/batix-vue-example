<template>
  <div class="mt-5">
    <h1 class="display-4">Startseite</h1>
    <div class="row">
      <div class="col-xl-6">
        <router-link :to="{name: 'Auslastung'}">
          <div class="row link">
            <div class="col-xl-3">
              <i class="fas fa-chart-area fa-4x"></i>
            </div>
            <div class="col-xl-9">
              <h3 class="display-5">Auslastung</h3>
              <span class="text-muted">Auslastung derr Maschienen</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-xl-6">
        <router-link :to="{name: 'Absolut'}">
          <div class="row link">
            <div class="col-xl-3">
              <i class="fas fa-chart-area fa-4x"></i>
            </div>
            <div class="col-xl-9">
              <h3 class="display-5">Produzierte Mengen</h3>
              <span class="text-muted">Anzahl der produzierten Mengen pro Maschiene</span>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-xl-6">
        <router-link :to="{name: 'Maschienen'}">
          <div class="row link">
            <div class="col-xl-3">
              <i class="fas fa-chart-pie fa-4x"></i>
            </div>
            <div class="col-xl-9">
              <h3 class="display-5">Maschinenkapazitäten</h3>
              <span class="text-muted">Verhältnis der Maschienenkapazitäten</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.link {
    border: 1px solid #ddd;
    width: 100%;
    padding: 10px;

    margin-top: 20px;

    -webkit-box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
    -moz-box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
    box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);

    &:hover {
        background-color: #eee;
        -webkit-box-shadow: inset 2px 2px 5px 0px rgba(179, 179, 179, 1);
        -moz-box-shadow: inset 2px 2px 5px 0px rgba(179, 179, 179, 1);
        box-shadow: inset 2px 2px 5px 0px rgba(179, 179, 179, 1);
    }
}

a {
    text-decoration: none;
    color: black;

    &:hover {
        text-decoration: none;
        color: black;
    }
}
</style>