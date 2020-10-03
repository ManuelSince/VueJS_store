<template>
    <div class="filters">
        <div class="name">
            <fieldset>
                <legend>company name</legend>
                     <p><label>Is this section is useful?: <input name="name" placeholder="@ex: facebook" type="text"></label></p>
                        ...
            </fieldset>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'filters',
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
<style scoped lang="scss">

.filters {
    border: 2px solid gray;
}
</style>
