import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//types
const types = {
  SET_LOCATION: "SET_LOCATION",
  SET_ADDRESS: "SET_ADDRESS",
};

// state
const state = {
  location: {},
  address: "",
};

//getters
const getters = {
  // 获取location
  location: (state) => state.location,
  address: (state) => state.address,
};

// mutations
const mutations = {
  [types.SET_LOCATION](state, location) {
    if (location) {
      // 如果存在，则等于传递过来的location
      state.location = location;
    } else {
      // 没有则赋值为null
      state.location = null;
    }
  },
  [types.SET_ADDRESS](state, address) {
    if (address) {
      // 如果存在，则等于传递过来的address
      state.address = address;
    } else {
      // 没有则赋值为""
      state.address = "";
    }
  },
};

//actions
const actions = {
  setLocation: ({ commit }, location) => {
    commit(types.SET_LOCATION, location);
  },
  setAddress: ({ commit }, address) => {
    commit(types.SET_ADDRESS, address);
  },
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
