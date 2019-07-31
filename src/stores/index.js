import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';

Vue.use(Vuex);

export default function createStore() {
	return new Vuex.Store({
		state,
		actions,
		mutations
	});
}
