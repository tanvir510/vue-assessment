<template>
  <!-- Carousel Area -->
  <div class="pages-wrapper">
    <!-- Section heading -->
    <div class="section-heading">
      <div class="heading">
        <h3
          class="title"
          :style="{ color: data?.title?.color, 'font-family': data?.title?.fontFamily }"
        >
          {{ data?.title?.text }}
        </h3>
        <p
          class="description"
          :style="{ color: data?.description?.color, 'font-family': data?.description?.fontFamily }"
        >
          {{ data?.description?.text }}
        </p>
      </div>
      <div class="process"><span> 1/2 </span></div>
    </div>

    <!-- Section items -->
    <div class="items-elements">
      <label
        :for="`selectedItem${card?.id}`"
        class="card-item"
        :class="card?.selected ? 'active' : null"
        v-for="(card, i) in items"
        :key="i"
      >
        <input
          v-model="selectedItem"
          type="radio"
          :value="card"
          name="selecteditem"
          :id="`selectedItem${card?.id}`"
          style="display: none"
          @change="handleSelection(card, $event.target.checked)"
        />
        <div class="title">{{ card?.title }}</div>
        <p class="description">{{ card?.description }}</p>
      </label>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import config from '../../../configs/config.json';

export default {
  name: 'ListView',
  store,
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      config,
      selectedItem: [],
      items: [...store.getters.getData] || [],
      tests: store.getters.getSelectedItem || [],
    };
  },
  methods: {
    handleSelection(card, status) {
      card.selected = status;

      const updateItems = this.items?.map((item) => {
        if (item?.id === card?.id) {
          item = card;
        } else {
          item.selected = false;
        }

        return item;
      });

      store.commit('setData', updateItems);
      store.commit('setSelectedItem', JSON.parse(JSON.stringify(this.selectedItem)));
    },
  },
};
</script>

<style scoped>
.process {
  border-color: #c7a17a #c7a17a #f1f1f1 #f1f1f1;
}

.process span {
  transform: rotate(-45deg);
  display: block;
}

.items-elements {
  margin-top: 20px;
  display: block;
  padding-bottom: 70px;
}
.items-elements .card-item {
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  display: block;
  padding: 20px;
  margin-bottom: 15px;
}
.items-elements .card-item:last-child {
  margin-bottom: 0px;
}

.card-item.active {
  border: 1px solid #c7a17a;
}

.card-item.active:after {
  position: absolute;
  content: url('../../assets/img/active-item.png');
  top: 0;
  right: 0%;
  z-index: 0;
}

.card-item .title {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #272727;
}

.card-item .description {
  font-family: 'Jost';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: #333;
  margin-bottom: 0px;
  margin-top: 5px;
}

.pages-wrapper {
  padding: 20px;
}

.section-heading .title {
  margin: 15px 0px 5px;
}
.section-heading .description {
  margin: 5px 0px 0px;
}
</style>
