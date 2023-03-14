<script setup>
import { ref, onMounted } from 'vue'

import { useClickOutside } from '@/composables/useClickOutside'

import MobileNav from '@/components/Navigation/MobileNav.vue'
import FeaturesMenu from '@/components/Navigation/FeaturesMenu.vue'
import AboutMenu from '@/components/Navigation/AboutMenu.vue'

import GradientBtn from '@/components/Buttons/GradientBtn.vue'

const showMobileNav = ref(false)

const featureMenu = ref(null)
const showFeaturesMenu = ref(false)
useClickOutside(featureMenu, () => {
  showFeaturesMenu.value = false
})

const aboutMenu = ref(null)
const showAboutMenu = ref(false)
useClickOutside(aboutMenu, () => {
  showAboutMenu.value = false
})
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 bg-white flex items-center justify-between h-[80px] px-[20px] sm:px-[45px] md:px-[75px] xl:px-[112px] z-20"
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
          <li class="link mr-[32px] relative" ref="featureMenu">
            <div
              class="flex items-center cursor-pointer"
              @click="showFeaturesMenu = !showFeaturesMenu"
            >
              <span class="mr-[13px]">Features</span>
              <button class="chevron">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.26196 1.5L6.26196 6.5L11.262 1.5"
                    stroke="currentColor"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="menu">
              <FeaturesMenu v-if="showFeaturesMenu" @close="showFeaturesMenu = false" />
            </transition>
          </li>
          <li class="link mr-[32px] relative" ref="aboutMenu">
            <div class="flex items-center cursor-pointer" @click="showAboutMenu = !showAboutMenu">
              <span class="mr-[13px]">About</span>
              <button class="chevron">
                <svg
                  width="13"
                  height="8"
                  viewBox="0 0 13 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.26196 1.5L6.26196 6.5L11.262 1.5"
                    stroke="currentColor"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <transition name="menu">
              <AboutMenu v-if="showAboutMenu" @close="showAboutMenu = false" />
            </transition>
          </li>
          <li class="link mr-[32px]">
            <RouterLink to="/pricing">
              <span class="">Pricing</span>
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
        <RouterLink to="/contact-us">
          <GradientBtn text="contact sales" />
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
  transition: all 0.3s ease;
}

.link:hover span {
  color: #ff3a31;
}
.link .chevron {
  color: #667085;

  transition: all 0.3s ease;
}
.link:hover .chevron {
  color: #ff3a31;
  transform: rotate(180deg);
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

/* Menu Animation */
.menu-enter-active,
.menu-leave-active {
  transition: transform 0.3s ease;
  transform-origin: top left;
}

.menu-enter-from,
.menu-leave-to {
  transform: scale(0);
}
</style>
