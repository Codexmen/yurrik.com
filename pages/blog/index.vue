<template>
  <div>
    <h1 class="text-md-h2 text-h4 py-8">All posts</h1>
    <v-hover v-slot="{ isHovering, props }" v-for="post in posts" :key="post.slug">
      <NuxtLink :to="post._path" class=" text-decoration-none">
        <v-card :elevation="isHovering ? 4 : 2" v-bind="props"
                class="text-left mb-6"
                :class="isHovering ? 'bg-secondary': ''"
        >
          <v-card-title class="pb-8">
            <span class="text-md-h4 text-sm-h5">{{ post.title }}</span>
          </v-card-title>
          <v-card-subtitle v-if="post.length">
            <span class="primary--text">{{ post.length }}</span>
            <span v-if="post.date" class="ml-8 text-caption">{{ post.date }}</span>
          </v-card-subtitle>
          <v-card-text class="text--primary">{{ post.summary }}</v-card-text>
        </v-card>
      </NuxtLink>
    </v-hover>

  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Recent posts',
  description: 'Recent posts of Yurii Kovalenko blog',
  keywords: 'blog posts, javascript, vue, nuxt',
})
const {data: posts} = await useAsyncData('posts-list',
    () => queryContent()
        .only(['title', 'image', 'tags', '_path', 'summary', 'time_created', 'length', 'createdAt', 'order', 'date'])
        .sort({'order': -1})
        .find()
)
</script>
