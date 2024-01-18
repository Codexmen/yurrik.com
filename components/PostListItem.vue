<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  length: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
  summary: {
    type: String,
    default: '',
  },
  path: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <v-hover v-slot="{ isHovering, props: hoverProps }">
    <NuxtLink :to="props.path" class=" text-decoration-none">
      <v-card :elevation="isHovering ? 4 : 2" v-bind="hoverProps"
              class="text-left mb-6"
              :class="isHovering ? 'bg-secondary': ''"
      >
        <div class="pb-md-4 pb-2 pa-4">
          <span class="text-md-h4 text-h5">{{ props.title }}</span>
        </div>
        <v-card-subtitle v-if="props.length || props.date">
          <span v-if="props.length" class="primary--text">{{ props.length }}</span>
          <span v-if="props.date" class="ml-8 text-caption">{{ props.date }}</span>
        </v-card-subtitle>
        <v-card-text :style="{'min-height': '100px'}" class="text--primary">{{ props.summary }}</v-card-text>
      </v-card>

    </NuxtLink>
  </v-hover>
</template>
