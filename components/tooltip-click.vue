<template>
  <div class="flex flex-col items-center relative z-10">
    <div v-if="show" class="tooltip" :class="distanceFromBottom">
      {{ text }}
    </div>
    <div @click="handleClick">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.tooltip {
  @apply absolute z-[999] w-max max-w-80 p-1 text-sm text-white bg-black rounded-lg shadow-lg;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 70%;
  margin-left: -15px;
  border-width: 5px;
  border-style: solid;
  border-color: #000 transparent transparent transparent;
}
</style>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  // A tailwind class has to be passed
  distanceFromBottom: {
    type: String,
    required: false,
    default: "bottom-7",
  },
});

const show = ref(false);
const handleClick = () => {
  const timeToDisappear = 2000;
  show.value = true;

  setTimeout(() => {
    show.value = false;
  }, timeToDisappear);
};
</script>
