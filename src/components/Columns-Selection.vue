<template>
    <div class="window">
        <div v-for="column in columns" :key="column.name" :class="[column.isVisible ? 'square column-active': 'square column-unactive']" @click="isColumnActive(column.name)">
            {{ column.prettyName }}
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'column-selection',
  props: ['columns'],
  computed: {},
  data () {
    return {
      selectedColumns: {}
    }
  },
  methods: {
    ...mapActions('companies', ['isColumnActive'])
  }
}
</script>
<style lang="scss" scoped>
.window{
    position: absolute;
    display: flex;
    margin: 70px 10%;
    width: 80%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.418);
    border: 3px solid rgb(228, 228, 228);
    border-radius: 20px;
}
.square{
    width: 60px;
    height: 30px;
    margin: 5px;
    font-size: 0.6rem;
    font-weight: 700;
    line-height: 30px;
    color: rgb(226, 226, 226);
    cursor: pointer;
    border: 2px solid rgb(211, 211, 211);
    border-radius: 10%;
}
.square:hover{
    border-color: white;
    color: white;
}
.column-active{
    background-color: green;
}
.column-unactive{
    background-color: red;
}
</style>
