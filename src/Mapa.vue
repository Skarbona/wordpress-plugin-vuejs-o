<template>
    <div>
        <div class="google-map" id="google-map"></div>

    </div>
</template>

<script>
    export default {

        created(){
            this.$store.dispatch('wordpressRest/getMapy');
            this.markerCoordinates = this.$store.getters['wordpressRest/getMapyData'];
        },

    }

</script>
<style>
    .google-map {
        width: 100%;
        height: 600px;
        margin: 0 auto;
        background: gray;
    }
</style>