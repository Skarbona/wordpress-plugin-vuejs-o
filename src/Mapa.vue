<template>
    <div>
        <div class="google-map" id="google-map" style="width:100%;height:600px;"></div>

    </div>
</template>

<script>
    export default {

        created(){
            this.$store.dispatch('wordpressRest/getMapy');
            this.markerCoordinates = this.$store.getters['wordpressRest/getMapyData'];
        },
        mounted() {



        }



    }

</script>
<style>
    .google-map {
        width: 800px;
        height: 600px;
        margin: 0 auto;
        background: gray;
    }
</style>