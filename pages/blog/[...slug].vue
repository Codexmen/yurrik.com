<template>
  <v-col offset-md="2" offset-sm="0" md="8" sm="12">
    <ScrollListener/>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="text-md-h2 text-h4 py-8">{{ doc.title }}</h1>
        <div class="pb-4">
          <span class="text-body-1">{{ doc.date }}</span>
          <span class="text-body-1 pl-4">{{ doc.author }}</span>
        </div>
        <ContentRenderer :value="doc"/>
      </article>
    </ContentDoc>
  </v-col>
</template>