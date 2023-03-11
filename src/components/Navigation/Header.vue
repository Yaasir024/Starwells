<script setup>
import GradientBtn from '@/components/Buttons/GradientBtn.vue'
</script>

<template>
  <header class="bg-white flex items-center justify-between h-[80px] px-[112px]">
    <div class="flex items-center">
      <img src="@/assets/logo/orange.svg" alt="" class="" />
      <nav class="ml-[41px]">
        <ul class="flex items-center">
          <li class="link mr-[32px]">
            <RouterLink to="/home">
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
      <RouterLink to="/">
        <GradientBtn text="Register" />
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
.link span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #667085;
}
</style>
