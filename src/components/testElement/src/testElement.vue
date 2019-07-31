<template>
	<div>
		<el-input
			v-model="input"
			placeholder="请输入内容"
		/>
		<span :class="$style.yellow">{{ input }}</span>

		<div
			v-for="(version, name) in prePackage"
			:key="name"
		>
			<el-button>{{ name }} : {{ version }}</el-button>
		</div>
	</div>
</template>

<script>
import { fetchApi } from '@/util';
import { Input, Button } from 'element-ui';

export default {
	components: {
		[Input.name]: Input,
		[Button.name]: Button
	},
	data() {
		return {
			input: '',
			prePackage: {}
		};
	},
	async asyncData({ preFetch }) {
		const data = await fetchApi('/package');
		const prePackage = await data.json();

		let preData = { prePackage };
		preFetch.saveData(preData);
	},
	created() {
		this.prePackage = this.$getOnceData('prePackage');
	}
};
</script>

<style module>
.yellow {
	color: yellow;
}
</style>
