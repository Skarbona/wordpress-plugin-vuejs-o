<template>
    <div>
        <div v-show="cookiesVisibility" v-if="getLanguagePL">
            Ta strona używa ciasteczka (cookies), dzięki którym nasz serwis może działać lepiej.  <a href="/regulamin-cookie/">Zobacz Politykę Cookies</a> <i class="fa fa-close" @click="hideCookies"></i>
        </div>
        <div v-show="cookiesVisibility" v-if="getLanguageEN">
            By using this site you agree to our <a href="/regulamin-cookie/">cookie policy</a>. <i class="fa fa-close" @click="hideCookies"></i>
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
        computed: {
            getLanguagePL() {
                return document.documentElement.lang === 'pl-PL'
            },
            getLanguageEN() {
                return document.documentElement.lang === 'en-US'
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