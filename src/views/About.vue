<template>
	<div class="about">
		<Navbar class="nav" />
		<div class="header-wrapper">
			<p>About</p>
			<hr />
			<p>Me</p>
		</div>
		<div class="img-wrapper">
			<p>Available for Freelance and remote Jobs after</p>
			<p>OCT 2020</p>
			<p>
				I am an 18 y/o self-taught Web & Application developer with experience in creating digital interfaces, websites, and discord
				applications.
			</p>
			<img src="../assets/photos/bnr.png" class="limg" />
		</div>
		<div class="Content-wrapper">
			<p>experience</p>
			<p>
				I am currently doing my Bachelor in Coding and Software Engineering, but I have been freelancing for one year now, and I was lucky
				to get the right clients. Coding is more of an obsession to me than a job.
			</p>
			<p>My Process</p>
			<p>
				Typically I start my projects with research on the product or field to get an idea of what am I going to deal with, after that comes
				the mood board, competitors site/app analysis, brainstorm to generate refreshing off the grid ideas, then the fun part, designing
				and optimizing the UX, prototyping and then development (if included)
			</p>
			<p>Preffered Projects</p>
			<p>
				I like projects that allow me to play with my creativity and are not limited to conventional designdesign; however, I understand
				that conventional designs are also important and even inevitable in some cases. I mainly take stand-alone development projects.
			</p>
		</div>
		<Footer class="ftr" />
	</div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
	name: "About",
	components: {
		Navbar,
		Footer,
	},
});
</script>

<style scoped lang="scss">
.header-wrapper {
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 45% 15% 40%;

	text-transform: uppercase;
}
.header-wrapper p {
	place-self: center;

	color: #e5d8c7;
	font-size: 120px;
	font-weight: bold;
	font-family: pbold, sans-serif;
}
.header-wrapper hr {
	align-self: center;
	height: 10px;
	width: 100%;

	border: none;
	background: #e5d8c7;
}
.img-wrapper {
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 45% 15% 40%;

	text-transform: uppercase;
}
</style>
