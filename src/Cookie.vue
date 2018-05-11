<template>
    <div>
        <div v-show="cookiesVisibility">
        Zgadzam się na cookies <a href="#">Link do Cookies</a> <i class="fa fa-close" @click="hideCookies"></i>
        </div>
    </div>


</template>
<script>
    export default {
        data() {
            return {
                cookiesVisibility: true
            }
        },
        methods: {
            hideCookies() {
                console.log(this.cookiesVisibility);
                this.cookiesVisibility = false;
                console.log(this.cookiesVisibility);
            }
        }
    }

</script>
<style>
    .fa-close {
        cursor:pointer;
    }
</style>