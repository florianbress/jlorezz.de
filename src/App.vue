<template>
	<router-view />
	<NavbarLeft />
</template>

<script>
import { ref } from "vue";
import NavbarLeft from "./components/Navbarleft";

export default {
	components: { NavbarLeft },
	name: "App",
	setup() {
		const showleftnav = ref(false);
		window.addEventListener("scroll", function () {
			showleftnav.value = window.scrollY > 600;
		});

		return {
			showleftnav,
		};
	},
};
</script>

<style lang="scss">
body {
	width: 100%;
	height: 100%;
	margin: 0;
	overflow-x: hidden;
	text-rendering: optimizeLegibility;
	font-size: 100%;
	font-family: sans-serif;
	background: #1d1d1d;
	height: 200vh;
}
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
	user-select: none;
}

::-webkit-scrollbar {
	width: 5px;
	background: #1d1d1d;
}

::-webkit-scrollbar-thumb {
	background: #f7a823;
}

::-moz-selection,
::selection,
::-webkit-selection {
	color: inherit;
	background: transparent;
}
</style>
