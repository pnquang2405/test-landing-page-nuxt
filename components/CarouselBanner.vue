<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { computed, ref } from "vue";
import CardBanner from "~/components/CardBanner.vue";
import imageBn1 from "@/assets/icons/icon-bn1.svg";
import imageBn2 from "@/assets/icons/icon-bn2.svg";
const { isMbScreen } = defineProps({
  isMbScreen: {
    type: Boolean,
    default: false,
  },
});
const list = ref([
  {
    tag: "Exclusive Tournament",
    title: "Piggy Christmas Tap:",
    subtitle: "€35,000 For Your Wins",
    buttonText: "JOIN AND WIN",
    background: "linear-gradient(to bottom, #147261, #082C25)",
    imageSrc: imageBn1,
  },
  {
    tag: "Exclusive Tournament",
    title: "Piggy Christmas Tap:",
    subtitle: "€35,000 For Your Wins",
    buttonText: "JOIN AND WIN",
    background: "linear-gradient(to bottom, #147261, #082C25)",
    imageSrc: imageBn2,
  },
  {
    tag: "Exclusive Tournament",
    title: "Piggy Christmas Tap:",
    subtitle: "€35,000 For Your Wins",
    buttonText: "JOIN AND WIN",
    background: "linear-gradient(to bottom, #147261, #082C25)",
    imageSrc: imageBn2,
  },
  {
    tag: "Exclusive Tournament",
    title: "Piggy Christmas Tap:",
    subtitle: "€35,000 For Your Wins",
    buttonText: "JOIN AND WIN",
    background: "linear-gradient(to bottom, #147261, #082C25)",
    imageSrc: imageBn2,
  },
]);

const swiperOption = computed(() => {
  if (isMbScreen) {
    return {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: false,
      modules: [Navigation, Pagination],
      loop: true,
      grabCursor: true,
      centeredSlides: true, 
      pagination: {
        clickable: true, 
      },
    };
  }
  return {
    slidesPerView: 1.5, 
    spaceBetween: 100, 
    centeredSlides: true, 
    loop: true,
    effect: "coverflow", 
    coverflowEffect: {
      rotate: 20,
      stretch: 0, 
      depth: 0, 
      modifier: 1, 
      slideShadows: false, 
    },
    grabCursor: true,
    initialSlide: 0,
    modules: [Navigation, EffectCoverflow],
  }; 
});
</script>

<template>
  <div class="show-img-wrap">
    <Swiper v-bind="swiperOption">
      <SwiperSlide
        v-for="(item, index) in list"
        :key="index + 'img'"
        class="image"
      >
        <div class="slide-content">
          <CardBanner :="item" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
::v-deep {
  .swiper.swiper-coverflow.swiper-3d {
    overflow: unset !important;
  }
  .swiper-pagination.swiper-pagination-clickable{
    z-index: 99 !important;
  }
}
.show-img-wrap {
  position: relative;
  overflow: visible;
  padding-top: 2rem;
  padding-bottom: 4rem;
  perspective: 1200px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 960px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.swiper-slide {
  transition: transform 0.5s ease, z-index 0.5s ease;
  transform-origin: center center;
  z-index: 0;
  .slide-content {
    transform: perspective(1545px) rotateX(6deg);
    opacity: 0.5;
    background-color: red;
    height: 398px;
    border-radius: 30px;
  }
}

.swiper-slide-active {
  transform: scale(1.2);

  z-index: 2;
  .slide-content {
    transform: perspective(3017px) rotateX(-4deg);
    opacity: 1;
    background-color: red;
    height: 398px;
  }
}
</style>
