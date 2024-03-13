<template>
  <div
    class="flex justify-center cursor-pointer bg-slate-50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-lg w-56 h-96 hover:shadow-black/70"
    @click="handleClick"
  >
    <div class="flex flex-col place-content-around">
      <span class="flex justify-center"> {{ name }}</span>
      <img :src="linkImage" class="flex w-40 h-40" />
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
