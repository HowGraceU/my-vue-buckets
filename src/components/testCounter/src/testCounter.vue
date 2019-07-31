<style module>
.green {
	color: green;
}
</style>

<template>
	<div>
		<button
			:class="$style.green"
			v-on:click="count++"
		>
			You clicked me {{ count }} times.
		</button>

		{{ version }}
	</div>
</template>

<script>
import { fetchApi } from '@/util';

export default {
	data: function() {
		return {
			count: 0,
			version: ''
		};
	},
	async asyncData({ preFetch }) {
		const data = await fetchApi('/version');
		const version = await data.text();

		let preData = { version };
		preFetch.saveData(preData);
	},
	created() {
		this.version = this.$getOnceData('version');
	}
};
</script>
