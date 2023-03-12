<script setup>
const emits = defineEmits(['close'])
</script>

<template>
  <div class="dropdown p-[32px] absolute top-[35px] left-[-20px] z-40 min-w-[420px]">
    <ul class="">
      <li class="mb-[26px]">
        <RouterLink to="/invoicing"  @click="$emit('close')">
          <div class="flex items-center">
            <img src="@/assets/icons/nav/invoicing.svg" alt="" class="" />
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                Invoicing
              </h2>
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Get paid faster with Starwells</h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="mb-[26px]">
        <RouterLink to="/accounting"  @click="$emit('close')">
          <div class="flex items-center">
            <img src="@/assets/icons/nav/accounting.svg" alt="" class="" />
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                Accounting
              </h2>
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Manage finances and taxes simplified</h2>
            </div>
          </div>
        </RouterLink>
      </li>
      <li class="">
        <RouterLink to="/book-keeping"  @click="$emit('close')">
          <div class="flex items-center">
            <img src="@/assets/icons/nav/book.svg" alt="" class="" />
            <div class="ml-[16px]">
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] font-medium text-[#0A112F]">
                Book Keeping
              </h2>
              <h2 class="text-[16px] leading-[26px] tracking-[-0.02em] text-[#70707A]">Ensure compliance for all your finances</h2>
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
