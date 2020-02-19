import Vue from "vue";
import Vuex from "vuex";

import "@/extensions/DateExtension";
import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    machines: [],
    machinesData: null,
    von: new Date(new Date() - 864000000),
    bis: new Date(),
    filteredMachines: [],
  },
  mutations: {
    setMachines(state, machines) {
      state.machines = machines;
    },
    setMachinesData(state, [machine, machinesData]) {
      if (!state.machinesData) state.machinesData = {};
      state.machinesData[machine.id] = machinesData;
    },
    setFilteredMachines(state, machines) {
      state.filteredMachines = machines;
    },
    setVon(state, von) {
      state.von = von
    },
    setBis(state, bis) {
      state.bis = bis
    }
  },
  actions: {},
  modules: {},
  getters: {
    machines: state => state.machines,
    machinesData: state => state.machinesData,
    von: state => state.von,
    bis: state => state.bis,
    filteredMachines: state => state.filteredMachines
  }
});
