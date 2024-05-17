<template>
  <div class="relative z-10 flex flex-col items-center">
    <div v-if="show" class="tooltip">
      {{ text }}
    </div>
    <div @mouseover="show = true" @mouseleave="show = false">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});

const show = ref(false);
</script>

<style scoped>
.tooltip {
  @apply absolute z-[999] w-max max-w-80 p-2 text-sm text-white bg-black rounded shadow-lg bottom-7;
}

.tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #000 transparent transparent transparent;
}
</style>
