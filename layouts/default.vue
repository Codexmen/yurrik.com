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
    <div
        class="bg-secondary"
        style="height: 64px;"
    >
      <div class="v-container">
        <v-row>
          <v-col class="d-flex">
            <v-hover v-slot="{ isHovering, props }">
              <NuxtLink v-bind="props" :class="isHovering ? 'text-decoration-underline': ''"
                        class="d-block text-primary mr-auto font-weight-black text-decoration-none text-h6" to="/">
                Yurii Kovalenko
              </NuxtLink>
            </v-hover>
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
          </v-col>
        </v-row>
      </div>
    </div>
    <ScrollBar/>
    <v-main>
      <v-container>
        <v-row>
          <slot/>
        </v-row>
      </v-container>
    </v-main>
    <v-footer class="justify-center bg-secondary mt-8 flex-wrap">© 2022 Yurii Kovalenko
      <div>
        <a class="mx-2" target="_blank" href="https://www.linkedin.com/in/yurii-kovalenko-00718a51/">LinkedIn</a>
        <a class="mx-2" href="mailto:kimongod@gmail.com">Email</a>
        <a class="mx-2" target="_blank" href="https://twitter.com/CodexMen">Twitter</a>
        <a class="mx-2" target="_blank" href="https://github.com/Codexmen">GitHub</a>
      </div>

    </v-footer>
  </v-app>
</template>
