<template>
  <!-- Carousel Area -->
  <div class="carousel-wrapper" :style="carouselWrapperStyle">
    <h2 class="heading">{{ config?.flow?.carousel?.defaultTitle }}</h2>
    <p class="number">Total Item {{ config?.flow?.carousel?.defaultContent?.length }}</p>

    <!-- Slick slider area -->
    <div class="carousel-container">
      <!-- Carousel component -->
      <VueSlickCarousel v-bind="settings">
        <div
          class="slider-item"
          v-for="(slider, index) in config?.flow?.carousel?.defaultContent"
          :key="index"
        >
          <a :href="slider?.ctaLink" target="_blank">
            <div class="item-inner">
              <div class="thumb">
                <img :src="slider?.imageUrl" :alt="slider?.title" />
              </div>
              <div class="content">
                <h6 class="title">{{ slider?.title }}</h6>
              </div>
            </div>
          </a>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import config from '../../../configs/config.json';

// Carousel wrapper style
const carouselWrapperStyle = {
  'background-color': config?.flow?.carousel?.backgroundColor,
  'font-family': config?.flow?.carousel?.fontFamily,
  color: config?.flow?.carousel?.color,
};

export default {
  name: 'CarouselArea',
  components: { VueSlickCarousel },
  data() {
    return {
      config,
      carouselWrapperStyle,
      settings: {
        arrows: true,
        slidesToShow: 3,
      },
    };
  },
};
</script>

<style>
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
@import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

.slick-prev {
  left: -2%;
  z-index: 999;
}

.slick-next {
  right: 0%;
  z-index: 999;
}

.item-inner {
  position: relative;
  border-radius: 6px;
  margin: 0px 5px;
}

.slider-item .thumb img {
  width: 100%;
  min-height: 150px;
  border-radius: 6px;
}

.slick-prev:before {
  content: url('../../assets/img/prev.png');
}

.slick-next:before {
  content: url('../../assets/img/next.png');
}

.item-inner::after {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: linear-gradient(180deg, rgba(39, 39, 39, 0) 7.81%, #272727 100%);
}

.slider-item .content {
  position: absolute;
  bottom: 10%;
  left: 5%;
  z-index: 999;
}

.slider-item .content h6 {
  margin: 0;
  color: #fff;
}

.carousel-wrapper {
  padding: 20px;
}
.heading {
  margin-bottom: 0px;
}

.number {
  margin-top: 5px;
}
</style>
