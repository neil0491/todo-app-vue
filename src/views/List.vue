<template>
  <v-list three-line v-if="tasks.length !== 0">
    <v-list-item-group
      v-model="taskByStatus"
      active-class="green--text accent-1"
      multiple
    >
      <template v-for="(item, index) in tasks">
        <v-list-item :key="item.id" @click="toggleStatus(item)">
          <template v-slot:default="{ active }">
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>

              <div class="d-inline-flex">
                <v-chip
                  class="ma-2 blue-grey blue-grey--text text--lighten-5"
                  v-for="(chip, index) in item.chips"
                  :key="index"
                >
                  {{ chip }}
                </v-chip>
              </div>

              <v-list-item-subtitle
                v-text="item.description"
              ></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text
                v-text="item.date"
              ></v-list-item-action-text>
              <v-btn v-if="!active" color="grey" fab x-small dark>
                <v-icon> mdi-check</v-icon>
              </v-btn>
              <v-btn v-else color="green" fab x-small dark>
                <v-icon> mdi-check </v-icon>
              </v-btn>
              <div class="my-2">
                <router-link :to="{ name: 'task', params: { id: item.id } }">
                  <v-btn color="red" fab x-small dark>
                    <v-icon>mdi-book-open-page-variant</v-icon>
                  </v-btn>
                </router-link>
              </div>
            </v-list-item-action>
          </template>
        </v-list-item>

        <v-divider v-if="index < tasks.length - 1" :key="index"></v-divider>
      </template>
    </v-list-item-group>
  </v-list>
  <v-card v-else class="mt-4 pa-md-10 mx-lg-auto text-center">
    <v-card-text>
      <h2 class="text-h4">No TODOS . . .</h2>
      <div class="mt-9 text-h4 text-uppercase">
        <router-link to="/create" exact exact-active-class="active">
          add todo</router-link
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "List",
  data: () => ({
    model: [],
  }),
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
    taskByStatus: {
      get() {
        return this.$store.getters.taskByStatus;
      },
      set(value) {
        this.$store.commit("toggleStatus", value);
      },
    },
  },
  watch: {
    model() {
      this.model = this.$store.getters.taskByStatus;
    },
  },
  methods: {
    toggleStatus(item) {
      this.$store.dispatch("toggleStatus", item);
    },
  },
};
</script>

