export default {
  namespaced: true,
  state: {
    tasks: [
      { id: 1, title: "Task 1", completed: false },
      { id: 2, title: "Task 2", completed: true },
      { id: 3, title: "Task 3", completed: false }
    ]
  },
  getters: {
    allTasks: (state) => state.tasks,
    completedTasks: (state) => state.tasks.filter(t => t.completed),
    pendingTasks: (state) => state.tasks.filter(t => !t.completed)
  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    TOGGLE_TASK(state, id) {
      const task = state.tasks.find(t => t.id === id);
      if (task) task.completed = !task.completed;
    },
    DELETE_TASK(state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id);
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit("ADD_TASK", task);
    },
    toggleTask({ commit }, id) {
      commit("TOGGLE_TASK", id);
    },
    deleteTask({ commit }, id) {
      commit("DELETE_TASK", id);
    }
  }
};
