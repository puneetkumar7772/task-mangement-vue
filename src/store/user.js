export default {
  namespaced: true,
  state: {
    user: null,
    isAuthenticated: false
  },
  getters: {
    getUser: (state) => state.user,
    isLoggedIn: (state) => state.isAuthenticated
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = true;
    },
    LOGOUT(state) {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
  actions: {
    // login({ commit }, { email, password }) {
    //   // fake login (you can replace with API)
    //   if (email && password) {
    //     commit("SET_USER", { email });
    //   }
    // },
    // register({ commit }, { email, password }) {
    //   // fake register (you can replace with API)
    //   commit("SET_USER", { email });
    // },
    // logout({ commit }) {
    //   commit("LOGOUT");
    // }
  }
};
