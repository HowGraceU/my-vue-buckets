import Vue from 'vue';
import PreFetch from '@/plugin/PreFetch.js';

Vue.use(PreFetch);

export default function createPreFetch() {
	return new PreFetch();
}
