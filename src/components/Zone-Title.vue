<template>
    <div class="title">{{ title }}</div>
</template>
<script>
export default {
  name: 'zone-title',
  props: ['title']
}
</script>
<style lang="scss" scoped>
.title{
    font-size: 1.3em;
    padding: 5px 0px;
    color:rgb(53, 126, 194);
}
</style>
