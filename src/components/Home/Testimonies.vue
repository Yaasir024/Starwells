<script setup>
import { ref, computed } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

// GET SWIPER
let swipfunc = null
const onSwiper = (swiper) => {
  swipfunc = swiper
}
const onSlideChange = () => {}

const nextSlide = () => {
  if (swipfunc.activeIndex < swipfunc.slides.length - 1) {
    swipfunc.slideNext()
  }
}
const prevSlide = () => {
  if (swipfunc.activeIndex > 0) {
    swipfunc.slidePrev()
  }
}
</script>

<template>
  <section
    class="bg-red-dark pt-[95px] pl-[20px] sm:pl-[35px] lg:pl-[60px] xl:pl-[120px] pb-[150px]"
  >
    <div
      class="block md:flex justify-between items-end pr-[20px] sm:pr-[35px] lg:pr-[60px] xl:pr-[120px] mb-[64px]"
    >
      <div class="">
        <h2
          class="text-[32px] sm:text-[48px] leading-[42px] sm:leading-[54px] tracking-[-0.02em] font-sharp text-white"
        >
          What people are saying.
        </h2>
        <h2
          class="text-[18px] leading-[26px] tracking-[-0.012em] text-white/60 mt-[24px] max-w-[580px]"
        >
          Starwells provide the benefits of a full billing and accounting solution to small and
          medium businesses.
        </h2>
      </div>
      <div class="text-center mt-8 md:mt-0">
        <button class="" @click="prevSlide()">
          <img src="@/assets/icons/carousel-arrow.svg" alt="" class="rotate-180 mr-4" />
        </button>
        <button class="" @click="nextSlide()">
          <img src="@/assets/icons/carousel-arrow.svg" alt="" class="" />
        </button>
      </div>
    </div>
    <div class="mt-2 swiper-container" ref="swiper">
      <swiper
        :space-between="57"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :breakpoints="{
          480: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          680: {
            slidesPerView: 1,
            spaceBetween: 60
          },
          // when window width is >= 640px
          1120: {
            slidesPerView: 1.4,
            spaceBetween: 57
          }
        }"
        :autoWidth="true"
      >
        <swiper-slide>
          <div class="px-[15px] sm:px-[20px]">
            <div class="card-gradient">
              <div class="card bg-red-dark px-[26px] xs:px-[32px] sm:px-[55px] py-[52px]">
                <img src="@/assets/icons/home/business-logos/google-white.svg" alt="" class="" />
                <h1
                  class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[34px] text-white max-w-[660px] mt-[30px]"
                >
                  We chose to migrate from our previous software to Starwells in order to improve
                  efficiency. With Starwells, we’ve reduced our time spent on reporting by over 25%
                  and saved over 30% on costs between the two softwares.
                </h1>
                <div class="mt-[31px]">
                  <h1 class="gradient-text text-[25px] leading-[25px] font-sharp">Mark Hoffman</h1>
                  <h3 class="mt-[7px] text-[15px] leading-[16px] font-sharp text-white">
                    Group Accountant
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="px-[15px] sm:px-[20px]">
            <div class="card-gradient">
              <div class="card bg-red-dark px-[26px] xs:px-[32px] sm:px-[55px] py-[52px]">
                <img src="@/assets/icons/home/business-logos/gumroad-white.svg" alt="" class="" />
                <h1
                  class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[28px] md:leading-[30px] lg:leading-[34px] text-white max-w-[670px] mt-[30px]"
                >
                  Upon seeing Starwells, we were instantly impressed by the AI capabilities and the
                  platform's aesthetics. After we onboarded, we realized that performing our tasks
                  without Starwells would be exceedingly challenging
                </h1>
                <div class="mt-[31px]">
                  <h1 class="gradient-text text-[25px] leading-[25px] font-sharp">Jeremy Fofana</h1>
                  <h3 class="mt-[7px] text-[15px] leading-[16px] font-sharp text-white">
                    Chief Finance Officier
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style scoped>
.card {
  border: 2px solid white;
  border-radius: 18px;
}
.card-gradient:hover .card {
  border: 0px;
}
.card-gradient {
  padding: 2px;
  position: relative;

  border-radius: 18px;
  transition: all 0.3s ease-in-out;
}
.card-gradient:hover {
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
}
.card-gradient:hover .card {
  border: transparent;
}

.card:hover {
  border-image-slice: 1;
  border-width: 1px;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}
.gradient-text {
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
