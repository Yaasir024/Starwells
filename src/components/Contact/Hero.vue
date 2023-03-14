<template>
  <section class="">
    <div class="hero pt-[120px] pb-[380px]  px-4">
      <div class="flex flex-col items-center px-4">
        <h1 class="text-[32px] sm:text-[50px] md:text-[64px] font-medium font-sharp leading-[40px] sm:leading-[72px] text-center">
          We are here to help
        </h1>
        <p class="text-[18px] md:text-[20px] leading-[28px] mt-[24px] text-center max-w-[580px]">
          Starwells team is working round the clock to provide you the accounting and billing
          software
        </p>
      </div>
    </div>
    <div class="mt-[-200px] px-[35px] lg:px-[60px] xl:px-[120px] pb-[80px] flex flex-wrap justify-center">
      
      <div class="flex-full sm:flex-50% lg:flex-33.33%  px-[12px] mb-6">
        <div class="contact-card flex flex-col items-center justify-center h-[275px]">
          <img src="@/assets/icons/contact-us/mail-star.svg" alt="" class="h-[48px] w-[48px]" />
          <h1
            class="text-[24px] text-primary-900 leading-[28px] tracking-[-0.014em] font-semibold mt-[26px] text-center"
          >
          Send us an email
          </h1>
          <p
            class="text-[24px] text-alpha-black leading-[24px] tracking-[-0.01em] mt-[16px] text-center max-w-[380px]"
          >
          support@starwells.co
          </p>
        </div>
      </div>
      <div class="flex-full sm:flex-50% lg:flex-33.33%  px-[12px] mb-6">
        <div class="contact-card flex flex-col items-center justify-center h-[275px]">
          <img src="@/assets/icons/contact-us/mail-unread.svg" alt="" class="h-[48px] w-[48px]" />
          <h1
            class="text-[24px] text-primary-900 leading-[28px] tracking-[-0.014em] font-semibold mt-[26px] text-center"
          >
          Media Inquiries
          </h1>
          <p
            class="text-[24px] text-alpha-black leading-[24px] tracking-[-0.01em] mt-[16px] text-center max-w-[380px]"
          >
          hello@starwells.co
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  /* background-image: url(./../../assets/images/contact/hero-bg.png); */
  background-image: url(./../../../images/hero/contact.svg);
  background-repeat: no-repeat;
  background-size: cover;
}

.contact-card {
  background: #FFFFFF;
border: 1px solid rgba(47, 43, 67, 0.1);
box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
border-radius: 18px;
}
</style>
