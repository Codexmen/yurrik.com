<script setup>
import usePosts from "../../composables/usePosts";

useSeoMeta({
  title: 'Recent posts',
  description: 'Recent posts of Yurii Kovalenko blog',
  keywords: 'blog posts, javascript, vue, nuxt',
})
const {data: posts} = await usePosts();
</script>


<template>
  <v-col offset-md="2" offset-sm="0" md="8" sm="12">
    <h1 class="text-md-h2 text-h4 py-8">All posts</h1>
    <div v-for="post in posts" :key="post.slug">
      <PostListItem :title="post.title"
                    :length="post.length"
                    :date="post.date"
                    :summary="post.summary"
                    :path="post._path"/>
    </div>

  </v-col>
</template>