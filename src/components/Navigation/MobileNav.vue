<script setup>
const emit = defineEmits(['close'])
</script>

<template>
  <div class="font-sharp fixed top-0 left-0 h-screen w-screen bg-white text-black z-50">
    <div class="h-[64px] border-b px-10 flex items-center justify-between">
      <RouterLink to="/">
        <img src="@/assets/logo/orange.svg" alt="" class="" />
      </RouterLink>
      <button @click="$emit('close')">
        <svg
          clip-rule="evenodd"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="24"
          fill="currentColor"
        >
          <path
            d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
          />
        </svg>
      </button>
    </div>
    <ul class="flex flex-col px-10 pt-[24px]">
      <li class="link pb-[20px] mb-[20px] border-b">
        <RouterLink to="/">
          <span class="">Home</span>
        </RouterLink>
      </li>
      <li class="link pb-[20px] mb-[20px] border-b">
        <RouterLink to="/">
          <div class="flex items-center">
            <span class="mr-[13px]">Features</span>
            <img src="@/assets/icons/dropdown.svg" alt="" class="" />
          </div>
        </RouterLink>
      </li>
      <li class="link pb-[20px] mb-[20px] border-b">
        <RouterLink to="/about">
          <div class="flex items-center">
            <span class="mr-[13px]">About</span>
            <img src="@/assets/icons/dropdown.svg" alt="" class="" />
          </div>
        </RouterLink>
      </li>
      <li class="link pb-[20px] mb-[20px] border-b">
        <RouterLink to="/pricing">
          <span class="">Pricing</span>
        </RouterLink>
      </li>
      <li class="link pb-[20px] mb-[20px] border-b">
        <RouterLink to="/">
          <span class="">Partner Program</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.link span {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #667085;
}
</style>
