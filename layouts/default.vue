<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
    >
      <v-container class="py-0 fill-height">
        <NuxtLink class="font-weight-black text-decoration-none text-h6" to="/">
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
      <v-container class="pt-6">
        <v-row>
          <v-col offset="2"  cols="8" >
            <Nuxt/>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
    <v-footer class="justify-center secondary mt-8">© 2022 Yurii Kovalenko
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
