import Vue from 'vue';
import createRouter from './router';
import createStore from './stores';
import createPreFetch from '@/util/PreFetch';
import { sync } from 'vuex-router-sync';

import TheIndex from '@/views/index';

export default function createApp() {
	// 创建 router 实例
	const router = createRouter();
	const store = createStore();
	const preFetch = createPreFetch();

	// 同步路由状态(route state)到 store
	sync(store, router);

	const app = new Vue({
		// 注入 router 到根 Vue 实例
		router,
		store,
		render: h => h(TheIndex)
	});

	// 返回 app 和 router
	return { app, router, store, preFetch };
}
