<template>
  <section class="px-[35px] lg:px-[60px] xl:px-[120px]">
    <div class="section flex flex-col md:flex-row justify-between overflow-hidden">
      <div class="py-[48px] pl-[48px] pr-[20px]">
        <h1 class="text-[32px] xl:text-[48px] leading-[38px] xl:leading-[54px] tracking-[-0.02em] font-sharp max-w-[480px]">
          Grow your business with Starwells
        </h1>
        <h3
          class="text-[18px] leading-[26px] text-alpha-black tracking-[-0.012em] max-w-[480px] mt-[24px]"
        >
          From online to on-the-go, we have dedicated methods for every type of operational
          accounting. And it’s all tracked and managed in our powerful clou software
        </h3>
        <button class="btn text-white mt-[44px]">Get Started</button>
      </div>
      <!-- REFACTOR -->
      <div class="hidden md:block">
        <img src="@/assets/images/grow-business.png" alt="" class="h-full" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  /* height: 386px; */
  background: radial-gradient(137.05% 100% at 50% 0%, #ffdbc7 5.59%, #fff6e4 51.56%, #ffffff 100%);

  border: 1px solid rgba(47, 43, 67, 0.1);
  border-radius: 32px;
}
.btn {
  padding: 12px 16px;

  background: #2f2b43;
  box-shadow: 0px 1px 3px rgba(47, 43, 67, 0.1), inset 0px -1px 0px rgba(47, 43, 67, 0.1);
  border-radius: 12px;
}
</style>
