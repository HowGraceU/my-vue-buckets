<template>
	<div id="app">
		<p>
			<router-link to="/index">
				Go to index
			</router-link>

			<router-link to="/counter">
				Go to counter
			</router-link>

			<router-link to="/element">
				Go to element
			</router-link>
		</p>

		<router-view />
	</div>
</template>

<script>
export default {

};

import '@/public/public.css';
</script>
