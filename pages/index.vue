<template>
    <div>
       Hello people from earth! 
    </div>
</template>

<script setup>
useSeoMeta({
  title: 'ChemData',
  description: 'To describe me and my learning journey',
  ogTitle: 'ChemData',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>