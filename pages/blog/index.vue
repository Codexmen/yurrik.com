<template>
    <v-col class="text-center">
      <v-card v-for="post in posts" :key="post.slug"  class="text-left my-6">
        <v-card-title><NuxtLink :to="'/blog/'+ post.slug">{{post.title}}</NuxtLink></v-card-title>
        <v-card-subtitle v-if="post.length"><span class="primary--text">{{post.length}}</span></v-card-subtitle>


        <v-card-text class="text--primary">{{post.summary}}</v-card-text>
      </v-card>
    </v-col>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({$content}) {
    const posts = await $content('articles')
      .only(['title', 'image', 'tags', 'slug','summary', 'time_created', 'length', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()

    console.log("posts", posts)
    return {
      posts,
    }
  },
}
</script>
