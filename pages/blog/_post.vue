<template>
  <div>
    <ScrollListener />
    <NuxtContent :document="article" />
  </div>
</template>

<script>
export default {
  name: "PostPage",
  head() {
      return {
        title: this.article.title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: this.article.description,
          }
        ]
      }
    },
  async asyncData({ $content, params  }) {
    const article = await $content('articles', params.post).fetch()

    return { article }
  }
}
</script>
