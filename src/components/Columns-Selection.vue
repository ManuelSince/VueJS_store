<template>
    <div class="window" @click="$emit('togglefilterselector')">
        <div class="header"><div>Columns selection</div><div class="close" @click="isColumnSelection">X</div></div>
        <div class="body">
          <div v-for="column in columns" :key="column.name" :class="[column.isVisible ? 'square column-active': 'square column-unactive']" @click="isColumnActive(column.name)">
              {{ column.prettyName }}
          </div>
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
    ...mapActions('companies', ['isColumnActive']),
    ...mapActions('companies', ['isColumnSelection'])
  }
}
</script>
<style lang="scss" scoped>
.window{
    position: fixed;
    top: 200px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    padding: 10px 10px;
    width: 80%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.418);
    border: 3px solid rgb(228, 228, 228);
    border-radius: 20px;
}
.header{
  justify-content: center;
  display: flex;
  color: white;
}
.close{
  position: absolute;
  padding: 0px 5px;
  right: 15px;
}
.close:hover{
  cursor:pointer;
  color: red;
}
.body{
  display: flex;
  padding: 5px 20px 20px;
}
.square{
    width: 120px;
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
