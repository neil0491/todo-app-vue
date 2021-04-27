<template>
  <v-card class="ma-3" elevation="2" outlined>
    <v-btn @click="onGoBack" tile color="primary" class="ma-3">
      <v-icon left> mdi-arrow-left </v-icon>
      Back
    </v-btn>
    <v-card-title>{{ task.title }}</v-card-title>
    <v-card-text>
      {{ task.description }}
    </v-card-text>
    <v-card-text>
      <v-chip class="ma-2" v-for="(chip, index) in task.chips" :key="index">
        {{ chip }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar>
          <v-icon :class="!task.status ? 'grey lighten-1' : 'green'" dark>
            mdi-check
          </v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ task.date }}</v-list-item-title>
        </v-list-item-content>
        <Modal :task="task" />
        <v-btn
          @click="onDelete(task.id)"
          class="mx-2"
          fab
          dark
          small
          color="pink"
        >
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  components: { Modal },
  name: "Task",
  data: () => ({
    openModal: false,
  }),
  methods: {
    onDelete(id) {
      // this.$router.go(-1);
      this.$router.push({ name: "List" });
      this.$store.commit("deleteTask", id);
    },
    onGoBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    task() {
      return this.$store.getters.taskById(+this.$route.params.id);
    },
  },
};
</script>

<style>
</style>