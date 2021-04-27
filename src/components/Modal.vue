<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="ma-4"
          small
          fab
          dark
          color="cyan"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon dark> mdi-pencil </v-icon>
        </v-btn>
      </template>

      <v-card class="pa-4">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            :value="task.title"
            ref="title"
            :rules="rules.titleRules"
            label="Title"
            clearable
            required
          ></v-text-field>

          <!-- <v-text-field
            v-model.trim="chipText"
            label="Tag"
            @keyup.enter="addChip"
            clearable
            :append-outer-icon="'mdi-send'"
            @click:append-outer="addChip"
          >
          </v-text-field>
          <v-alert
            v-if="chipValid"
            color="red lighten-2"
            elevation="5"
            type="error"
          >
            Please Input Tag
          </v-alert>
          <v-row
            align="center"
            justify="start"
            v-else
            v-for="(chip, index) in task.chips"
            :key="index"
          >
            <v-chip class="ma-2" close @click:close="onCloseChip(chip)">
              {{ chip }}
            </v-chip>
          </v-row> -->

          <v-textarea
            counter="2048"
            label="Text"
            :rules="rules.description"
            :value="task.description"
            ref="description"
          ></v-textarea>

          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="task.date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                :value="task.date"
                label="Pick date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="task.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(task.date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-form>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="onUpdateTask"> Update </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Modal",
  props: {
    task: Object,
  },
  data: () => ({
    dialog: false,
    chipText: "",
    menu: false,
    valid: false,
    chipValid: false,
    rules: {
      titleRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
      ],
      description: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 2048) || "Max 2048 characters",
      ],
    },
  }),
  methods: {
    onUpdateTask() {
      this.$store.dispatch("updateTask", {
        id: this.task.id,
        description: this.$refs.description.internalValue,
        title: this.$refs.title.internalValue,
      });
      this.dialog = false;
    },
  },
  mounted() {},
  created() {
    // console.log(props);
  },
};
</script>

<style>
</style>