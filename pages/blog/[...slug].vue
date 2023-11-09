<template>
  <v-col offset-md="2" offset-sm="0" md="8" sm="12">
    <ScrollListener/>
    <ContentDoc v-slot="{ doc }">
      <article>
        <PageTitle :title="doc.title"/>
        <div class="pb-4">
          <span class="text-body-1">{{ doc.date }}</span>
          <span class="text-body-1 pl-4">{{ doc.author }}</span>
        </div>
        <ContentRenderer :value="doc"/>
      </article>
    </ContentDoc>
  </v-col>
</template>