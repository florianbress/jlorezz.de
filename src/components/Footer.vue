<template>
	<div class="footer">
		<div class="name-wrapper">
			<p>
				Cont <br />
				act
			</p>
		</div>
		<hr />
		<div class="text-wrapper">
			<p>
				Have a project in mind? Would you like to share it? I don't mind making new friends 😄 <br />
				<br />
				Feel free to reach out by writing an e-mail.
			</p>
		</div>
		<div class="img-social-wrapper">
			<div class="social-wrapper">
				<p>Social</p>
				<a href="https://www.twitch.tv/jlorezz">Twitch</a>
				<a href="https://github.com/jlorezz">GitHub</a>
				<a href="https://discord.gg/JhwHvTc">Discord</a>
				<a href="https://twitter.com/jlorezz">Twitter</a>
				<a href="https://www.youtube.com/channel/UClgTtZbcvMvXj_gVpRwtDiw">Youtube</a>
			</div>
			<div class="img-wrapper">
				<img src="../assets/photos/cont.jpg" />
			</div>
		</div>
		<div class="cntct-wrapper">
			<a href="mailto:florianbress@gmail.com?subject=Lets%20Work%20Together"> Get in touch</a>
			<p>Made with 💙 by Florian Bress.</p>
		</div>
	</div>
</template>

<script>
import { onMounted, ref, defineComponent } from "vue";
export default defineComponent({
	name: "Footer",
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
	font-family: product;
	src: url(../assets/fonts/product.ttf);
}
@font-face {
	font-family: quest;
	src: url(../assets/fonts/Questrial-Regular.ttf);
}

@font-face {
	font-family: pbold;
	src: url(../assets/fonts/productb.ttf);
}

.footer {
	display: grid;
	grid-template-columns: 1fr 4fr 1fr;
	grid-template-rows: 1fr 2fr;
	column-gap: 10px;
	grid-template-areas:
		"contact hr hire"
		"contact wrapper touch";
	height: 750px;

	padding: 0px 150px;
}

.footer hr {
	height: 10px;
	align-self: center;

	background: #e5d8c7;
	border: none;
}
.name-wrapper {
	grid-area: contact;
	align-items: center;
}

.name-wrapper p {
	color: #e5d8c7;
	text-transform: uppercase;
	font-family: pbold, sans-serif;
	font-size: 7em;
}

.text-wrapper {
	grid-area: hire;
	display: grid;
	place-self: center;
}

.img-social-wrapper {
	grid-area: wrapper;
	display: grid;
	grid-template-columns: 1fr 2fr;
}

.text-wrapper p {
	font-family: quest, sans-serif;
	color: #e5d8c7;
	font-size: 17px;
	line-height: 10px;
	text-decoration: noscne;
	line-height: 1.2em;
}
.social-wrapper {
	display: grid;
	align-self: center;
	height: min-content;
	/* transform: translateX(-10%) */
}
.social-wrapper p {
	font-family: quest, sans-serif;
	font-size: 1.066em;
	color: #e5d8c7;
	opacity: 0.5;
}
.social-wrapper a {
	font-family: product, sans-serif;
	font-size: 1.066em;
	line-height: 1.154em;
	text-decoration: none;
	color: #e5d8c7;
}

.social-wrapper a:hover {
	color: #f7a823;
}

.img-wrapper {
	display: grid;
	align-content: center;
	justify-items: center;
}

.img-wrapper img {
	width: 100%;
	height: 100%;
}

.cntct-wrapper {
	grid-area: touch;
	align-self: center;
	display: grid;
}

.cntct-wrapper a {
	margin-right: 10px;
	font-size: 25px;
	color: #e5d8c7;
	font-family: quest, sans-serif;
	transition: 0.4s ease;
	text-decoration-thickness: 0.09em;
}
.cntct-wrapper a:hover {
	color: #f7a823;
}

.cntct-wrapper p {
	font-size: 11px;
	font-family: product;
	transform: translate(0, 10em);
	color: #e5d8c7;
	opacity: 0.5;
}
</style>
