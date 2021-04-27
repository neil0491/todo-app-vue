<template>
  <v-app-bar app color="blue darken-3" dark>
    <router-link to="/" exact exact-active-class="active">
      <v-btn text>Home</v-btn>
    </router-link>
    <v-spacer></v-spacer>
    <div>
      <router-link to="/create" exact exact-active-class="active">
        <v-btn text>Create</v-btn>
      </router-link>
      <router-link to="/list" exact exact-active-class="active">
        <v-btn text>List</v-btn>
      </router-link>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="sass" scoped>
a
  text-decoration: none

</style>>