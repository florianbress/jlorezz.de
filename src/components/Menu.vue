<template>
	<div class="Menu">
		<!-- Menu Button -->
		<div class="cbtn-wrapper">
			<div class="cbtn" @click="toggle()">
				<hr />
				<hr />
			</div>
		</div>
		<div class="links">
			<div>
				<hr v-if="path == 'About'" />
				<router-link v-if="path != 'About'" to="/About">About</router-link>
				<p v-else>About</p>
			</div>
			<hr />
			<div>
				<hr v-if="path == 'Home'" />
				<router-link v-if="path != 'Home'" to="/Home">Home</router-link>
				<p v-else>Home</p>
			</div>
			<hr />
			<div>
				<hr v-if="path == 'Projects'" />
				<router-link v-if="path != 'Projects'" to="/Projects">Projects</router-link>
				<p v-else>Projects</p>
			</div>
		</div>
		<div class="footer">
			<div id="Mail">
				<a href="mailto:florianbress@gmail.com?subject=Lets%20Work%20Together"> Get in touch</a>
				<hr />
				<p class="description">
					This button will open your default mail client with my email filled in. If you don't want to open it, then my email is
					florianbress@gmail.com weird right?
				</p>
			</div>
			<div id="Redirects">
				<a href="LegalNotice">Legal Notice</a>
				<a href="https://www.twitch.tv/jlorezz">Twitch</a>
				<a href="https://github.com/jlorezz">GitHub</a>
				<a href="https://discord.gg/JhwHvTc">Discord</a>
				<a href="https://twitter.com/jlorezz">Twitter</a>
				<a href="https://www.youtube.com/channel/UClgTtZbcvMvXj_gVpRwtDiw">Youtube</a>
			</div>
		</div>
	</div>
</template>

<script>
import { computed, ref, defineComponent } from "vue";
import router from "@/router/index.ts";

export default defineComponent({
	name: "Menu",
	props: { menuhide: Boolean },
	setup(props, { emit }) {
		const path = ref(router.currentRoute.value.name);
		const istoggled = computed({
			get: () => props["menuhide"],
			set: value => emit(`toggle`, value),
		});

		function toggle() {
			istoggled.value = !istoggled.value;
		}

		return {
			toggle,
			path,
		};
	},
});
</script>

<style scoped lang="scss">
@font-face {
	font-family: product;
	src: url(../assets/fonts/productb.ttf);
}

@font-face {
	font-family: quest;
	src: url(../assets/fonts/Questrial-Regular.ttf);
}

.Menu {
	position: fixed;
	top: 0;
	left: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 20% 25% 1fr;
	row-gap: 20px;
	width: 100%;
	height: 100vh;
	background: #f7a823;
	z-index: 6;
}

.cbtn-wrapper {
	display: grid;
	place-content: center;

	width: 100%;
	height: 100%;
}

.cbtn {
	width: 20px;
	height: 20px;
	cursor: pointer;
	display: grid;
	place-content: center;
}

.cbtn hr {
	background: #2c2a2a;
	border: 0;
	width: 20px;
	height: 2px;
	transition: 0.3s;
}

.cbtn hr:nth-child(1) {
	transform: rotate(45deg);
}

.cbtn hr:nth-child(2) {
	transform: translateY(-100%) rotate(-45deg);
}

.links {
	display: grid;
	height: 50%;
	padding: 0 150px;
	grid-template-columns: 1.5fr 2fr 1.5fr;
	grid-template-rows: 1fr 1fr;
}

.links div {
	position: relative;
	width: min-content;
	place-self: center;
}

.links hr {
	width: 100%;
	height: 10px;
	background: #2c2a2a;
	border: 0;
	place-self: center;
}

.links div > hr {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: #2c2a2a;
	border: 0;
}

.links a,
.links p {
	place-self: center;
	font-size: 6.5vw;
	color: #2c2a2a;
	font-family: pbold;
	text-decoration: none;
	text-transform: uppercase;
}

.links a {
	cursor: pointer;
}

.links div > hr + a {
	cursor: default;
}

.footer {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;

	padding: 100px 150px;
}

.footer #Mail {
	display: grid;
	grid-template-columns: 20% 20% 30%;
	grid-template-rows: 1fr;
}

.footer #Mail a {
	margin-right: 10px;
	font-size: 25px;
	color: #2c2a2a;
	font-family: quest, sans-serif;
	transition: 0.4s ease;
	text-decoration-thickness: 0.09em;
}

.footer #Mail a:hover {
	color: white;
}

.footer #Mail hr {
	height: 2px;
	width: 65%;
	transform: translateY(12px);
	background: #2c2a2a;
	border: 0;
}

.footer #Mail p {
	transform: translateX(-10%);
	font-family: quest, sans-serif;
	font-size: 0.85em;
	color: #2c2a2a;
	width: 75%;
}

.footer #Redirects {
	display: grid;
	justify-content: end;
	height: min-content;
}

.footer #Redirects a {
	font-family: quest, sans-serif;
	font-size: 1.066em;
	line-height: 1.154em;
	transition: 0.4s ease;
	text-decoration: none;
	color: #2c2a2a;
	transform: translateX(-100%);
}

.footer #Redirects a:nth-child(1) {
	margin-bottom: 25px;
}

.footer #Redirects a:hover {
	color: white;
}
</style>
