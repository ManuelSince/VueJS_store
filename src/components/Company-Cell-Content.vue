<template>
    <div class="company-cell-content" @click="$emit('checkname', company.name)">
        <div class="content-body" >
          <div class="zone1">
            <ZoneTitle title="general informations"/>
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.products? company.products.length: 'no products' }}</div>
            <div class="cell-item"><a :href="company.permalink">{{ 'crunchbase link' }}</a></div>
            <div class="cell-item">{{ company.crunchbase_url }}</div>
            <div class="cell-item">{{ company.homepage_url }}</div>
            <div class="cell-item">{{ company.category_code }}</div>
            <div class="cell-item">{{ company.founded_year }}</div>
            <div class="cell-item">{{ company.number_of_employees }}</div>
            <div class="cell-item">{{ company.description }}</div>
            <div class="cell-item">{{ company.updated_at }}</div>
          </div>
          <div class="zone2">
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.products? company.products.length: 'no products' }}</div>
            <div class="cell-item"><a :href="company.permalink">{{ 'crunchbase link' }}</a></div>
            <div class="cell-item">{{ company.crunchbase_url }}</div>
            <div class="cell-item">{{ company.homepage_url }}</div>
            <div class="cell-item">{{ company.category_code }}</div>
            <div class="cell-item">{{ company.founded_year }}</div>
            <div class="cell-item">{{ company.number_of_employees }}</div>
            <div class="cell-item">{{ company.description }}</div>
            <div class="cell-item">{{ company.updated_at }}</div>
          </div>
          <div class="zone3">
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.products? company.products.length: 'no products' }}</div>
            <div class="cell-item"><a :href="company.permalink">{{ 'crunchbase link' }}</a></div>
            <div class="cell-item">{{ company.crunchbase_url }}</div>
            <div class="cell-item">{{ company.homepage_url }}</div>
            <div class="cell-item">{{ company.category_code }}</div>
            <div class="cell-item">{{ company.founded_year }}</div>
            <div class="cell-item">{{ company.number_of_employees }}</div>
            <div class="cell-item">{{ company.description }}</div>
            <div class="cell-item">{{ company.updated_at }}</div>
          </div>
          <div class="zone4">
            <div class="cell-item">{{ company.name }}</div>
            <div class="cell-item">{{ company.products? company.products.length: 'no products' }}</div>
            <div class="cell-item"><a :href="company.permalink">{{ 'crunchbase link' }}</a></div>
            <div class="cell-item">{{ company.crunchbase_url }}</div>
            <div class="cell-item">{{ company.homepage_url }}</div>
            <div class="cell-item">{{ company.category_code }}</div>
            <div class="cell-item">{{ company.founded_year }}</div>
            <div class="cell-item">{{ company.number_of_employees }}</div>
            <div class="cell-item">{{ company.description }}</div>
            <div class="cell-item">{{ company.updated_at }}</div>
          </div>
        </div>
        <transition name="smooth">
        <div v-if="itemToExpand.includes(company.name)" class="expand" @click="check(company.name)">
          <div>{{ itemToExpand.toString() }}</div>
        </div>
        </transition>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ZoneTitle from '@/components/Zone-Title'
export default {
  name: 'commpanies-cell',
  components: { ZoneTitle },
  props: ['company'],
  computed: {
    ...mapGetters(['navitems'
    ])
  },
  data () {
    return {
      itemToExpand: []
    }
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    },
    check (name) {
      if (this.itemToExpand.includes(name)) {
        this.itemToExpand = this.itemToExpand.filter(item => item !== name)
      } else {
        this.itemToExpand.push(name)
      }
    }
  }
}
</script>
<style scoped lang="scss" >
.company-cell-content{
    height: 250px;
    padding: 10px 10px;
    overflow: hidden;
}
.content-body{
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
}
.zone1{
  border: 2px solid rgba(53, 126, 194, 0.500);
  border-radius: 5px;
}
.zone2{
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
.zone3{
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
.zone4{
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
</style>
