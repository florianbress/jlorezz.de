<template>
	<div class="about">
		<Navbar class="nav" />
		<div class="body">
			<div class="header-wrapper">
				<p class="about">About</p>
				<hr />
				<p class="me">Me</p>
			</div>
			<div class="img-wrapper">
				<p>
					Available for Freelance and remote Jobs after <br />
					<strong> OCT 2020 </strong>
				</p>
				<p>
					I am an 18 y/o self-taught Web & Application developer with experience in creating digital interfaces, websites, and discord
					applications.
				</p>
				<img src="../assets/photos/bnr.png" class="limg" />
			</div>
			<div class="content-wrapper">
				<p class="title">experience</p>
				<p>
					I am currently doing my Bachelor in Coding and Software Engineering, but I have been freelancing for one year now, and I was lucky
					to get the right clients. Coding is more of an obsession to me than a job.
				</p>
				<p class="title">My Process</p>
				<p>
					Typically I start my projects with research on the product or field to get an idea of what am I going to deal with, after that
					comes the mood board, competitors site/app analysis, brainstorm to generate refreshing off the grid ideas, then the fun part,
					designing and optimizing the UX, prototyping and then development (if included)
				</p>
				<p class="title">Preffered Projects</p>
				<p>
					I like projects that allow me to play with my creativity and are not limited to conventional designdesign; however, I understand
					that conventional designs are also important and even inevitable in some cases. I mainly take stand-alone development projects.
				</p>
			</div>
		</div>
		<Footer class="ftr" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
.body {
	display: grid;

	padding-left: 5%;
	padding-right: 5%;
}
.header-wrapper {
	padding-top: 10%;
	place-content: center;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 35% 45% 20%;

	text-transform: uppercase;
}
.header-wrapper p {
	color: #e5d8c7;
	font-size: 120px;
	font-weight: bold;
	font-family: pbold, sans-serif;
}
.me {
	place-self: left;
}
.header-wrapper .about {
	place-self: right;
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
	grid-template-columns: 50% 50%;
	grid-template-rows: 20% 95%;
	padding-bottom: 10%;

	padding-top: 5%;
}
.img-wrapper p {
	color: #e5d8c7;
	font-family: quest, sans-serif;
	font-size: 25px;
}
.img-wrapper img {
	width: 100%;
}

.content-wrapper {
	padding-left: 40%;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr;
}

.content-wrapper p {
	padding: 10%;
	font-family: quest, sans-serif;
	font-size: 20px;
	color: #e5d8c7;
}

.title {
	color: #e5d8c7;
	text-transform: uppercase;

	font-family: product;
	font-size: 14px;
}
</style>
