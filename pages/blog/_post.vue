<template>
  <div>
    <ScrollListener />
    <h1 class="text-md-h2 text-h4 py-8">{{ article.title }}</h1>
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
