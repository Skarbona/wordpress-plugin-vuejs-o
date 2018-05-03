<template>
    <div>
            <div class="table-1">
                <table width="100%">
                    <thead>
                        <tr>
                            <th align="left">Column 0</th>
                            <th align="left">Column 1</th>
                            <th align="left">Column 2</th>
                            <th align="left">Column 3</th>
                            <th align="left">Column 4</th>
                        </tr>
                    </thead>
                    <tbody>
                        <v-fs-tr-table v-for="(portfolio,index) in portfolioItems" :key="index" :portfolio="portfolio" ></v-fs-tr-table>
                    </tbody>
                </table>
            </div>

    </div>
</template>

<script>
    import Table from './componentsApp2/Table.vue';
    export default {

        components: {
            'v-fs-tr-table': Table
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

<style lang="scss">

</style>
