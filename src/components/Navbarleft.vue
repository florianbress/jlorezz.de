<template>
  <div>
    <div class="nav_left" v-show="showleftnav">
      <h5>
        FLORIAN BRESS
        <hr :class="{ fill: isloaded }" style="width: 4vw" />
        WEB & APPLICATION DEVELOPER
      </h5>
    </div>
    <div id="mbtn_side" v-show="showleftnav" @click="toggle()">
      <h5>MENU</h5>
    </div>
    <Menu v-if="istoggled === true" :menuhide="istoggled" @toggle="toggle()" />
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import Menu from "./Menu";

export default defineComponent({
  name: "Navbarleft",
  components: { Menu },
  setup() {
    const showleftnav = ref(false);
    window.addEventListener("scroll", function () {
      showleftnav.value = window.scrollY > 400;
    });

    const isloaded = ref(false);
    onMounted(() => {
      setTimeout(() => {
        isloaded.value = true;
      }, 100);
    });

    const istoggled = ref(false);
    function toggle() {
      istoggled.value = !istoggled.value;
    }

    return {
      showleftnav,
      isloaded,
      toggle,
      istoggled,
    };
  },
});
</script>

<style scoped lang="scss">
@font-face {
  font-family: pbold;
  src: url(../assets/fonts/productb.ttf);
}

nav hr,
.nav_left hr {
  height: 2px;
  margin: 0 10px;
}
.nav_left {
  position: fixed;
  top: 50%;
  left: 30px;
  transform: translate(-40.5%, -50%) rotate(90deg);
  white-space: nowrap;
  z-index: 5;
}
.nav_left h5,
#mbtn_side h5 {
  display: flex;
  align-items: center;
  font-family: pbold;
  font-size: 10px;
  letter-spacing: 1px;
  color: #e5d8c7;
  font-weight: normal;
}

#mbtn_side h5:hover {
  color: #f7a823;
}

#mbtn_side {
  position: fixed;
  top: 22%;
  right: 30px;
  transform: translate(0, -50%) rotate(90deg);
}

#mbtn_side,
.nav_left {
  transition: 0.4s;
}
</style>
