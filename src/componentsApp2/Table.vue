<template>
    <tr>
        <td @click="changeVisibility" class="table--open-popup">
            <i class="fa fa-map-marker"></i>
            {{ portfolio.title.rendered }}
        </td>
        <td align="center" v-if="portfolio.acf.dostepny_od_zaraz === 'false'">
            {{ portfolio.acf.dostepnosc }}
        </td>
        <td align="center" v-if="portfolio.acf.dostepny_od_zaraz === 'true'">
            DOSTĘPNY OD ZARAZ
        </td>
        <td align="center">
            {{ portfolio.acf.pietro }}
        </td>
        <td align="center">
            {{ portfolio.acf.powierzchnia }} m<sup>2</sup>
        </td>
        <td>
            <a href="#kontakt" class="fusion-background-highlight"><span class="fusion-button button-default button-large">KONTAKT</span></a>
            <div class="portfolio-items">
                <div class="portfolio-popup" v-show="portfolioVisibility">
                    <div class="portfolio-popup__overcontainer">
                        <div class="portfolio-popup__container">
                            <div class="portfolio-popup__container--close">
                                <a @click="changeVisibility">
                                    <i class="fa fa-close"></i>
                                </a>
                            </div>
                            <div class="portfolio-popup__container__image">
                                <slider animation="fade" :speed="1000" :auto="false">
                                    <slider-item v-for="(slide, index) in list" :key="index">
                                        <img :src="slide.url" class="portfolio-items__image">
                                    </slider-item>
                                </slider>
                                <iframe
                                        width="100%"
                                        height="350"
                                        frameborder="0" style="border:0"
                                        :src="mapsAdres"
                                        allowfullscreen>
                                </iframe>
                            </div>
                            <div class="portfolio-popup__container__content">
                                <h3 class="portfolio-popup__container__content__title">{{ portfolio.title.rendered }}</h3>
                                <span v-html="portfolio.content.rendered"></span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>

</template>

<script>
    import { Slider, SliderItem } from 'vue-easy-slider';
    export default {
        props: ['portfolio'],
        data() {
            return {

                portfolioVisibility : false,
                list: this.portfolio.acf.galeria,
                mapsAdres: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyBOd6ZrLJa1kSCQYrp6ucDElSkUVddLoPQ&q=' + this.portfolio.acf.adres.lat + ',' + this.portfolio.acf.adres.lng

            }
        },
        methods: {
            changeVisibility(){
                jQuery('.fusion-header-wrapper').toggleClass('visibility-index');
                return this.portfolioVisibility = !this.portfolioVisibility;
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
        components: {
            Slider,
            SliderItem
        }

    }
</script>

<style>
    .table--open-popup {
        cursor:pointer;
    }
    .portfolio-items--click,.portfolio-items--preview {
        cursor:pointer;
    }
    .portfolio-popup__overcontainer {
        top:0;
        left:0;
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
    }
    .portfolio-popup__container {
        background:#fff;
        width:95%;
        height:95%;
        color:#333;
        position:relative;
        padding:30px;
        display:flex;
        justify-content:flex-start;
        align-items:flex-start;
        overflow-y:auto;
    }

    .portfolio-popup__container--close {
        position:absolute;
        color:#333;
        cursor:pointer;
        right: 20px;
        top: 15px;
        font-size: 30px;
    }

    .portfolio-popup {
        position:fixed;
        width:100%;
        background:rgba(0,0,0,0.7);
        height:100%;
        z-index:99999999;
        display: inline-block;
        top:0;
        left:0;

    }
    .portfolio-items h3 {
        text-align:center;
        color:#005500;
        padding:20px 5px 0px 5px;
    }
    .portfolio-items .portfolio-items--preview {
        width: 100%;
        height:300px;
        object-fit:cover;
        padding:5px;
    }
    .portfolio-popup__container__image,
    .portfolio-popup__container__content {
        padding: 20px;
    }
    .portfolio-popup__container__content__title {
        padding-top:0px;
        margin-top:0px;
    }

    @media all and (min-width:1200px) {
        .portfolio-items {
            width:33%;
        }
        .portfolio-popup__container__image {
            max-width:60%;
        }
        .portfolio-popup__container__content {
            max-width:40%;
        }
        .portfolio-items__image {
            width:100%;
            height:300px;
            object-fit:cover;
        }
        .portfolio-popup__container__image .portfolio-items__image {
            width:100%;
            height:600px;
            object-fit:cover;
        }
        .portfolio-popup__container__image .slider {
            width: 50vw!important;
        }

    }


    @media all and (min-width:800px) and (max-width:1199px) {
        .portfolio-items {
            width:50%;
        }
        .portfolio-popup__container__image {
            width:50%;
        }
        .portfolio-popup__container__content {
            width:50%;
        }

        .portfolio-items__image {
            width:100%;
            height:300px;
            object-fit:cover;
        }
        .portfolio-popup__container__image .portfolio-items__image {
            width:100%;
            height:60vh;
            object-fit:cover;
        }
        .portfolio-popup__container__image .slider {
            width: 40vw!important;
        }
    }

    @media all and (max-width:799px) {
        .portfolio-items {
            width:100%;
        }
        .portfolio-popup__container {
            flex-direction:column;
        }
        .portfolio-popup__container__image {
            width:100%;
        }
        .portfolio-popup__container__content {
            width:100%;
        }

        .portfolio-items__image {
            width:100%;
            height:300px;
            object-fit:cover;
        }
        .portfolio-popup__container__image .portfolio-items__image {
            width:100%;
            height:80vh;
            object-fit:cover;
        }
        .portfolio-popup__container__image .slider {
            width: 80vw!important;
        }
    }
</style>
