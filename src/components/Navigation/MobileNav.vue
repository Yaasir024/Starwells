<script setup>
const emit = defineEmits(["close"]);
</script>

<template>
  <div class="font-sharp fixed top-0 left-0 h-screen w-screen bg-white text-black z-50">
    <div class="h-[64px] border-b px-10 flex items-center justify-between">
      <img src="@/assets/images/logo/res.svg" />
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
    <ul class="text-black text-[24px] px-10 pt-[24px]">
      <li class="link">
        <a href="#" @click.prevent="scrollTo('about')">
          <div
            class="flex items-center justify-between h-[80px] border-b border-black"
          >
            <span class=""> About </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.56187 0.911915C4.11237 2.46242 5.92443 3.72099 7.89459 4.61578C9.86475 5.51057 11.9544 6.02405 14.0443 6.12691C16.1342 6.22976 18.1834 5.91998 20.0748 5.21524C21.9662 4.5105 23.6629 3.42462 25.0679 2.01957L25.118 2.06964L25.118 2.0696L26.8151 3.76666L26.8151 3.76669L26.8651 3.81672C25.4601 5.22176 24.3742 6.91844 23.6694 8.80988C22.9647 10.7013 22.6549 12.7505 22.7578 14.8404C22.8606 16.9302 23.3741 19.0199 24.2689 20.9901C25.1637 22.9602 26.4223 24.7723 27.9728 26.3228L26.2378 28.0578C19.8331 21.6532 19.5238 13.4622 23.6287 6.95308L4.18769 26.3941L2.49063 24.697L21.9318 5.25589C15.4226 9.36084 7.23155 9.05161 0.826863 2.64692L2.56187 0.911915Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </li>
      <!--  -->
      <li class="link">
        <a href="#" @click.prevent="scrollTo('portfolio')">
          <div
            class="flex items-center justify-between h-[80px] border-b border-black"
          >
            <span class=""> Portfolio </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.56187 0.911915C4.11237 2.46242 5.92443 3.72099 7.89459 4.61578C9.86475 5.51057 11.9544 6.02405 14.0443 6.12691C16.1342 6.22976 18.1834 5.91998 20.0748 5.21524C21.9662 4.5105 23.6629 3.42462 25.0679 2.01957L25.118 2.06964L25.118 2.0696L26.8151 3.76666L26.8151 3.76669L26.8651 3.81672C25.4601 5.22176 24.3742 6.91844 23.6694 8.80988C22.9647 10.7013 22.6549 12.7505 22.7578 14.8404C22.8606 16.9302 23.3741 19.0199 24.2689 20.9901C25.1637 22.9602 26.4223 24.7723 27.9728 26.3228L26.2378 28.0578C19.8331 21.6532 19.5238 13.4622 23.6287 6.95308L4.18769 26.3941L2.49063 24.697L21.9318 5.25589C15.4226 9.36084 7.23155 9.05161 0.826863 2.64692L2.56187 0.911915Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </li>
      <li class="link">
        <a href="#" @click.prevent="scrollTo('blog')">
          <div
            class="flex items-center justify-between h-[80px] border-b border-black"
          >
            <span class=""> Blog </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.56187 0.911915C4.11237 2.46242 5.92443 3.72099 7.89459 4.61578C9.86475 5.51057 11.9544 6.02405 14.0443 6.12691C16.1342 6.22976 18.1834 5.91998 20.0748 5.21524C21.9662 4.5105 23.6629 3.42462 25.0679 2.01957L25.118 2.06964L25.118 2.0696L26.8151 3.76666L26.8151 3.76669L26.8651 3.81672C25.4601 5.22176 24.3742 6.91844 23.6694 8.80988C22.9647 10.7013 22.6549 12.7505 22.7578 14.8404C22.8606 16.9302 23.3741 19.0199 24.2689 20.9901C25.1637 22.9602 26.4223 24.7723 27.9728 26.3228L26.2378 28.0578C19.8331 21.6532 19.5238 13.4622 23.6287 6.95308L4.18769 26.3941L2.49063 24.697L21.9318 5.25589C15.4226 9.36084 7.23155 9.05161 0.826863 2.64692L2.56187 0.911915Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </li>
      <!--  -->
      <li class="link">
        <a href="#" @click.prevent="scrollTo('footer')">
          <div
            class="flex items-center justify-between h-[80px] border-b border-black"
          >
            <span class=""> Contact </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 28 29"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="arrow"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.56187 0.911915C4.11237 2.46242 5.92443 3.72099 7.89459 4.61578C9.86475 5.51057 11.9544 6.02405 14.0443 6.12691C16.1342 6.22976 18.1834 5.91998 20.0748 5.21524C21.9662 4.5105 23.6629 3.42462 25.0679 2.01957L25.118 2.06964L25.118 2.0696L26.8151 3.76666L26.8151 3.76669L26.8651 3.81672C25.4601 5.22176 24.3742 6.91844 23.6694 8.80988C22.9647 10.7013 22.6549 12.7505 22.7578 14.8404C22.8606 16.9302 23.3741 19.0199 24.2689 20.9901C25.1637 22.9602 26.4223 24.7723 27.9728 26.3228L26.2378 28.0578C19.8331 21.6532 19.5238 13.4622 23.6287 6.95308L4.18769 26.3941L2.49063 24.697L21.9318 5.25589C15.4226 9.36084 7.23155 9.05161 0.826863 2.64692L2.56187 0.911915Z"
                fill="black"
              />
            </svg>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.link:hover svg {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.arrow,
.title {
  transition: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
}
</style>
