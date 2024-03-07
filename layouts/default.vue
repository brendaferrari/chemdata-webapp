<template>
    <div class="container mx-auto max-w-4xl">
        <header class="flex justify-center md:items-center my-4 bg-default dark:bg-dark">
            <div class="flex">
                <div class="pr-36 hidden md:block">
                    <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800 hidden md:flex">
                        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                        </svg> -->
                        <BeakerIcon class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800 hidden md:flex" />
                    </NuxtLink>
                </div>
            </div>
            <div class="flex justify-center hidden md:block">
                <Menu />
            </div>
            <div class="pl-36">
                <!-- BUG: dark mode not working -->
                <ClientOnly>
                    <ColorModeSelector />
                </ClientOnly>
            </div>

        </header>

        <main class="">
            <slot />
        </main>
<!-- 
        <footer class="flex justify-between items-start md:items-center mt-5 bg-default border-b-2 p-2 border-gray-200 dark:bg-dark">
            <div>This is footer</div>
        </footer> -->

    </div>
</template>

<script setup>
import { BeakerIcon } from '@heroicons/vue/outline'

useHead({
    titleTemplate: "%s - ChemData",
    link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style>
body { 
    font-family: 'Roboto';
}
body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>