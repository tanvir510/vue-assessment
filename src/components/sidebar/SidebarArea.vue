<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="sidebar-area" :class="openSidebar ? 'active' : ''">
    <div class="sidebar-inner">
      <!-- Close sidebar -->
      <div @click="$emit('changeSidebar', false)" class="close-sidebar">
        {{ config?.launcher?.closeText }}
      </div>

      <!-- Carousel -->
      <CarouselArea />

      <!-- Item grid view -->
      <ItemGridView v-if="step === 1" :data="config?.flow?.pages?.[0]" />

      <!-- Item list view -->
      <ItemListView v-if="step === 2" :data="config?.flow?.pages?.[1]" />

      <!-- Footer -->
      <footer>
        <!-- Skip Button -->
        <div v-if="step === 1" class="outline-btn" @click="handleSkip()">Skip</div>
        <!-- Next Button -->
        <div v-if="step === 1" class="fill-btn" @click="step = 2">Next</div>
        <!-- Restart Button -->
        <div v-if="step === 2" class="outline-btn" @click="handleRestart()">Restart</div>
        <!-- Actions button -->
        <div class="actions" v-if="step === 2">
          <!-- Back Button -->
          <div v-if="step === 2" class="outline-btn" @click="step = 1">Back</div>
          <!-- Submit button -->
          <div v-if="step === 2" class="fill-btn">Submit</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import config from '../../../configs/config.json';
import CarouselArea from './CarouselArea.vue';
import ItemGridView from './ItemGridView.vue';
import ItemListView from './ItemListView.vue';

export default {
  name: 'SidebarArea',
  store,
  props: {
    openSidebar: { type: Boolean, default: false },
  },
  components: { CarouselArea, ItemGridView, ItemListView },
  data() {
    return {
      config,
      step: 1,
    };
  },
  methods: {
    handleSkip() {
      this.step = 2;
      store.commit('setItems', config?.flow?.pages?.[0]?.cards);
      store.commit('setSelectedItems', []);
    },

    handleRestart() {
      this.step = 1;
      store.commit('setRestart', true);
    },
  },
};
</script>

<style>
footer {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 535px;
  width: 100%;
  background: #fff;
  padding: 0px 20px;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0px 9px 14px #333;
}

.outline-btn {
  color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c7a17a;
  border-radius: 6px;
}

.actions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.actions .outline-btn {
  margin-right: 7px;
  background: rgba(199, 161, 122, 0.16);
  border: none;
}

.fill-btn {
  color: #fff;
  background-color: #c7a17a;
  cursor: pointer;
  font-size: 14px;
  min-width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
}
.sidebar-area {
  max-width: 576px;
  width: 100%;
  background: #fff;
  position: absolute;
  right: -376px;
  top: 0px;
  transition: all 0.5s ease-in-out;
}
.sidebar-area.active {
  right: 0px;
}

.close-sidebar {
  position: absolute;
  top: 50%;
  left: -13.9%;
  transform: translateY(-50%) rotate(-90deg);
  height: 40px;
  min-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 12px 0px 0px;
  background: #c7a17a;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.process {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 5px solid;
  border-color: #f1f1f1 #f1f1f1 #f1f1f1 #f1f1f1;
  background: rgba(#c7a17a, 0.1);
  border-radius: 100%;
  font-family: Arial, Helvetica, sans-serif;
  color: #272727;
  font-size: 14px;
  transform: rotate(45deg);
  position: relative;
}

.process span {
  transform: rotate(-45deg);
  display: block;
}
</style>
