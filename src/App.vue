<template>
  <div id="app">
      TEST INFO 1
      {{ testValue }}

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            portfolio: ''
        }
    },
    computed: {
        testValue() {
            return this.$store.getters['wordpressRest/getTestValue'];
        }
    },
    created() {
        axios.get(wp_rest_api.base_url + 'avada_portfolio?per_page=100')
            .then( success => {
                console.log(success.data);
                this.portfolio = success.data;
            })
            .catch( error => console.log(error))
    }
}
</script>

<style lang="scss">

</style>
