<template>
  <v-app>
    <v-app-bar
      app
      color="white"
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
          :to="link.to"
          router
          exact
        >
          {{ link.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="lighten-3">
      <v-container>
            <v-sheet
              min-height="80vh"
            >
              <Nuxt/>
            </v-sheet>
      </v-container>
    </v-main>
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
