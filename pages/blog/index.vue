<template>
  <div>
    <h1 class="text-md-h2 text-h4 py-8">All posts</h1>
    <v-card v-for="post in posts" :key="post.slug" class="text-left mb-6">
      <v-card-title class="pb-8">
        <NuxtLink class="text-md-h4 text-sm-h5 text-decoration-none" :to="`${post._path}`">{{ post.title }}
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
useSeoMeta({
  title: 'Recent posts'
})
const {data: posts} = await useAsyncData('posts-list',
    () => queryContent()
        .only(['title', 'image', 'tags', '_path', 'summary', 'time_created', 'length', 'createdAt', 'order', 'date'])
        .sort({'order': -1})
        .find()
)
</script>
