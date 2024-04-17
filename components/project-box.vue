<template>
  <div
    class="flex justify-center m-2 cursor-pointer bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-56 h-96 hover:shadow-black/70"
    @click="handleClick"
  >
    <div
      data-tooltip-target="tooltip-animation"
      class="flex flex-col place-content-around"
    >
      <span class="flex justify-center"> {{ name }}</span>
      <img :src="linkImage" class="flex justify-center w-40 h-40" />
      <div
        id="tooltip-animation"
        role="tooltip"
        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        Tooltip content
        <div class="tooltip-arrow" data-popper-arrow></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
    default: "",
  },
  linkPath: {
    type: String,
    required: true,
    default: "",
  },
  linkImage: {
    type: String,
    required: true,
    default: "",
  },
});

const handleClick = () => {
  const path = props.linkPath;
  navigateToNewTab(path);
};
</script>
