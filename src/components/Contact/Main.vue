<template>
  <section class="pt-[100px] px-[35px] lg:px-[60px] xl:px-[120px]">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-[380px] lg:w-[440px] md:shrink-0 flex flex-col  order-2 md:order-1">
        <div class="contact-info mb-[25px]">
          <h1 class="text-[32px] text-red-dark leading-[32px] font-medium font-sharp mb-[46px]">
            Delhi, India
          </h1>
          <h3 class="text-[24px] text-black leading-[27px] font-sharp">
            <span class="block">Ben Avigdor 19</span>
            <span class="block mb-4">New Delhi, India</span>
            <span class="block">6721843</span>
            <span class="block">+91-9760069547</span>
          </h3>
        </div>
        <div class="social flex items-center justify-between">
          <button class="">
            <img src="@/assets/icons/contact-us/twitter.svg" alt="" class="" />
          </button>
          <button class="">
            <img src="@/assets/icons/contact-us/linkedin.svg" alt="" class="" />
          </button>
          <button class="">
            <img src="@/assets/icons/contact-us/facebook.svg" alt="" class="" />
          </button>
        </div>
      </div>
      <div class="md:pl-[75px] order-1 md:order-2 mb-6 md:mb-0">
        <div class="relative">
          <img src="@/assets/icons/contact-us/arrow.svg" alt="" class="absolute top-[-16px] left-[-22px] z-30" />
          <img src="@/assets/images/contact/01.png" alt="" class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  padding: 38px 40px 58px 40px;
  border: 0.5px solid #442a2a;
  border-radius: 18px;
}
.social {
  padding: 30px 40px;
  background: radial-gradient(137.05% 100% at 50% 0%, #ffdbc7 5.59%, #fff6e4 51.56%, #ffffff 100%);
  /* Alpha-black/10% */

  border: 1px solid rgba(47, 43, 67, 0.1);
  border-radius: 18px;
}
.social button {
  height: 78px;
  width: 78px;
  border-radius: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffe6d1;
  border: 3px solid #e9bb95;
}
</style>
