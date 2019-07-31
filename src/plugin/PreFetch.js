let preData = new Map();

class PreFetch {
	static install(Vue) {
		Vue.prototype.$saveData = this.prototype.saveData;
		Vue.prototype.$getData = this.prototype.getData;
		Vue.prototype.$deleteData = this.prototype.deleteData;
		Vue.prototype.$getOnceData = this.prototype.getOnceData;
	}

	saveData(data) {
		if (typeof data !== 'object') {
			return;
		}

		Object.entries(data).forEach(([key, value]) => {
			preData.set(key, value);
		});
	}

	getData(key) {
		if (key) {
			return preData.get(key);
		} else {
			const data = {};

			for (let [key, value] of preData.entries()) {
				data[key] = value;
			}

			return data;
		}
	}

	deleteData(key) {
		if (key) {
			return preData.delete(key);
		} else {
			return preData.clear();
		}
	}

	getOnceData(key) {
		let data = PreFetch.prototype.getData(key);
		PreFetch.prototype.deleteData(key);
		return data;
	}
}

export default PreFetch;
