<template>
  <section class="bg-white pt-[180px] px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] pb-[70px]">
    <div class="flex flex-col md:flex-row">
      <div class="md:mr-[75px] lg:mr-[100px] xl:mr-[140px] order-2 md:order-1">
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

    <div class="mt-24">
      <div class="gridbox">
        <div class="box-01 pr-[24px]">
          <div
            class="bg-[#FF9533] h-full w-full rounded-[22px] px-[45px] py-[24px] flex flex-col justify-between"
          >
            <h1
              class="text-[70px] lg:text-[115px] leading-[82px] lg:leading-[142px] font-sharp font-medium text-white"
            >
              2021
            </h1>
            <h3
              class="text-[20px] lg:text-[24px] leading-[26px] lg:leading-[36px] font-sharp text-white max-w-[200px]"
            >
              Founded in Delhi, India
            </h3>
          </div>
        </div>
        <div class="box-02">
          <div
            class="bg-red-dark h-full w-full rounded-l-[22px] rounded-tr-[22px] px-[55px] flex items-center justify-end"
          >
            <h1
              class="text-[70px] lg:text-[115px] leading-[82px] lg:leading-[132px] font-sharp font-medium text-[#FF8B54]"
            >
              92%
            </h1>
          </div>
        </div>
        <div class="box-03 pt-[24px] pr-[24px]">
          <div
            class="bg-[#FFC28A] h-full w-full rounded-[22px] px-[32px] py-[20px] flex flex-col justify-between"
          >
            <h1
              class="text-[70px] lg:text-[115px] leading-[82px] lg:leading-[132px] font-sharp font-medium text-red-dark"
            >
              1M+
            </h1>
            <h3
              class="text-[20px] lg:text-[24px] leading-[26px] lg:leading-[30px] font-sharp text-red-dark max-w-[260px]"
            >
              Invoices generated on Starwells
            </h3>
          </div>
        </div>
        <div class="box-04">
          <div
            class="bg-red-dark h-full w-full rounded-b-[22px] py-[38px] px-[14px] flex flex-col justify-end items-center"
          >
            <h3
              class="text-[20px] lg:text-[24px] leading-[26px] lg:leading-[30px] font-sharp text-[#FF8B54] max-w-[260px]"
            >
              Satisfaction rate from our customers.
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gridbox {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(5, 90px);
}
.gridbox .box-01 {
  grid-column: 1 / span 4;
  grid-row: 1 / -1;
}
.gridbox .box-02 {
  grid-column: 5 / -1;
  grid-row: 1 / span 2;
}
.gridbox .box-03 {
  grid-column: 5 / span 3;
  grid-row: 3 / -1;
}
.gridbox .box-04 {
  grid-column: 8 / -1;
  grid-row: 3 / -1;
}

@media screen and (max-width: 1020px) {
  .gridbox {
    grid-template-rows: repeat(4, 90px);
  }
  .gridbox .box-02 {
    grid-row: 1 / span 1;
  }
  .gridbox .box-03 {
  grid-row: 2 / -1;
}
.gridbox .box-04 {
  grid-row: 2 / -1;
}
}
</style>
