<script setup>
import timeline from '/components/time.json'

const expInYears = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate || new Date());
  const diff = end.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}
</script>

<template>
  <div>
    <PageTitle title="Employment History"/>
    <v-timeline side="end">
      <v-timeline-item
          hide-opposite
          v-for="time in timeline"
          :key="time.name"
          width="90%"
          size="small"
      >
        <div class="text-2xl font-weight-bold">
          {{ time.name }}
        </div>
        <div class="text-caption">
          {{ time.startDate }} - {{ time.endDate || 'Now' }} ({{ expInYears(time.startDate, time.endDate) }}+ years)
        </div>
        <div class="text-body">
          {{ time.position }}
        </div>
        <ul v-if="time.responsibilities">
          <li class="text-body-2" v-for="item in time.responsibilities">{{ item }}</li>

        </ul>
        <div  class="text-body-2" v-if="time.stack">
          <span>Stack: </span>
          <v-chip-group>
            <v-chip v-for="item in time.stack">{{ item }}</v-chip>
          </v-chip-group>

        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<style scoped>

</style>