<script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  })
</script>
<template>
<h1 class="text-md-h2 text-h4 py-8">{{props.title}}</h1>
</template>