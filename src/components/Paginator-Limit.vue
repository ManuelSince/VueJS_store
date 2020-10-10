<template>
    <select v-model="limit" class="paginator-limit custom-select">
        <option>20</option>
        <option selected>50</option>
        <option>100</option>
        <option>200</option>
        <option>500</option>
    </select>
</template>
<script>
export default {
  name: 'paginator-limit',
  computed: {
    limit: {
      get () { return this.$store.getters['companies/pagination'].limit },
      set (value) { this.$store.dispatch('companies/setPaginationLimit', parseInt(value)) }
    }
  }

}
</script>
<style  scoped lang="scss">
.custom-select{
  -webkit-appearance: none;
  margin: 0 0;
  appearance: none;
  cursor: pointer;
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 800;
  box-sizing: border-box;
  position: relative;
  border-radius: 10px;
  height: 30px;
  width: 30px;
}
</style>
