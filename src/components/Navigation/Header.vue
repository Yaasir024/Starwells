<script setup>
import { ref, onMounted } from 'vue'

import MobileNav from '@/components/Navigation/MobileNav.vue'

import GradientBtn from '@/components/Buttons/GradientBtn.vue'

const showMobileNav = ref(false)
</script>

<template>
  <header
    class="bg-white flex items-center justify-between h-[80px] px-[20px] sm:px-[45px] md:px-[75px] xl:px-[112px]"
  >
    <div class="flex items-center">
      <RouterLink to="/">
        <img src="@/assets/logo/orange.svg" alt="" class="" />
      </RouterLink>
      <nav class="hidden lg:block ml-[41px]">
        <ul class="flex items-center">
          <li class="link mr-[32px]">
            <RouterLink to="/">
              <span class="">Home</span>
            </RouterLink>
          </li>
          <li class="link mr-[32px]">
            <RouterLink to="/">
              <div class="flex items-center">
                <span class="mr-[13px]">Features</span>
                <img src="@/assets/icons/dropdown.svg" alt="" class="" />
              </div>
            </RouterLink>
          </li>
          <li class="link mr-[32px]">
            <RouterLink to="/about">
              <div class="flex items-center">
                <span class="mr-[13px]">About</span>
                <img src="@/assets/icons/dropdown.svg" alt="" class="" />
              </div>
            </RouterLink>
          </li>
          <li class="link mr-[32px]">
            <RouterLink to="/pricing">
              <span class="">Pricing</span>
            </RouterLink>
          </li>
          <li class="link mr-[32px]">
            <RouterLink to="/">
              <span class="">Partner Program</span>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex items-center">
      <div class="link mr-[30px]">
        <RouterLink to="/">
          <span class="">Login</span>
        </RouterLink>
      </div>
      <div class="hidden lg:block">
        <RouterLink to="/">
          <GradientBtn text="Register" />
        </RouterLink>
      </div>
      <div class="block lg:hidden cursor-pointer">
        <img
          src="@/assets/icons/hamburger.svg"
          alt=""
          class="h-[24px] w-[24px]"
          @click="showMobileNav = true"
        />
      </div>
    </div>
    <transition name="nav">
      <MobileNav @close="showMobileNav = false" v-if="showMobileNav" />
    </transition>
  </header>
</template>

<style scoped>
.link span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #667085;
}

/* Nav Animation */
.nav-enter-active,
.nav-leave-active {
  transition: all 0.4s ease;
}
.nav-enter-from,
.nav-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
