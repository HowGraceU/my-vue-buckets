import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default function createRouter() {
	return new Router({
		mode: 'history',
		routes: [{
			path: '/index',
			component: () => import('@/components/testShow'),
			alias: '/'
		}, {
			path: '/counter',
			component: () => import('@/components/testCounter')
		}, {
			path: '/element',
			component: () => import('@/components/testElement')
		}]
	});
}
