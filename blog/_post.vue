<template>
  <div>
    <ScrollListener />
    <h1 class="text-md-h2 text-h4 py-8">{{ data.title }}</h1>
    <ContentRenderer :value="data" />
  </div>
</template>

<script setup>
const route = useRoute()
const { data } = await useAsyncData('get-document', () => queryContent(route.path).findOne())
// export default {
//   name: "PostPage",
//   head() {
//       return {
//         title: this.article.title,
//         meta: [
//           {
//             hid: "description",
//             name: "description",
//             content: this.article.description,
//           }
//         ]
//       }
//     },
//   async asyncData({ $content, params  }) {
//     const article = await $content('articles', params.post).fetch()
//
//     return { article }
//   }
// }
</script>
