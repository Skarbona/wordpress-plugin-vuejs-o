<template>
  <div id="app">

    <v-fs-card v-for="(portfolio,index) in portfolioItems" :key="index" :portfolio="portfolio" ></v-fs-card>

  </div>
</template>

<script>

import Card from './componentsApp/Card.vue';
export default {

    components: {
        'v-fs-card': Card
    },
    computed: {
        portfolioItems() {
            return this.$store.getters['wordpressRest/getPortfolioData'];
        }


    },

    created() {

        this.$store.dispatch('wordpressRest/getPortfolio');
    }
}
</script>

<style>

  #app {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

</style>
