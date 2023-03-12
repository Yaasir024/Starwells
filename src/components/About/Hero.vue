<template>
  <section class="hero pt-[88px] pl-[20px] sm:pl-[35px] lg:pl-[60px] xl:pl-[120px]">
    <div class="flex">
      <div class="lg:shrink-0 pb-[200px]">
        <button
          class="badge text-[13px] leading-[13px] tracking-[-0.015em] text-black font-sharp py-[5px] px-[17px] mb-[20px]"
        >
          About Starwells
        </button>
        <h2
          class="text-[36px] sm:text-[52px] md:text-[64px] leading-[42px] sm:leading-[58px] md:leading-[72px] tracking-[-0.015em] font-medium font-sharp text-white mt-[24px] max-w-[630px]"
        >
          Our mission is to save time
        </h2>
        <h4
          class="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] text-[#E8EAEF] mt-[24px] max-w-[565px]"
        >
          We want you to say goodbye to the
          <span class="text-[#FFAE01] line-through">tedious task</span> of spreadsheet management by
          embracing Starwells. Save yourself countless hours with this innovative solution.
        </h4>
      </div>
      <div class="hidden lg:block">
        <img src="@/assets/images/about/hero.png" alt="" class="" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background-image: url(./../../assets/images/about/hero-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.badge {
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  border-radius: 2px;
}
</style>
