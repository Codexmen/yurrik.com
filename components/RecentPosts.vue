<script setup>
import PostListItem from "./PostListItem.vue";
import usePosts from '/composables/usePosts'
const props = defineProps({
  limit: {
    type: Number,
    default: 3,
  },
})

const {data: posts} = await usePosts('home', props.limit);
</script>

<template>
  <div>
    <div class="text-h4 mb-8"> Recent posts:</div>
    <v-row>
      <v-col md="6" cols="12" v-for="post in posts" :key="post.slug">
        <PostListItem :title="post.title"
                      :length="post.length"
                      :date="post.date"
                      :summary="post.summary"
                      :path="post._path"/>
      </v-col>
    </v-row>
  </div>
</template>
