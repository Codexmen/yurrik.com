<template>
</template>
<script>
export default {
  name: "ScrollListener",
  data() {
    return {
      progressBar: null,
    }
  },
  mounted() {
    this.progressBar = document.getElementById('progress-bar');
    document.addEventListener('scroll', this.scrollHandler, {passive: true});
  },
  beforeUnmount() {
    this.setWidth(0);
    document.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    setWidth(width) {
      if (!this.progressBar) return;
      this.progressBar.style.width = `${width}%`;
    },
    scrollHandler() {
      const width = this.getScrollPercent(document.getElementById('scroll-area'));
      this.setWidth(width);
    },
    getScrollPercent() {
      const {scrollTop, scrollHeight, clientHeight} = window.document.documentElement;
      const scrollPosition = (scrollTop / (scrollHeight - clientHeight)) * 100;
      return Math.round(scrollPosition)
    },
  }
}
</script>


