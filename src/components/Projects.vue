<template>
	<div class="project-wrapper">
		<div class="nitroleague">
			<a href="https://nitroleague.de/">
				<div class="imgrev">
					<img src="../assets/photos/chuu.jpg" />
				</div>
			</a>
			<div class="title">
				<p>Nitroleague</p>
			</div>
			<div class="description">
				<p>Website & Discord Application</p>
			</div>
		</div>
		<div class="acrysbot">
			<a href="http://acrysbot.xyz/">
				<div class="imgrev">
					<img src="../assets/photos/pos.jpg" />
				</div>
			</a>
			<div class="title">
				<p>Acrysbot</p>
			</div>
			<div class="description">
				<p>Discord Application</p>
			</div>
		</div>
		<div class="dachmans">
			<a href="https://dachmans.de/">
				<div class="imgrev">
					<img src="../assets/photos/cur.jpg" />
				</div>
			</a>
			<div class="title">
				<p>DACHmans</p>
			</div>
			<div class="description">
				<p>Website & Discord Application</p>
			</div>
		</div>
		<div class="minkz">
			<a href="https://discord.gg/qJ6JA4V">
				<div class="imgrev">
					<img src="../assets/photos/star.jpg" />
				</div>
			</a>
			<div class="title">
				<p>MINKZ Gaming</p>
			</div>
			<div class="description">
				<p>Discord Application</p>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Projects",
	setup() {
		return {};
	},
});
</script>

<style>
.project-wrapper {
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr;
}
</style>
