<script setup>
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
import WhiteButton from '@/components/Buttons/WhiteButton.vue'
</script>

<template>
  <section class="flex bg-[#FFEDD9]">
    <div
      class="flex-full lg:flex-50% pl-[20px] sm:pl-[35px] lg:pl-[60px] xl:pl-[120px] pt-[102px] pb-[70px] pr-[20px] sm:pr-[35px] lg:pr-[90px]"
    >
      <div class="">
        <div class="badge w-fit">
          <button class="bg-[#EDEDF1] px-[8px] rounded-[20px]">
            <span class="badge-text">Invoicing</span>
          </button>
        </div>
        <h2
          class="text-[32px] sm:text-[45px] md:text-[64px] leading-[42px] sm:leading-[52px] md:leading-[72px] tracking-[-0.015em] font-medium font-sharp text-dark mt-[30px] max-w-[560px]"
        >
          Get paid faster with Starwells
        </h2>
        <h4
          class="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] text-dark mt-[24px] max-w-[560px]"
        >
          Starwells provide the benefits of a full billing and accounting solution to small and
          medium businesses.
        </h4>
        <div class="mt-[36px] flex items-center">
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
      </div>
    </div>
    <div class="hidden lg:block flex-50%">
      <img src="@/assets/images/invoice/hero.png" alt="" class="" />
    </div>
  </section>
</template>

<style scoped>
.badge {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 8px 2px 6px;

  background: rgba(255, 255, 255, 0.1);
  /* Primary/200 */

  border: 1px solid #dcdae2;
  border-radius: 20px;
}
.badge-text {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: -0.01em;
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
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
