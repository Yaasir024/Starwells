<template>
  <footer class="">
    <div
      class="bg-white px-[35px] lg:px-[60px] xl:px-[120px] py-[48px] block md:flex justify-between"
    >
      <div class="mb-6">
        <RouterLink to="/">
          <img src="@/assets/logo/orange.svg" alt="" class="" />
        </RouterLink>
      </div>
      <div class="flex flex-col sm:flex-row">
        <ul class="mr-[50px] xl:mr-[70px] mb-6 xs:mb-0">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Features</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/invoice">
              <span class="text-black">Invoice</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/accounting">
              <span class="text-black">Accounting</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/book-keeping">
              <span class="text-black">Book Keeping</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="mr-[50px] xl:mr-[70px] mb-6 xs:mb-0">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Categories</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/pricing">
              <span class="text-black">Pricing</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/">
              <span class="text-black">Support</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/">
              <span class="text-black">Blog</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/">
              <span class="text-black">Appsumo</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="mr-[50px] xl:mr-[70px] mb-6 xs:mb-0">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Company</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/">
              <span class="text-black">About Us</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/contact-us">
              <span class="text-black">Contact</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/faq">
              <span class="text-black">FAQ</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="w-[100px] lg:w-[180px] mb-6 xs:mb-0">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Legal</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/terms-of-service">
              <span class="text-black">Terms of Use</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/">
              <span class="text-black">Privacy</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="px-[35px] lg:px-[60px] xl:px-[120px] py-[24px] bg-primary-50 flex items-center justify-between"
    >
      <p class="text-[16px] leading-[24px] text-alpha-black/60">
        Starwells. All right reserved. © 2023
      </p>
      <div class="flex items-center">
        <a href="#" target="_blank" rel="noopener noreferrer" class="mr-[16px]">
          <img src="@/assets/icons/social/facebook.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="mr-[16px]">
          <img src="@/assets/icons/social/twitter.svg" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" class="">
          <img src="@/assets/icons/social/github.svg" alt="" class="" />
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.link span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
}
</style>
