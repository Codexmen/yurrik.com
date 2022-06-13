<template>
  <div>
  <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  name: "PostPage",
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.post).fetch()

    return { article }
  }
}
</script>
