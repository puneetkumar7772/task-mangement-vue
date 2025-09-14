import { createStore } from "vuex";
import auth from "./user";
import tasks from "./taskList";

const store = createStore({
  modules: {
    auth,
    tasks
  }
});

export default store;
