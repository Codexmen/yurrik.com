<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
    >
      <v-container class="py-0 fill-height">
        <NuxtLink to="/">
          Yurii Kovalenko
        </NuxtLink>
        <v-spacer></v-spacer>
        <v-btn
          v-for="link in navigation"
          :key="link.to"
          text
          color="primary"
          class="mr-2"
          :to="link.to"
          router
          exact
        >
          {{ link.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container class="pt-12">
            <v-sheet
              min-height="80vh"
            >
              <Nuxt/>
            </v-sheet>
      </v-container>
    </v-main>
    <v-footer class="justify-center secondary">© 2022 Yurii Kovalenko
      <a class="mx-2" target="_blank" href="https://www.linkedin.com/in/yurii-kovalenko-00718a51/">LinkedIn</a>
      <a class="mx-2" target="_blank" href="https://twitter.com/CodexMen">Twitter</a>
      <a class="mx-2" target="_blank" href="https://github.com/Codexmen">GitHub</a></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      navigation: [
        {
          title: 'About',
          to: '/about'
        },{
          title: 'Blog',
          to: '/blog'
        }],
      title: 'About'
    }
  }
}
</script>
