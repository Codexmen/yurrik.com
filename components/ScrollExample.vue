<template>
  <div class="d-flex py-8">
    <div @mousemove="onMouseMove" @scroll="onScroll" class="scroll-area pa-2 blue lighten-3 flex-grow-1">
      <div style="height: 2000px">
        <div class="text-h4" style="position: sticky; top: 0;">Scroll here</div>
      </div>
    </div>
    <div style="width: 50%;" class="pa-2 flex-grow-1">
      <div>Scroll events: {{ scrollEvents }}</div>
      <div v-if="withReduceMethods">Debounced (250ms) events: {{ debouncedEvents }}</div>
      <div v-if="withReduceMethods">Throttled (250ms) events: {{ throttledEvents }}</div>
    </div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

export default {
  name: "ScrollExample",
  data() {
    return {
      scrollEvents: 0,
      throttledEvents: 0,
      debouncedEvents: 0,
    }
  },
  props: {
    withReduceMethods: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onScroll() {
      this.scrollEvents = this.scrollEvents + 1;
      this.debouncedScroll()
      this.throttledScroll()
    },
    onMouseMove() {
      this.mouseMoveEvents = this.mouseMoveEvents + 1;
    },
    debouncedScroll: debounce(function () {
      this.debouncedEvents = this.debouncedEvents + 1;
    }, 250),
    throttledScroll: throttle(function () {
      this.throttledEvents = this.throttledEvents + 1;
    }, 250)
  }
}
</script>

<style scoped>
.scroll-area {
  height: 200px;
  position: relative;
  overflow: auto;
  width: 50%;
}
</style>
