<template>
  <section class="bg-white pt-[102px] px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] pb-[70px]">
    <div class="flex flex-col items-center justify-center">
      <button class="gradient-badge text-white py-[6px] px-[8px]">Why Starwells</button>
      <h2
        class="text-[48px] leading-[54px] tracking-[-0.02em] text-primary-900 font-sharp text-center mt-[32px]"
      >
        See the bigger picture with us
      </h2>
      <h2
        class="text-[18px] leading-[26px] tracking-[-0.012em] text-alpha-black/60 font-sharp text-center mt-[24px] max-w-[580px]"
      >
        Starwells provide the benefits of a full billing and accounting solution to small and medium
        businesses.
      </h2>
    </div>
    <div class="mt-[84px]">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-[80px]">
        <div class="px-[12px] md:max-h-[800px] h-full">
          <RouterLink to="/invoicing">
            <div class="card-white active pt-[48px] pl-[32px] lg:pl-[48px] overflow-hidden h-full">
              <div class="pr-[32px] mb-[66px]">
                <img
                  src="@/assets/images/home/why/icon-invoice.svg"
                  alt=""
                  class="h-[64px] w-[64px]"
                />
                <h2
                  class="text-[24px] leading-[32px] tracking-[-0.016em] font-medium font-sharp text-primary-900 mt-[24px]"
                >
                  Unlimited Invoices & Estimates
                </h2>
                <h2
                  class="text-[16px] leading-[24px] tracking-[-0.01em] text-alpha-black/60 mt-[24px] max-w-[500px]"
                >
                  Save time and avoid late fees on every vendor invoice by streamlining your AP
                  process from purchase order to bank transfer.
                </h2>
              </div>
              <img src="@/assets/images/home/why/invoice.png" alt="" class="" />
            </div>
          </RouterLink>
        </div>
        <!--  -->
        <div class="px-[12px] md:max-h-[800px] h-full">
          <RouterLink to="/accounting">
            <div class="card-white pt-[48px] pl-[32px] lg:pl-[48px] overflow-hidden h-full">
              <div class="pr-[32px] mb-[66px]">
                <img
                  src="@/assets/images/home/why/icon-billing.svg"
                  alt=""
                  class="h-[64px] w-[64px]"
                />
                <h2
                  class="text-[24px] leading-[32px] tracking-[-0.016em] font-medium font-sharp text-primary-900 mt-[24px]"
                >
                  Billing and Accounting
                </h2>
                <h2
                  class="text-[16px] leading-[24px] tracking-[-0.01em] text-alpha-black/60 mt-[24px] max-w-[500px]"
                >
                  Eliminate double entry and save hours with custom exports to your favorite
                  accounting systems.
                </h2>
              </div>
              <img src="@/assets/images/home/why/billing.png" alt="" class="" />
            </div>
          </RouterLink>
        </div>
        <!--  -->
        <div class="px-[12px] md:max-h-[640px] h-full">
          <div class="card-white pt-[48px] pl-[32px] lg:pl-[48px] overflow-hidden h-full">
            <div class="pr-[32px] mb-[66px]">
              <img
                src="@/assets/images/home/why/icon-analytics.svg"
                alt=""
                class="h-[64px] w-[64px]"
              />
              <h2
                class="text-[24px] leading-[32px] tracking-[-0.016em] font-medium font-sharp text-primary-900 mt-[24px]"
              >
                Advance Analytics
              </h2>
              <h2
                class="text-[16px] leading-[24px] tracking-[-0.01em] text-alpha-black/60 mt-[24px] max-w-[500px]"
              >
                Reduce operational overhead, boost productivity, and work more cost-effectively.
              </h2>
            </div>
            <img src="@/assets/images/home/why/analytics.png" alt="" class="" />
          </div>
        </div>
        <!--  -->
        <div class="px-[12px] md:max-h-[640px] h-full">
          <RouterLink to="/book-keeping">
            <div class="card-white pt-[48px] pl-[32px] lg:pl-[48px] overflow-hidden h-full">
              <div class="pr-[32px] mb-[66px]">
                <img
                  src="@/assets/images/home/why/icon-book.svg"
                  alt=""
                  class="h-[64px] w-[64px]"
                />
                <h2
                  class="text-[24px] leading-[32px] tracking-[-0.016em] font-medium font-sharp text-primary-900 mt-[24px]"
                >
                  Full Book-Keeping Suite
                </h2>
                <h2
                  class="text-[16px] leading-[24px] tracking-[-0.01em] text-alpha-black/60 mt-[24px] max-w-[500px]"
                >
                  We’ve combined smart payment methods with even smarter financial software to
                  create the perfect accounting solution.
                </h2>
              </div>
              <img src="@/assets/images/home/why/book.png" alt="" class="" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gradient-badge {
  background: linear-gradient(90deg, #ff3a31 0.01%, #ffae01 100.01%);
  border-radius: 20px;
}

.card-white {
  background: #ffffff;
  border: 1px solid rgba(47, 43, 67, 0.1);
  border-radius: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.card-white:hover {
  transform: scale(1.02);
  background: radial-gradient(137.05% 100% at 50% 0%, #ffddca 5.59%, #fff7cc 44.79%, #ffffff 100%);
}
.card-white.active {
  background: radial-gradient(137.05% 100% at 50% 0%, #ffddca 5.59%, #fff7cc 44.79%, #ffffff 100%);
}
</style>
