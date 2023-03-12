<template>
  <section class="hero px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] max-h-[100vh]">
    <div class="flex justify-between">
      <div class="flex flex-col xl:shrink-0 pt-[102px] md:mr-[87px]">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <div class="badge-container px-[10px] py-[6px] flex items-center w-fit">
            <button
              class="text-[14px] leading-[20px] font-medium text-main-red tracking-[-0.01em] bg-[#EDEDF1] rounded-[20px] py-1 px-2 mr-[8px]"
            >
              Starwells Rebrand
            </button>
            <span
              class="text-[14px] leading-[20px] font-medium text-white tracking-[-0.01em] mr-[10px]"
              >Learn more</span
            >

            <img src="@/assets/icons/arrow-right.svg" alt="" class="" />
          </div>
        </a>
        <h1
          class="text-[36px] sm:text-[52px] md:text-[64px] leading-[42px] sm:leading-[58px] md:leading-[72px] tracking-[-0.015em] font-medium text-white font-sharp mt-[24px] max-w-[560px]"
        >
          We make big accounting tasks feel smaller
        </h1>
        <h2
          class="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] text-[#E8EAEF] mt-[24px] max-w-[560px]"
        >
          Starwells is one-stop accounting software to manage your estimates, invoices, inventory,
          and much more.
        </h2>
        <div class="email-input flex items-center mt-[60px]">
          <input
            type="email"
            placeholder="Enter your email"
            class="text-[16px] leading-[24px] text-[#D9D9D9] py-[12px] px-[16px] outline-none w-full"
          />
          <button
            class="register-btn py-[12px] px-[20px] text-white text-[16px] leading-[24px] ml-[16px]"
          >
            Register
          </button>
        </div>
        <div class="mt-[12px] flex items-center pb-[100px]">
          <p class="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[29px] text-white">
            Live in <span class="font-medium">4+ African countries</span>
          </p>
          <div class="flex items-center">
            <img src="@/assets/images/home/flags/1.png" alt="" class="h-[36px] w-[36px] mr-[2px]" />
            <img src="@/assets/images/home/flags/2.png" alt="" class="h-[36px] w-[36px] mr-[2px]" />
            <img src="@/assets/images/home/flags/3.png" alt="" class="h-[36px] w-[36px] mr-[2px]" />
            <img src="@/assets/images/home/flags/4.png" alt="" class="h-[36px] w-[36px]" />
          </div>
        </div>
      </div>
      <div class="hidden xl:flex carousel">
        <div class="overflow-hidden max-w-[265px] mr-[24px]">
          <div class="marq">
            <img src="@/assets/images/home/animation/01.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/02.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/03.png" alt="" class="mb-[15px]" />
            <img src="@/assets/images/home/animation/04.png" alt="" class="mb-[15px]" />
          </div>
          <div class="marq">
            <img src="@/assets/images/home/animation/01.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/02.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/03.png" alt="" class="mb-[15px]" />
            <img src="@/assets/images/home/animation/04.png" alt="" class="mb-[15px]" />
          </div>
        </div>
        <div class="overflow-hidden max-w-[265px]">
          <div class="marq2">
            <img src="@/assets/images/home/animation/05.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/06.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/07.png" alt="" class="mb-[15px]" />
          </div>
          <div class="marq2">
            <img src="@/assets/images/home/animation/05.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/06.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/07.png" alt="" class="mb-[15px]" />
          </div>
        </div>
        <!-- <img src="@/assets/images/home/hero.png" alt="" class="" /> -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel:hover .marq {
  animation-play-state: paused;
}
.carousel:hover .marq2 {
  animation-play-state: paused;
}
.marq {
  animation: marquee 8s linear infinite;
}
.marq2 {
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
}
.hero {
  background-image: url(./../../assets/images/home/hero-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.badge-container {
  background: rgba(255, 255, 255, 0.1);

  border: 1px solid #dcdae2;
  border-radius: 20px;
}
.email-input input {
  border: 1px solid #d0d5dd;
  /* Shadow/xs */

  filter: drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.05));
  border-radius: 8px;
  background: transparent;
}
.register-btn {
  background: #131e3a;
  /* Shadow/xs */

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
