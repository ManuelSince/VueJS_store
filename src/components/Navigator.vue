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
    display: inline-block;
    width: 200px;
    padding: 5px 20px;
    margin: 2px 0px;
    border: 1px solid white;
    border-radius: 6px;
    background: linear-gradient(145deg, #ececec, #c7c7c7);
    box-shadow:  13px 13px 25px #bcbcbc, -13px -13px 25px #fefefe;
    a{
      text-decoration: none;
    }
  }
  li:hover{
    cursor: pointer;
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
.active {
  border-radius: 6px;
  background: #c0c0c0;
  box-shadow: inset 9px 9px 18px #a5a5a5, inset -9px -9px 18px #dbdbdb;
  border: 2px solid gray;
  a{
    color: rgb(108, 137, 201);
    font-weight: 700;
  }
}
</style>
