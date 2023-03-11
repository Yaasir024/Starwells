<template>
  <footer class="bg-white px-[120px]">
    <div class="py-[48px] flex justify-between">
      <div class="">
        <img src="@/assets/logo/orange.svg" alt="" class="" />
      </div>
      <div class="flex">
        <ul class="w-[180px]">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Features</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Invoice</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Accounting</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Book Keeping</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="w-[180px]">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Categories</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Pricing</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Support</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Blog</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Appsumo</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="w-[180px]">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Company</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">About Us</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Contact</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">FAQ</span>
            </RouterLink>
          </li>
        </ul>
        <!--  -->
        <ul class="w-[180px]">
          <li class="link mb-[8px]">
            <span class="text-alpha-black">Legal</span>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Terms of Use</span>
            </RouterLink>
          </li>
          <li class="link mb-[8px]">
            <RouterLink to="/home">
              <span class="text-black">Privacy</span>
            </RouterLink>
          </li>
        </ul>
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