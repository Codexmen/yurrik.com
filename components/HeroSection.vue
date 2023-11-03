<template>
  <v-container>
    <v-row class="pt-8" align="center">
      <v-col cols="12" md="6">
          <div class="text-h3 pb-3">Hello, there! My name is Yurii Kovalenko</div>
          <p class="subheading">I am a FrontEnd Developer from Ukraine</p>
          <NuxtLink to="/about">
            <v-btn color="primary" large class="mr-4">About me</v-btn>
          </NuxtLink>
          <NuxtLink to="/blog">
            <v-btn color="secondary" large>Posts</v-btn>
          </NuxtLink>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
            width="600"
            height="400"
            alt="Yurii Kovalenko photo"
            src="https://placehold.co/600x400"
            max-height="400"
            contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>