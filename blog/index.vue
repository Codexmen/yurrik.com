<template>
  <div>
    <h1 class="text-md-h2 text-h4 py-8">All posts</h1>
    <v-card v-for="post in posts" :key="post.slug" class="text-left mb-6">
      <v-card-title class="pb-8">
        <NuxtLink class="text-md-h4 text-sm-h5 text-decoration-none" :to="`/blog/${post.slug}`">{{ post.title }}
        </NuxtLink>
      </v-card-title>
      <v-card-subtitle v-if="post.length">
        <span class="primary--text">{{ post.length }}</span>
        <span v-if="post.date" class="ml-8 text-caption">{{ post.date }}</span>
      </v-card-subtitle>
      <v-card-text class="text--primary">{{ post.summary }}</v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const {data: posts} = await useAsyncData('posts-list', () => queryContent('articles').only(['title', 'image', 'tags', 'slug', 'summary', 'time_created', 'length', 'createdAt', 'order', 'date'])
    .sortBy('order', 'desc').find())
// export default {
//   name: 'BlogPage',
//     head: {
//       title: 'Recent posts'
//   },
//   async asyncData({$content}) {
//     const posts = await $content('articles')
//       .only(['title', 'image', 'tags', 'slug', 'summary', 'time_created', 'length', 'createdAt', 'order', 'date'])
//       .sortBy('order', 'desc')
//       .fetch()
//
//     return {
//       posts,
//     }
//   },
// }
</script>
