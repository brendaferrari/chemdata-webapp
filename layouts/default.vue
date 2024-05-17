<template>
  <div class="container mx-auto max-w-6xl">
    <header
      class="flex space-x-20 justify-center items-center my-2 bg-default dark:bg-dark lg:space-x-72 md:space-x-48"
    >
      <div class="flex">
        <div class="block">
          <NuxtLink
            to="/"
            class="flex p-2 hover:bg-gray-200 rounded dark:hover:bg-gray-800"
          >
            <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg> -->
            <BeakerIcon
              class="flex h-12 w-12 p-2 hover:bg-gray-200 dark:hover:bg-gray-800"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="justify-center block">
        <Menu />
      </div>
      <div class="">
        <ClientOnly>
          <ColorModeSelector />
        </ClientOnly>
      </div>
    </header>

    <main class="">
      <slot />
    </main>

    <div
      class="flex flex-col justify-between relative w-full bottom-0 size-80 p-4 bg-default dark:bg-dark"
    >
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { BeakerIcon } from "@heroicons/vue/24/outline";
import { MapPinIcon } from "@heroicons/vue/24/solid";
import { EnvelopeIcon } from "@heroicons/vue/24/solid";

useHead({
  titleTemplate: "%s - ChemData",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}
body {
  @apply bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
