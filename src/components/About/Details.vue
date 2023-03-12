<template>
  <section class="bg-white pt-[180px] px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] pb-[70px]">
    <div class="flex flex-col md:flex-row">
      <div class="mr-[75px] lg:mr-[100px] xl:mr-[140px] order-2 md:order-1">
        <div class="">
          <div
            class="relative text-[52px] xl:text-[67px] leading-[82px] font-sharp text-red-dark bg-[#FFDBBD] rounded-[6px] px-[9px] w-fit"
          >
            Reimagined
            <img
              src="@/assets/icons/contact-us/arrow.svg"
              alt=""
              class="absolute top-[-10px] right-[-18px] h-[12px] w-[12px]"
            />
          </div>
          <h1 class="text-[48px] xl:text-[62px] leading-[76px] font-sharp text-black mt-[10px]">
            accounting.
          </h1>
        </div>
        <div
          class="text-[20px] lg:text-[24px] leading-[32px] tracking-[-0.012em] text-#4F4F4F max-w-[560px] mt-[36px]"
        >
          <p class="mb-4">
            At our core, we aim to revolutionize the accounting software industry. The accounting
            world has been stagnant for too long, hindered by complex standards and procedures that
            make progress and innovation difficult. Businesses are forced to choose between
            efficiency and accuracy, while finance and audit teams lack the necessary tools to
            succeed.
          </p>
          <p class="">
            But we're determined to change that for the better. By combining the expertise of Big
            Four professionals with cutting-edge Artificial Intelligence technology, we're
            developing products that automate repetitive tasks, freeing up time for more strategic
            work.
          </p>
        </div>
      </div>
      <div class="order-1 md:order-2 mb-8 md:mb-0">
        <img src="@/assets/images/about/detail.png" alt="" class="h-full md:h-auto" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gridbox {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 90px);
}
</style>
