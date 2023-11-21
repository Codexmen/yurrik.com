<template>
  <v-row class="pt-8" align="center">
    <v-col cols="12" md="7">
      <div class="text-h3 pb-3">Welcome there! My name is Yurii Kovalenko.</div>
      <p class="subheading">I am a Front End Developer from Ukraine 🇺🇦</p>
      <p class="subheading">You could learn more about me or check out my the latest posts.</p>
      <NuxtLink to="/about">
        <v-btn color="primary" large class="mr-4">About me</v-btn>
      </NuxtLink>
      <NuxtLink to="/blog">
        <v-btn color="secondary" large>Posts</v-btn>
      </NuxtLink>
    </v-col>
    <v-col cols="12" md="5" class="d-none d-md-flex justify-end">
      <v-img
          lazy-src="/photo_small.jpeg"
          max-width="400"
          max-height="400"
          alt="Yurii Kovalenko photo"
          src="/photo.jpeg"
          contain
      ></v-img>
    </v-col>
  </v-row>
</template>