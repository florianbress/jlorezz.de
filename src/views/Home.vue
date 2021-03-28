<template>
	<div class="home">
		<Navbar class="nav" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
	name: 'Home',
	components: {
		Navbar,
	},
});
</script>

<style scoped lang="scss">
.nav {
	position: relative;
	top: 0;
	left: 0;
	height: 100vh;
}
</style>
