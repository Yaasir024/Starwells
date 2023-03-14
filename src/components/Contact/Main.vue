<template>
  <section class="pt-[100px] px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px]">
    <div class="flex flex-col md:flex-row">
      <div class="md:w-[380px] lg:w-[440px] md:shrink-0 flex flex-col order-2 md:order-1">
        <div class="contact-info mb-[25px]">
          <h1
            class="text-[24px] sm:text-[32px] text-red-dark leading-[28px] sm:leading-[32px] tracking-[-0.01em] font-medium font-sharp mb-[32px] sm:mb-[46px]"
          >
            Lagos, Nigeria
          </h1>
          <h1
            class="text-[18px] sm:text-[24px] text-black leading-[24px] sm:leading-[29px] font-sharp"
          >
            <p class="max-w-[276px]">
              Starwells Limited <br />
              35 King George Road, Onikan, Lagos, Nigeria
            </p>
          </h1>
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
          <img
            src="@/assets/icons/contact-us/arrow.svg"
            alt=""
            class="absolute top-[-16px] left-[-16px] sm:left-[-22px] z-30"
          />
          <img src="@/assets/images/contact/01.png" alt="" class="" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  padding: 38px 40px 42px 40px;
  border: 0.5px solid #442a2a;
  border-radius: 18px;
}
@media only screen and (max-width: 640px) {
  .contact-info {
    padding: 38px 35px 42px 35px;
  }
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
