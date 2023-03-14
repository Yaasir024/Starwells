<script setup>
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
import WhiteButton from '@/components/Buttons/WhiteButton.vue'
</script>

<template>
  <section
    class="hero px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] pt-[40px] sm:pt-[60px] max-h-[750px]"
  >
    <div class="flex justify-between">
      <div class="flex flex-col xl:shrink-0 pt-[102px] md:mr-[87px]">
        <RouterLink to="/about">
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
        </RouterLink>
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

        <div class="email-input flex items-center mt-[40px]">
          <div class="mr-[12px]">
            <RouterLink to="/contact-us">
              <GradientBtn text="contact sales" />
            </RouterLink>
          </div>
          <div class="">
            <RouterLink to="/about">
              <WhiteButton text="learn more" />
            </RouterLink>
          </div>
        </div>
        <div class="mt-[12px] flex items-center pb-[100px]">
          <p class="text-[16px] sm:text-[18px] leading-[24px] sm:leading-[29px] text-white">
            Live in <span class="font-medium">Africa and Europe</span>
          </p>
        </div>
      </div>
      <div class="hidden xl:flex marquee-section gap-x-[24px]">
        <div class="marquee marquee--vertical">
          <div class="marquee__group">
            <img src="@/assets/images/home/animation/01.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/02.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/03.png" alt="" class="mb-[15px]" />
            <img src="@/assets/images/home/animation/04.png" alt="" class="mb-[15px]" />
          </div>
          <div aria-hidden="true" class="marquee__group">
            <img src="@/assets/images/home/animation/01.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/02.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/03.png" alt="" class="mb-[15px]" />
            <img src="@/assets/images/home/animation/04.png" alt="" class="mb-[15px]" />
          </div>
        </div>
        <div class="marquee marquee--vertical">
          <div class="marquee__group">
            <img src="@/assets/images/home/animation/05.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/06.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/07.png" alt="" class="mb-[15px]" />
          </div>
          <div aria-hidden="true" class="marquee__group">
            <img src="@/assets/images/home/animation/05.png" alt="" class="mb-[16px]" />
            <img src="@/assets/images/home/animation/06.png" alt="" class="mb-[18px]" />
            <img src="@/assets/images/home/animation/07.png" alt="" class="mb-[15px]" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* background-image: url(./../../assets/images/home/hero-bg.png); */
  background-image: url(./../../../images/hero/home.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.marquee-section:hover .marquee__group {
  animation-play-state: paused;
}
.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 12px;
  mask-image: linear-gradient(
    var(to bottom, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
}
.marquee__group {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  min-width: 100%;
  animation: scroll-x 10s linear infinite;
  max-width: 265px;
}
.marquee__group img {
  width: 100%;
}

.marquee--vertical {
  --mask-direction: to bottom;
}

.marquee--vertical,
.marquee--vertical .marquee__group {
  flex-direction: column;
}

.marquee--vertical .marquee__group {
  animation-name: scroll-y;
}

.marquee--reverse .marquee__group {
  animation-direction: reverse;
  animation-delay: -3s;
}

@keyframes scroll-x {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - 12px));
  }
}

@keyframes scroll-y {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(calc(-100% - 12px));
  }
}

.carousel:hover .marq {
  animation-play-state: paused;
}
.carousel:hover .marq2 {
  animation-play-state: paused;
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
.btn-white {
  border: 1px solid rgba(47, 43, 67, 0.1);
  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 12px;
}
.gradient-btn {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.01em;
  padding: 10px 18px;
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
}
</style>
