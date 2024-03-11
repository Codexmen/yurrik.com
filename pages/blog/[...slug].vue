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
        <ContentRenderer class="article-body" :value="doc"/>
      </article>
    </ContentDoc>
  </BaseNarrowPage>
</template>
<style>
.article-body table {
  width: 80%;
  border-collapse: collapse;
}
.article-body table tbody tr {
  border-bottom: 1px solid #e0e0e0;
}
.article-body table tbody tr:last-child {
  border-bottom: none;
}
.article-body table  tbody td {
  padding: 5px 0;
}
</style>
