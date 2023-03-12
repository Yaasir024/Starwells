<script setup>
const emits = defineEmits(['close'])
</script>


<template>
    <div class="dropdown p-[32px] absolute top-[35px] left-[-20px] z-40 min-w-[420px]">
      <ul class="">
        <li class="mb-[26px]">
          <RouterLink to="/about" @click="$emit('close')">
            <div class="flex items-center">
              <img src="@/assets/icons/nav/about.svg" alt="" class="" />
              <div class="ml-[16px]">
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                    About us
                </h2>
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Explore the future of accounting</h2>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="mb-[26px]">
          <RouterLink to="/contact-us" @click="$emit('close')">
            <div class="flex items-center">
              <img src="@/assets/icons/nav/contact.svg" alt="" class="" />
              <div class="ml-[16px]">
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                    Contact
                </h2>
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Reach us on all channels</h2>
              </div>
            </div>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/faq" @click="$emit('close')">
            <div class="flex items-center">
              <img src="@/assets/icons/nav/faq.svg" alt="" class="" />
              <div class="ml-[16px]">
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                    FAQ
                </h2>
                <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Learn more about Starwells</h2>
              </div>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .dropdown {
    background: #ffffff;
    box-shadow: 0px 44px 116px rgba(0, 0, 0, 0.1);
    border-radius: 24px;
  }
  </style>
  