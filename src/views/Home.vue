<template>
  <v-card
    elevation="2"
    outlined
    tile
    class="mt-4 pa-10 mx-lg-auto text-center bg-0"
  >
    <v-card-text>
      <h1 class="text-center">Welcome in TODO APP</h1>
      <p class="subtitle-1 pa-4">
        This Aplication use Vuetify, Vue-router, Vuex
      </p>
      <div class="mt-9 text-h4 text-uppercase">
        <router-link to="/list" exact exact-active-class="active">
          See All List
        </router-link>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
