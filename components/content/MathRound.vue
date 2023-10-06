<template>
  <div class="text-center">
  <div class="column justify-center ma-4">
    <div class="text-center">{{ rounded }}</div>
    <div class="text-center">&harr;</div>
    <code class="text-center">Math.round</code>
  </div>
    <div class="d-flex justify-center align-center ma-4">
      <div class="mr-4">{{  floored }}</div>
      <div class="column">
        <div>&larr;&minus;&infin;</div>
        <code>Math.floor</code>
      </div>
      <div class="mx-4 flex-grow-1"><v-text-field v-model="model" /></div>
      <div class="column">
        <div>&rarr;&infin;</div>
        <code>Math.ceil</code>
      </div>
      <div class="ml-4">{{  ceiled }}</div>
    </div>
    <div class="column ma-4">
      <div class="text-center">&harr;</div>
      <code class="text-center">Math.trunc</code>
      <div class="text-center">{{ trunced }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MathRound",
  data() {
    return {
      model: -2.5}
  },
  computed: {
    rounded() {
      return Math.round(this.model)
    },
    trunced() {
      return Math.trunc(this.model)
    },
    ceiled() {
      return Math.ceil(this.model)
    },
    floored() {
      return Math.floor(this.model)
    }
  }
}
</script>
