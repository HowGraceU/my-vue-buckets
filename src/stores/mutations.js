import Vue from 'vue';
import {} from './mutations_type/mutations_type';

const mutations = {
	setItem(state, { url, data }) {
		Vue.set(state.items, url, data);
	}
};
export default mutations;
