<template>
  <v-col>
    <HeroSection class="mb-8"/>
    <RecentPosts :limit="4"/>
  </v-col>
</template>

<script setup>
useSeoMeta({
  title: 'Kovalenko Yurii',
  description: 'Index page of my personal site and blog',
  keywords: 'about, Yurii Kovalenko, blog, personal site',
})
</script>
