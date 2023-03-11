<script setup>
import { ref, onMounted } from 'vue'

const activeAccordion = ref('1')
const accordionData = [
  {
    id: 1,
    question: 'Can I use for free?',
    answer: 'Yes you can use Starwells for free as we provide 14 days free trial period.'
  },
  {
    id: 2,
    question: 'Can we pay offline?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ea!'
  },
  {
    id: 3,
    question: 'Do I get free updates?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ea!'
  },
  {
    id: 4,
    question: 'Appsumo life time deal?',
    answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ea!'
  }
]

const toggleAccordion = (id) => {
  if (activeAccordion.value == '' || id != activeAccordion.value) {
    activeAccordion.value = id
  } else {
    activeAccordion.value = ''
  }
}
</script>

<template>
  <section class="pt-[115px] px-[20px] sm:px-[35px] lg:px-[60px] xl:px-[120px] pb-[120px]">
    <div class="max-w-[780px] mx-auto px-4">
      <div
        class="accordion-item border-b border-[#E4E7EC] mb-[20px] overflow-hidden"
        v-for="data in accordionData"
        :key="data.id"
      >
        <div class="flex items-center justify-between h-[50px]" @click="toggleAccordion(data.id)">
          <h2 class="text-[24px] leading-[30px] text-gray-900">{{ data.question }}</h2>
          <button class="">
            <img src="@/assets/icons/minus.svg" alt="" class="" v-if="activeAccordion == data.id"/>
            <img src="@/assets/icons/plus.svg" alt="" class="" v-if="activeAccordion != data.id"/>
          </button>
        </div>
        <div
          class="text-[16px] leading-[24px] text-[#667085] overflow-hidden transition-all duration-200 ease-in"
          :class="activeAccordion == data.id ? 'max-h-[200px] pb-[32px]' : 'max-h-0'"
        >
          {{ data.answer }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
p {
  margin-bottom: 10px;
}
span {
  margin-bottom: 14px;
}
.list li {
  list-style-type: disc;
}
</style>
