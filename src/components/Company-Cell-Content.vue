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
          <div class="offices">
            <div class="office-title"> {{ company.offices.length > 1? company.offices.length + ' offices': company.offices.length + ' office'}}</div>
            <div v-for="office in company.offices" :key="office.address1" @click.stop="displayOffices(office.description)" class="office">
              <div class="zone-header">
                <div>{{ office.description ? office.description: 'Main office' }}</div>
                <div id="nav-icon3" :class="officesDisplayed.includes(office.description)? 'open': ''">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div class="zone-content accordeon" v-if="officesDisplayed.includes(office.description)">
                <div class="wrap-2">
                  <div class="item-description fw-7">address 1</div><div class="item-value">{{ office.address1 }}</div>
                </div>
                <div class="wrap-2" v-if="office.address2">
                  <div class="item-description fw-7">address 2</div><div class="item-value">{{ office.address2 }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">city</div><div class="item-value">{{ office.city }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">zip code</div><div class="item-value">{{ office.zip_code }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">state code</div><div class="item-value">{{ office.state_code }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">country code</div><div class="item-value">{{ office.country_code }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">latitude</div><div class="item-value">{{ office.latitude }}</div>
                </div>
                <div class="wrap-2">
                  <div class="item-description fw-7">longitude</div><div class="item-value">{{ office.longitude }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="relationships">
            <div class="office-title"> {{ 'relationships' }}</div>
            <div v-for="(relation, index) in company.relationships" :key="relation.title + index" class="wrap-2">
                <div>{{ relation.title }}</div>
                <div>{{ `${relation.person.first_name} ${relation.person.last_name}` }}</div>
            </div>
          </div>
          <div class="products">
            <div class="office-title"> {{ 'products' }}</div>
            <div v-for="product in company.products" :key="product.name" class="product">{{ product.name.toUpperCase() }}</div>
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
    ...mapGetters(['navitems'])
  },
  data () {
    return {
      itemToExpand: [],
      officesDisplayed: []
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
    },
    displayOffices (name) {
      if (this.officesDisplayed.includes(name)) {
        this.officesDisplayed = this.officesDisplayed.filter(x => x !== name)
      } else {
        this.officesDisplayed.push(name)
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
  border-radius: 6px;
  background: linear-gradient(145deg, #ececec, #c7c7c7);
  box-shadow:  13px 13px 25px #bcbcbc, -13px -13px 12px #fefefe;
  border: 1px solid rgb(223, 223, 223);
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
.offices{
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
  padding: 5px 5px;
  font-size: 0.7rem;
  height: 250px;
  overflow-y: auto;
}
.office-title{
  font-size: 1rem;
  font-weight: 700;
  color: white;
  padding: 5px 0px;
  background-color:rgb(129, 129, 158);
  border: 1px solid white;
  border-radius: 10px;
}
.office{
  height: auto;
  padding: 5px 0px;
}
.products{
  padding: 5px 5px;
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
.product{
  padding: 3px 10px;
  border-bottom: 1px dotted gray;
}
.zone-header{
  display: grid;
  grid-template-columns: 1fr 10%;
  background-color: rgb(145, 145, 145);
  border-radius: 6px;
  color: white;
  line-height: 30px;
  padding: 3px 20px;
  border: 1px solid white;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 0.8rem;
}
.zone-content{
  background-color: rgb(196, 196, 196);
  border: 1px solid gray;
  border-radius: 5px;
  height: 100px;
  padding: 5px 5px;
}
.relationships{
  padding: 5px 5px;
  font-size: 0.8rem;
  font-weight: 700;
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
.zone4{
  padding: 5px 5px;
  border: 2px solid rgb(53, 126, 194, 0.500);
  border-radius: 5px;
}
.wrap-2{
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 3fr;
}
.wrape-2:hover{
  background-color: rgb(114, 114, 114);
  color: white;
}
.fw-7{
  font-weight: 700;
}
.item-description{
  position: relative;
  margin-left: 10px;
  text-align: left;
}
.item-value{
  position: relative;
  text-align: left;
}
#nav-icon1, #nav-icon2, #nav-icon3, #nav-icon4 {
  width: 20px;
  height: 15px;
  position: relative;
  margin: 12px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}
#nav-icon1 span, #nav-icon3 span, #nav-icon4 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: white;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}
.accordeon{
  transition: height .5s ease-in-out .5s;
}
@keyframes accordeon {
  from {
    height: 0;
  }
  to {
    height: auto;
  }
}
#nav-icon3 span:nth-child(2),#nav-icon3 span:nth-child(3) {
  top: 4px;
}
#nav-icon3 span:nth-child(4) {
  top: 8px;
}
#nav-icon3.open span:nth-child(1) {
  top: 18px;
  width: 0%;
  left: 50%;
}
#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}
#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
#nav-icon3.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}
</style>
