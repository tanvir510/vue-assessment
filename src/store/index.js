import Vue from 'vue';
import Vuex from 'vuex';
import config from '../../configs/config.json';

Vue.use(Vuex);

// Initial data load
const items = config?.flow?.pages?.[0]?.cards;
const cards = config?.flow?.pages?.[1]?.cards;

export default new Vuex.Store({
  state: {
    items,
    data: cards,
    selectedItems: [],
    selectedItem: [],
  },
  getters: {
    getItems: (state) => state.items,
    getData: (state) => state.data,
    getSelectedItems: (state) => state.selectedItems,
    getSelectedItem: (state) => state.selectedItem,
  },
  mutations: {
    setItems(state, data) {
      state.items = data;
    },
    setSelectedItems(state, data) {
      state.selectedItems = data;
    },
    setData(state, data) {
      state.data = data;
    },
    setSelectedItem(state, data) {
      state.selectedItem = data;
    },
    setRestart(state, data) {
      if (data) {
        state.items = items;
        state.data = cards;
        state.selectedItems = [];
        state.selectedItem = [];
      }
    },
  },
  actions: {
    // Selected items action
    handleSelectedItems({ commit }, payload) {
      commit('setItems', payload);
    },

    handleItems({ commit }, payload) {
      commit('setSelectedItems', payload);
    },
  },
  modules: {},
});
