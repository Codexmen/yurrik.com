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
    <v-row
        class="bg-secondary mt-0"
        style="height: 64px;"
    >
      <v-container>
        <v-col  offset-sm="0" md="12" sm="12">
          <v-row>
            <v-hover v-slot="{ isHovering, props }">
              <NuxtLink v-bind="props" :class="isHovering ? 'text-decoration-underline': ''"
                        class="font-weight-black text-decoration-none text-h6" to="/">
                Yurii Kovalenko
              </NuxtLink>
            </v-hover>
            <v-spacer></v-spacer>

            <v-hover v-slot="{ isHovering, props }" v-for="link in navigation" :key="link.to">
              <NuxtLink
                  v-bind="props"
                  class="text-primary navigation-link mx-2 text-decoration-none"
                  active-class="text-decoration-underline"
                  :class="isHovering ? 'text-decoration-underline': ''"
                  :to="link.to"
              >
                {{ link.title }}
              </NuxtLink>
            </v-hover>
          </v-row>
        </v-col>
      </v-container>
    </v-row>
    <ScrollBar/>
    <v-main>
      <v-container>
        <v-row>
          <v-col offset-sm="0" md="12" sm="12">
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
