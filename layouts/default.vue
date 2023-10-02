<script setup>
const navigation = [
  {
    title: 'About',
    to: '/about'
  }, {
    title: 'Blog',
    to: '/blog'
  },
];
</script>
<template>
  <v-app>
    <v-app-bar
        class="flex-grow-0"
        scroll-behavior="hide"
        scroll-threshold="50"
        color="secondary"
    >
      <v-container class="py-0 fill-height">
        <v-col offset-md="2" offset-sm="0" md="8" sm="12">
          <v-row>
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
          </v-row>
        </v-col>
      </v-container>
    </v-app-bar>
    <ScrollBar/>
    <v-main>
      <v-container>
        <v-row>
          <v-col offset-md="2" offset-sm="0" md="8" sm="12">
            <slot/>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
    <v-footer class="justify-center bg-secondary mt-8">© 2022 Yurii Kovalenko
      <a class="mx-2" target="_blank" href="https://www.linkedin.com/in/yurii-kovalenko-00718a51/">LinkedIn</a>
      <a class="mx-2" target="_blank" href="https://twitter.com/CodexMen">Twitter</a>
      <a class="mx-2" target="_blank" href="https://github.com/Codexmen">GitHub</a></v-footer>
  </v-app>
</template>