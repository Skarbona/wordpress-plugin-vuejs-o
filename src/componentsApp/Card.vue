<template>
   <div class="portfolio--items">
       <h3> {{ portfolio.title.rendered }} </h3>
       <img :src="imgURL">
   </div>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                imgURL : this.portfolio._embedded['wp:featuredmedia']['0'].source_url
        }
        },
        props: ['portfolio'],


    }
</script>
<style>
    .portfolio--items h3 {
        text-align:center;
        color:#005500;
        padding:20px 5px 0px 5px;
    }
    .portfolio--items img {
        width: 100%;
        height:300px;
        object-fit:cover;
        padding:5px;
    }

    @media all and (min-width:1200px) {
        .portfolio--items {
            width:33%;
        }

    }


    @media all and (min-width:800px) and (max-width:1199px) {
        .portfolio--items {
            width:50%;
        }
    }

    @media all and (max-width:799px) {
        .portfolio--items {
            width:100%;
        }
    }

</style>