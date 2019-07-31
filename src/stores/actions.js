import { fetchApi } from '@/util';

const actions = {
	fetchItem({ commit }, url) {
		// `store.dispatch()` 会返回 Promise，
		// 以便我们能够知道数据在何时更新
		return fetchApi(`/${url}`).then(async item => {
			const data = await item.text();
			commit('setItem', { url, data });
		});
	}
};
export default actions;
