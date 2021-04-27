<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="sass">
a
  text-decoration: none

.active
  button
    border: 1px solid
    border-color: inherit
</style>
