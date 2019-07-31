let fetchApi;

(async() => {
	if (process.env.VUE_ENV === 'server') {
		const fetch = require('node-fetch');

		fetchApi = (url, opts) => {
			return fetch(`http://localhost:3000${url}`, opts);
		};
	} else {
		fetchApi = fetch;
	}
})();

export default fetchApi;
