<template>
   <div class="portfolio--items">
       <h2> {{ portfolio.title.rendered }} </h2>
       <img :src="imgURL">
   </div>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                imgURL : ''
        }
        },
        props: ['portfolio'],
        created() {
            axios.get(wp_rest_api.base_url + 'media/' + this.portfolio.featured_media )
                .then( success => {
                    console.log(success);
                    this.imgURL = success.data.source_url;

                })
                .catch( error => console.log(error))
        }

    }
</script>
<style>
    .portfolio--items {
        width:33%;
    }
</style>