<template>
   <div class="portfolio-items">
       <h3 class="portfolio-items--click" @click="changeVisibility"> {{ portfolio.title.rendered }} </h3>
       <slider animation="fade"  :speed="1000" :auto="false">
           <slider-item v-for="(slide, index) in list" :key="index">
               <img :src="slide.url" class="portfolio-items__image"  @click="changeVisibility" style="cursor:pointer;">
           </slider-item>
       </slider>

       <div class="portfolio-popup" v-show="portfolioVisibility"  @click="changeVisibilityC">
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
                        <ul v-if="getLanguagePL" style="list-style-type:none;">
                           <li>Adres: {{ portfolio.acf.adres.address }}</li>
                           <li>Dostępność: <a href="#dostepnosc" @click="changeVisibility">Sprawdź dostępność</a></li>
                        </ul>
                        <ul v-if="getLanguageEN"  style="list-style-type:none;">
                           <li>Adressess: {{ portfolio.acf.adres.address }}</li>
                           <li>Availability: <a href="#dostepnosc"  @click="changeVisibility">Check Availability</a></li>
                        </ul>

                       <div class="google-map" :id="googleSingleMap"></div>
                   </div>
                   <div class="portfolio-popup__container__content">
                       <h3 class="portfolio-popup__container__content__title">{{ portfolio.title.rendered }}</h3>
                       <span v-html="portfolio.content.rendered"></span>
                   </div>

               </div>
           </div>
       </div>
   </div>

</template>

<script>
    import { Slider, SliderItem } from 'vue-easy-slider';
    export default {
        data() {
            return {
                portfolioVisibility : false,
                list: this.portfolio.acf.galeria,
                googleSingleMap: 'googleSingleMap' + this.portfolio.id

        }
        },
        methods: {

            changeVisibilityC(e) {
                if(e.target.className === "portfolio-popup__overcontainer") {
                    jQuery('.fusion-header-wrapper').removeClass('visibility-index');
                    jQuery('#dostepnosc').removeClass('visibility-only-z-index');
                    return this.portfolioVisibility = !this.portfolioVisibility;
                }

            },
            changeVisibility(){

                jQuery('.fusion-header-wrapper').toggleClass('visibility-index');
                jQuery('#dostepnosc').toggleClass('visibility-only-z-index');
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
        props: ['portfolio'],
        components: {
            Slider,
            SliderItem
        },
        mounted(){

            let street = {lat: Number(this.portfolio.acf.adres.lat), lng: Number(this.portfolio.acf.adres.lng) };

            let map = new google.maps.Map(document.getElementById(this.googleSingleMap), {
                zoom: 12,
                center: street,
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                            {
                                "color": "#f5f5f5"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative.land_parcel",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#bdbdbd"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#757575"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#dadada"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#616161"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#e5e5e5"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#eeeeee"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#c9c9c9"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#9e9e9e"
                            }
                        ]
                    }
                ]
            });
            let marker = new google.maps.Marker({
                position: street,
                icon: '/wp-content/plugins/chiliit/ikona.png',
                map: map
            });
        }




    }
</script>
<style>

    .google-map {
        width:100%;
        height:350px;
    }

    ul {
        padding-left:10px;
    }

    .portfolio-items .slider {
        margin:10px;
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
            height:100%;
            object-fit:cover;
        }
        .portfolio-popup__container__image .slider {
            width: 50vw!important;
            height:400px!important;
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
            height:100%;
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
            height:100%;
            object-fit:cover;
        }
        .portfolio-popup__container__image .slider {
            width: 80vw!important;
        }
    }

</style>