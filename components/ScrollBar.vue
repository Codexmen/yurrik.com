<template>
  <div class="progress-container">
          <div id="progress-bar" class="bg-primary h-100"></div>
       </div>
</template>
<script>
export default {
  name: "ScrollBar",
}
</script>
<style scoped>
.progress-container {
  position: fixed;
  width: 100%;
  height: 4px;
}
#progress-bar {
  position: absolute;
  top: 0;
  left: 0;
}
</style>