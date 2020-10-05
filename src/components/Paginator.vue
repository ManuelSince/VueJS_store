<template>
    <div class="paginator">
      {{ length }}
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'paginator',
  props: ['length'],
  computed: {
    ...mapState(['itemsPerPage'])
  },
  data () {
    return {
      buttons: Number
    }
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    },
    paginate () {
      const length = this.length
      const items = this.itemsPerPage
      const buttons = length % items === 0 ? length / items : Math.floor(length / items) + 1
      console.log(length, items, buttons)
    }
  },
  created () {
    this.paginate()
  }
}
</script>
<style lang="sass" scoped>

</style>
