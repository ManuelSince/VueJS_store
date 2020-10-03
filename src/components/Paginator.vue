<template>
    <div class="paginator">
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'paginator',
  props: [],
  computed: {
    ...mapGetters(['navitems'
    ])
  },
  methods: {
    method (page) {
      this.$store.dispatch('navitem_selection', page)
    }
  }
}
</script>
<style lang="sass" scoped>

</style>
