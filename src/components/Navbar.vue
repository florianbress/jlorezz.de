<template>
	<div>
		<nav class="Navbar">
			<div class="name-wrapper">
				<p>Florian Bress</p>
				<hr />
				<p>Web & Application Developer</p>
			</div>
			<div class="router-wrapper">
				<router-link to="/about">ABOUT</router-link>
				<hr />
				<router-link to="/projects">PROJECTS</router-link>
			</div>
			<div class="mbtn-wrapper">
				<div @click="toggle()">
					<hr />
					<hr />
				</div>
			</div>
		</nav>
		<Menu v-show="istoggled === true" :menuhide="istoggled" @toggle="toggle()" />
	</div>
</template>

<script>
import { onMounted, ref, defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
	name: "Navbar",
	components: {
		Menu: defineAsyncComponent(() => import("@/components/Menu.vue")),
	},
	setup() {
		const isloaded = ref(false);
		const istoggled = ref(false);
		onMounted(() => {
			setTimeout(() => {
				isloaded.value = true;
			}, 100);
		});
		function toggle() {
			istoggled.value = !istoggled.value;
		}
		return {
			isloaded,
			toggle,
			istoggled,
		};
	},
});
</script>

<style scoped lang="scss">
@font-face {
	font-family: quest;
	src: url(../assets/fonts/Questrial-Regular.ttf);
}

@font-face {
	font-family: pbold;
	src: url(../assets/fonts/productb.ttf);
}

#id {
	height: 100%;
	width: 100%;
}

.Navbar {
	display: grid;
	grid-template-columns: 40% 1fr 2fr;
	grid-template-rows: 1fr;
	width: 100%;
	height: 60px;
	background: #1d1d1d;
	border-bottom: 1px solid rgba(200, 200, 200, 0.1);
	padding-left: 5%;
}
.name-wrapper {
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 20% 10% 35%;
	text-transform: uppercase;
}

.name-wrapper p,
.router-wrapper a {
	place-self: center;

	font-family: pbold, quest;
	color: #e5d8c7;
	font-size: 11px;
	line-height: 10px;
	text-decoration: none;
}

.name-wrapper hr,
.router-wrapper hr {
	height: 2px;
	width: 100%;
	align-self: center;

	border: none;
	background: #e5d8c7;
}

.router-wrapper {
	text-transform: uppercase;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 1fr;
}

.mbtn-wrapper {
	display: grid;
	align-content: center;
	justify-content: right;
}

.mbtn-wrapper div {
	position: relative;
	width: 25px;
	height: 25px;
	right: 200px;
	cursor: pointer;
}

.mbtn-wrapper hr {
	position: absolute;
	width: 100%;
	height: 2px;
	border: none;
	background: #e5d8c7;
}

.mbtn-wrapper hr:nth-of-type(1) {
	top: 25%;
}

.mbtn-wrapper hr:nth-of-type(2) {
	top: 50%;
}

a:hover {
	color: #f7a823;
}
</style>
