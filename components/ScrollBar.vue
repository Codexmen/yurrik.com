<template>
  <div class="progress-container">
          <div id="progress-bar"></div>
       </div>
</template>
<script>
export default {
  name: "ScrollBar",
}
</script>
<style scoped>
.progress-container {
  z-index: 1;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4px;
  background-color: transparent;
}
#progress-bar {
  position: absolute;
  height: 100%;
  background-color: #4caf50;
  top: 0;
  left: 0;
}
</style>