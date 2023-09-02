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
  beforeDestroy() {
      document.removeEventListener('scroll', this.scrollHandler);
  },
  methods: {
    scrollHandler() {
       if (!this.progressBar) return;
        const width = this.getScrollPercent(document.getElementById('scroll-area'));
        this.progressBar.style.width = `${width}%`;
    },
    getScrollPercent() {
      const { scrollTop, scrollHeight, clientHeight } = window.document.documentElement;
      const scrollPosition =  (scrollTop / (scrollHeight - clientHeight)) * 100;
      return Math.round(scrollPosition)
    },
  }
}
</script>


