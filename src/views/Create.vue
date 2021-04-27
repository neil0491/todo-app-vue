<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="title"
        :rules="rules.titleRules"
        label="Title"
        clearable
        required
      ></v-text-field>

      <v-text-field
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
        v-for="(chip, index) in chips"
        :key="index"
      >
        <v-chip class="ma-2" close @click:close="onCloseChip(chip)">
          {{ chip }}
        </v-chip>
      </v-row>

      <v-textarea
        counter="2048"
        label="Text"
        :rules="rules.description"
        v-model="description"
      ></v-textarea>

      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in menu"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>

      <v-btn
        color="success"
        class="mr-4"
        @click="onSubmitTask"
        :disabled="!valid || chipValid"
      >
        Add TASK
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      title: "",
      chips: [],
      description: undefined,
      date: new Date().toISOString().substr(0, 10),
      chipText: "",
      menu: false,
      valid: false,
      chipValid: false,
      rules: {
        titleRules: [
          (v) => !!v || "Name is required",
          (v) =>
            (v && v.length <= 20) || "Name must be less than 20 characters",
        ],
        description: [
          (v) => !!v || "Name is required",
          (v) => (v && v.length <= 2048) || "Max 2048 characters",
        ],
      },
    };
  },
  methods: {
    addChip() {
      if (this.chipText) {
        this.chipValid = false;
        this.chips.push(this.chipText);
        this.chipText = "";
      }
    },
    onCloseChip(item) {
      // this.chips = this.chips.filter((chip) => chip !== item);
      const index = this.chips.indexOf(item);
      if (index > -1) {
        this.chips.splice(index, 1);
      }
    },
    onSubmitTask() {
      if (!this.chips.length) {
        this.chipValid = true;
      }
      if (this.$refs.form.validate() && this.chips.length > 0) {
        const task = {
          title: this.title,
          chips: this.chips,
          description: this.description,
          date: this.date,
          status: false,
          id: Date.now(),
        };
        this.$store.dispatch("createTask", task);
        this.$router.push("/list");
      }
    },
  },
  watch: {
    chipValid() {
      return this.chipValid;
    },
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>