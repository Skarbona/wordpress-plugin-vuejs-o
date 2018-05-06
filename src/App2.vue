<template>
    <div>
            <div class="table-1">
                <table width="100%">
                    <thead>
                        <tr v-if="getLanguagePL">
                            <th align="left">Adres</th>
                            <th align="left">Dostępność</th>
                            <th align="left">Piętro</th>
                            <th align="left">Powierzchnia</th>
                            <th align="left">Kontakt</th>
                        </tr>
                        <tr v-if="getLanguageEN">
                            <th align="left">Adressess</th>
                            <th align="left">Dostępność</th>
                            <th align="left">Piętro EN</th>
                            <th align="left">Pow EN</th>
                            <th align="left">Contact</th>
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

<style lang="scss">

</style>
