<template>
    <v-col class="text-center">
      <v-card v-for="post in posts" :key="post.slug"  class="text-left my-6">
        <v-card-title :to="'/blog/'+ post.slug">{{post.title}}</v-card-title>
        <v-card-subtitle>{{post.title}}</v-card-subtitle>
        <v-card-actions>
          <v-btn color="primary" :to="'/blog/'+ post.slug">Read</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
</template>

<script>
export default {
  name: 'BlogPage',
  async asyncData({$content}) {
    const posts = await $content('articles')
      .only(['title', 'image', 'tags', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()

    console.log("posts", posts)
    return {
      posts,
    }
  },
}
</script>
