<template>
	<div class="project-wrapper">
		<div class="nitroleague">
			<a href="https://nitroleague.de/">
				<img src="../assets/photos/chuu.jpg" class="nimg" />
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
				<div class="img-wrapper">
					<img src="../assets/photos/pos.jpg" class="aimg" />
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
				<img src="../assets/photos/cur.jpg" class="dimg" />
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
				<img src="../assets/photos/star.jpg" class="mimg" />
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
	name: "ProjectPanels",
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
.nitroleague {
	padding-left: 15%;
	align-self: center;
}
.nitroleague .nimg {
	width: 50%;
}

.acrysbot {
	padding-left: 15%;
	align-self: center;
}
.acrysbot .aimg {
	width: 50%;
}

.dachmans {
	padding-top: 10%;
	padding-left: 15%;
	align-self: center;
}
.dachmans .dimg {
	width: 50%;
}
.minkz {
	padding-left: 15%;
	align-self: center;
}
.minkz .mimg {
	width: 50%;
}
.title {
	padding-top: 2%;
	color: #e5d8c7;
	font-family: quest, sans-serif;
}
.description {
	color: #e5d8c7;
	font-family: quest;
	font-size: 12px;
	opacity: 0.5;
}
</style>
