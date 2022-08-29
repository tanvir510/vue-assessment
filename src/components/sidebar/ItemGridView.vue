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
      <div class="process"><span>1/2</span></div>
    </div>

    <!-- Section items -->
    <div class="items-elements">
      <label
        :for="`selectedItems${card?.id}`"
        class="card-item"
        :class="card?.selected ? 'active' : null"
        v-for="(card, i) in items"
        :key="i"
      >
        <input
          v-model="selectedItems"
          type="checkbox"
          :value="card"
          name="selecteditems"
          :id="`selectedItems${card?.id}`"
          style="display: none"
          @change="handleSelection(card, $event.target.checked)"
        />
        <div class="thumb">
          <img :src="card?.icon" :alt="card?.title" />
        </div>
        <div class="title">{{ card?.title }}</div>
      </label>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import { mapGetters } from 'vuex';
import config from '../../../configs/config.json';

export default {
  name: 'GridView',
  store,
  props: {
    data: { type: Object, default: () => {} },
  },
  data() {
    return {
      config,
      selectedItems: [],
      items: [...store.getters.getItems] || [],
    };
  },
  computed: {
    ...mapGetters({
      getItems: 'getItems',
    }),
  },
  watch: {
    getItems(value) {
      if (value) {
        this.items = [...value];
      }
    },
  },
  methods: {
    handleSelection(card, status) {
      card.selected = status;

      // Update items into vuex
      const updateItems = this.items?.map((item) => {
        if (item?.id === card?.id) {
          item = card;
        }

        return item;
      });

      // Commit action fire
      store.commit('setItems', updateItems);
      store.commit('setSelectedItems', JSON.parse(JSON.stringify(this.selectedItems)));
    },
  },
};
</script>

<style scoped>
.items-elements {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
  padding-bottom: 70px;
}
.items-elements .card-item {
  flex-basis: 30%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  margin: 8px 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
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
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: #272727;
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
