<template>
  <div>
    <ScrollListener />
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="text-md-h2 text-h4 py-8">{{ doc.title }}</h1>
        <ContentRenderer :value="doc"/>
      </article>
    </ContentDoc>
  </div>
</template>