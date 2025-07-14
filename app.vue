<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>

<script setup>
  useHead({
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    title: "Starlog"
  })
</script>