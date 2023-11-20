<template>
  <BaseNarrowPage>
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
  </BaseNarrowPage>
</template>