<template>
    <div class="loader">
    </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style lang="scss" scoped>
.loader {
  margin: 0 auto;
  border: 7px solid #f3f3f3;
  border-top: 7px solid #3498db;
  border-right: 7px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin .7s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
