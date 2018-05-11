<template>
    <div>
            <div class="table-1">
                <table width="100%">
                    <thead>
                        <tr v-if="getLanguagePL">
                            <th align="left">Lokalizacja</th>
                            <th style="text-align:center;">Dostępność</th>
                            <th style="text-align:center;">Piętro</th>
                            <th style="text-align:center;">Powierzchnia</th>
                            <th align="left"></th>
                        </tr>
                        <tr v-if="getLanguageEN">
                            <th align="left">Localisation</th>
                            <th style="text-align:center;">Availability</th>
                            <th style="text-align:center;">Floor</th>
                            <th style="text-align:center;">Area</th>
                            <th align="left"></th>
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
            },
            getLanguagePL() {
                return document.documentElement.lang === 'pl-PL'
            },
            getLanguageEN() {
                return document.documentElement.lang === 'en-US'
            }


        },
        created() {

                this.$store.dispatch('wordpressRest/getPortfolio');
        }
    }
</script>

<style lang="scss" scoped>
    .table-1 table th {
        background: #005500;
        color: #fff;
    }
</style>
