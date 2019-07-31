<style module>
.red {
  color: red;
}
</style>

<template>
	<div>
		<button
			:class="$style.red"
			@click="toggleShow"
		>
			toggle show
		</button>
		<div v-show="isShow">
			v-show test
		</div>
		{{ version }}
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			isShow: true
		};
	},
	computed: {
		version() {
			return this.$store.state.items.version;
		}
	},
	methods: {
		toggleShow() {
			this.isShow = !this.isShow;
		}
	}
};
</script>
