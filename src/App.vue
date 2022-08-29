<template>
  <div>
    <div class="launcher" v-if="!openSidebar">
      <button @click="openSidebar = true" :style="launcherStyle">
        {{ config?.launcher?.ctaText }}
      </button>
    </div>

    <!-- Full sidebar component -->
    <SidebarArea v-else key="" @changeSidebar="openSidebar = $event" :openSidebar="openSidebar" />
  </div>
</template>

<script>
import store from '@/store';
import config from '../configs/config.json';
import SidebarArea from './components/sidebar/SidebarArea.vue';

// Launcher Style
const launcherStyle = {
  'background-color': config?.launcher?.backgroundColor,
  'font-size': `${config?.launcher?.fontSize}px`,
  'font-family': config?.launcher?.fontFamily,
  color: config?.launcher?.color,
};

export default {
  name: 'App',
  components: { SidebarArea },
  store,
  data() {
    return {
      config,
      launcherStyle,
      openSidebar: false,
    };
  },
};
</script>

<style scoped>
.launcher {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.launcher button {
  min-width: 300px;
  height: 80px;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
