<template>
    <div>
        <div v-show="cookiesVisibility">
        Zgadzam się na cookies <a href="/regulamin-cookie/">Link do Cookies</a> <i class="fa fa-close" @click="hideCookies"></i>
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
                localStorage.setItem('OMEXcookie','yes');
                this.cookiesVisibility = false;

            }
        },
        created() {
            let cookie = localStorage.getItem('OMEXcookie');
            if(cookie) {
                this.cookiesVisibility = false;
            }
        }
    }

</script>
<style>
    .fa-close {
        cursor:pointer;
    }
    .fusion-contact-info a {
        text-decoration:underline;
    }
</style>