<template>
  <div class="p-4 mt-2 w-72">
    <div class="flex w-full bg-gray-200 rounded-full dark:bg-gray-700">
      <div
        class="flex space-x-10 bg-violet-700 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full percentage"
      >
        <span>{{ percentage }}%</span>
        <span>{{ name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    default: 0,
  },
  name: {
    type: String,
    required: true,
    default: "",
  },
});

const teste = computed(() => {
  return `${props.percentage}%`;
});
</script>

<style scoped>
.percentage {
  width: v-bind(teste);
}
</style>
