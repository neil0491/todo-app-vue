import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  },

  mutations: {
    createTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    updateTask(state, { id, description, title }) {
      const tasks = state.tasks.concat();
      const index = tasks.findIndex((t) => t.id === id);
      const task = tasks[index];

      tasks[index] = { ...task, description, title };
      state.tasks = tasks;
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },

    toggleStatus(state, item) {
      state.tasks.map((task) => {
        if (task.id === item.id) {
          task.status = !task.status;
          localStorage.setItem("tasks", JSON.stringify(state.tasks));
        }
      });
    },
    deleteTask(state, id) {
      state.tasks.splice(state.tasks.indexOf(id), 1);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
  },
  actions: {
    createTask({ commit }, task) {
      commit("createTask", task);
    },
    toggleStatus({ commit }, item) {
      commit("toggleStatus", item);
    },
    updateTask({ commit }, task) {
      commit("updateTask", task);
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
    },
  },
  getters: {
    tasks: (state) => state.tasks,
    taskById: (state) => (id) => state.tasks.find((task) => task.id === id),
    taskByStatus: (state) =>
      state.tasks.map((el, index) => {
        if (el.status) {
          return index;
        }
      }),
    // taskById: (state) => {console.log(state.tasks)},
  },
  modules: {},
});
