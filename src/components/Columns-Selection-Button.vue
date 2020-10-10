<template>
    <div class="filters-selection" @click="isColumnSelection">Filters
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Filters-Selection',
  props: ['columns'],
  computed: {},
  data () {
    return {
    }
  },
  methods: {
    ...mapActions('companies', ['isColumnSelection'])
  }
}
</script>
<style lang="scss" scoped>
.filters-selection{
    align-content: center;
    line-height: 40px;
}
.filters-selection:hover{
    background-color: rgb(85, 85, 85);
    cursor: pointer;
}
.btn{
    width: 35px;

    font-size: 0.9rem;
    height: 22px;
    border: 1px solid grey;
    border-radius: 5px;
}
.btn:hover{
    background-color: white;
    color: black;
}
</style>
