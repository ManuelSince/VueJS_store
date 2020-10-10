<template>
  <div class="navigator">
    <ul>
      <li v-for="item in navitems" :key="item.name" :class="[item.isActive ? 'active': '']" @click="navitem_selection(item)"><a href="#" rel="noopener" >{{ item.name }}</a></li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'companies-header',
  props: ['title'],
  computed: {
    ...mapGetters(['navitems'
    ])
  },
  methods: {
    ...mapActions(['navitem_selection'
    ]),
    navitem_selection (navitem) {
      this.$store.dispatch('navitem_selection', navitem)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navigator {
  li {
    border-radius: 10px;
    padding: 5px 20px;
    border: 3px solid white;
    a{
      text-decoration: none;
    }
  }
  li:hover{
    a{
      color: white;
    }
  }
  .title{
    font-size:0.8em;
    font-weight: 600;
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  width: 300px;
  margin: 5px 10px;
  color:#88c8e6;
  cursor: pointer;
}
li:hover{
  border-color: #4293b9;
}
a {
  color: #bfcdd3;
}
.active {
  background-color: black;
  a{
    color: white;
  }
}
</style>
