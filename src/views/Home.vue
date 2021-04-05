<template>
  <div class="home">
    <Navbar class="nav" />
    <div class="header-wrapper">
      <p>Entertainer</p>
      <hr />
      <p>Web & Appl</p>
      <p>Application</p>
      <hr />
      <p>Developer</p>
    </div>
    <div class="img-wrapper">
      <img src="../assets/photos/bnr2.jpg" class="banner" />
      <p>
        Hi, I'm Florian Bress, a passionate Web & Application developer based in
        Germany, Berlin. I am currently doing my Bachelor in Coding and Software
        Engineering.
      </p>
      <img src="../assets/photos/arrow.svg" class="arrow" />
    </div>
    <div class="title-wrapper">
      <div class="title">
        <p>Selected</p>
      </div>
      <hr />
      <div class="title">
        <p>Work</p>
      </div>
      <div class="description">
        <p>These are some of my personal favourite projects</p>
      </div>
    </div>
    <ProjectPanels class="pjs" />
    <Footer class="ftr" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ProjectPanels from "@/components/ProjectPanels.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Footer,
    ProjectPanels,
  },
});
</script>

<style scoped lang="scss">
.nav {
  position: relative;
  top: 0;
  left: 0;
}
.ftr {
  padding-top: 15%;
  position: relative;
}
.header-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr;
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
  height: 8px;
  width: 100%;

  border: none;
  background: #e5d8c7;
}
.img-wrapper {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 50% 40% 10%;
}
.img-wrapper .banner {
  width: 100%;
}
.img-wrapper .arrow {
  width: 40%;
  padding-top: 150%;
}
.img-wrapper p {
  padding-left: 20%;
  padding-top: 15%;
  padding-right: 20%;
  font-size: 25px;
  color: #e5d8c7;
  font-family: quest, sans-serif;
}
.title-wrapper {
  padding-top: 15%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 40% 35% 20%;
}
.title-wrapper p {
  color: #e5d8c7;
}

.title-wrapper .title {
  place-self: center;
  text-transform: uppercase;

  font-size: 100px;
  font-weight: bold;
  font-family: pbold, sans-serif;
}

.title-wrapper hr {
  align-self: center;
  height: 10px;
  width: 100%;

  border: none;
  background: #e5d8c7;
}

.title-wrapper .description {
  text-align: right;
  grid-column: 3;

  font-size: 15px;
  color: #e5d8c7;
  font-family: quest, sans-serif;
}
</style>
