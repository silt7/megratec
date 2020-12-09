<template>
    <div class="wrapper">
        <carousel :per-page="1"
                  loop
                  :speed="1"
                  autoplay
                  :autoplay-timeout="5000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons' style='display:none'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons' style='display:none'>keyboard_arrow_left</i>">
            <slide>
                <div class="carousel-caption">
                    <h3>#1 Новость</h3>
                    <h2>
                        Вышли новые версии XpeditionEnterprise,<br />
                        PADS и HyperLynx подробнее
                    </h2>
                    <div class="line-slider"></div>
                </div>
                <img width="100%" :src="carousel1" alt="carousel1" />
            </slide>
            <slide>
                <div class="filtr"></div>
                <div class="carousel-caption">
                    <h3>#2 Новость</h3>
                    <h2>
                        Вышли новые версии XpeditionEnterprise,<br />
                        PADS и HyperLynx подробнее
                    </h2>
                    <div class="line-slider"></div>
                </div>
                <img width="100%" :src="carousel2" alt="carousel2" />
            </slide>
            <slide>
                <div class="carousel-caption">
                    <h3>#3 Новость</h3>
                    <h2>
                        Вышли новые версии XpeditionEnterprise,<br />
                        PADS и HyperLynx подробнее
                    </h2>
                    <div class="line-slider"></div>
                </div>
                <img width="100%" :src="carousel3" alt="carousel3" />
            </slide>
        </carousel>
        <div class="main main-raised">
            <div class="section" style="padding: 0;">
                <md-toolbar class="md-primary">
                    <div class="md-toolbar-row">
                        <div class="md-toolbar-section-start">
                            <md-list>
                                <md-list-item href="javascript:void(0)" v-on:click="openCategory">
                                    <md-icon>list</md-icon>
                                    <p  style="font-size:14px">ПРОДУКТЫ</p>
                                    <md-icon :style="{ transform: 'rotate('+ turn+'turn)'}">keyboard_arrow_down</md-icon>
                                </md-list-item>
                            </md-list>
                        </div>
                        <div class="md-toolbar-section-end">
                            <md-button class="md-just-icon md-simple md-white md-toolbar-toggle">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </md-button>

                            <div class="md-collapse">
                                <md-list>
                                    <md-list-item>
                                        <router-link exact to="/trainings/">
                                            <md-icon>explore</md-icon>
                                            <p>Тренинги</p>
                                        </router-link>
                                    </md-list-item>

                                    <md-list-item>
                                        <router-link exact to="/contacts/">
                                            <md-icon>account_circle</md-icon>
                                            <p>Контакты</p>
                                        </router-link>
                                    </md-list-item>

                                    <md-list-item>
                                        <router-link exact to="/about/">
                                            <md-icon>settings</md-icon>
                                            <p>О нас</p>
                                        </router-link>
                                    </md-list-item>
                                </md-list>
                            </div>
                        </div>
                    </div>
                </md-toolbar>
                <nav-tabs-card no-label tabs-plain id="tabs-menu">
                    <template slot="content">
                        <md-tabs class="md-secondary" md-alignment="centered">
                            <md-tab v-for="item in category" :key="item.ID" :md-label="item.NAME">
                                <div class="container">
                                    <div class="md-layout md-gutter md-alignment-left">
                                        <router-link class="md-layout-item md-size-20 md-small-size-100"
                                                     v-for="product in products" :key="product.ID"
                                                     :to="'product/' + product.ID"
                                                     v-if="product.SECTION == item.ID">
                                            <md-card class="product">
                                                <img v-if="product.PROPERTY_VALUES.icon != ''"
                                                     :src="product.PROPERTY_VALUES.icon" />
                                                <img v-else src="@/assets/img/icon/noimg.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">{{product.NAME}}</div>
                                                    <div class="md-subhead">Подробнее</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                    </div>
                                </div>
                            </md-tab>
                        </md-tabs>
                    </template>
                </nav-tabs-card>
                <div class="container news" style="padding-bottom:25px">
                    <h2>Последние события</h2>
                    <div class="md-layout text-center">
                        <div class="md-layout-item">
                            <div class="md-card md-card-background md-theme-default"
                                 :style="{'background-image': 'url('+require('@/assets/img/news/7.jpg')+')'}">
                                <div class="md-card-content" style="height:290px">
                                    <h6 class="card-category text-info"> 21.02.19 </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title"> Семинары </h3></a>
                                    <p class="card-description">Компания МЕГРАТЕК совместно с компанией Mentor Graphics провела 23, 24 и 25 января 2019 г. серию семинаров </p>
                                    <a href="javascript:void(0)" class="md-button md-white md-round md-theme-default">
                                        <div class="md-ripple">
                                            <div class="md-button-content">
                                                <i class="md-icon md-icon-font md-theme-default">format_align_left</i> Читать
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-item">
                            <div class="md-card md-card-background md-theme-default"
                                 :style="{'background-image': 'url('+require('@/assets/img/news/2.jpg')+')'}">
                                <div class="md-card-content" style="height:290px">
                                    <h6 class="card-category text-info"> 29.05.17 </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title"> Вышла новая книга по VHDL </h3></a>
                                    <p class="card-description"> В продаже появилась книга "Моделирование и верификация цифровых систем на языке VHDL" </p>
                                    <a href="javascript:void(0)" class="md-button md-white md-round md-theme-default">
                                        <div class="md-ripple">
                                            <div class="md-button-content">
                                                <i class="md-icon md-icon-font md-theme-default">format_align_left</i> Читать
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-item">
                            <div class="md-card md-card-background md-theme-default"
                                 :style="{'background-image': 'url('+require('@/assets/img/news/5.jpg')+')'}">
                                <div class="md-card-content" style="height:290px">
                                    <h6 class="card-category text-info"> 18.11.17 </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title"> Обновление сайта </h3></a>
                                    <p class="card-description">Обновлён форум и другие модули сайта</p>
                                    <a href="javascript:void(0)" class="md-button md-white md-round md-theme-default">
                                        <div class="md-ripple">
                                            <div class="md-button-content">
                                                <i class="md-icon md-icon-font md-theme-default">format_align_left</i> Читать
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout text-center">
                        <div class="md-layout-item">
                            <div class="md-card md-card-background md-theme-default" 
                                 :style="{'background-image': 'url('+require('@/assets/img/news/4.jpg')+')'}">
                                <div class="md-card-content" style="height:215px">
                                    <h6 class="card-category text-info"> 19.12.15 </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title"> Премодерация отключена </h3></a>
                                    <p class="card-description"> Теперь темы и сообщения будут видны всем сразу после их создания. </p>
                                    <a href="javascript:void(0)" class="md-button md-danger md-round md-theme-default">
                                        <div class="md-ripple">
                                            <div class="md-button-content">
                                                <i class="md-icon md-icon-font md-theme-default">format_align_left</i> Read Article
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="md-layout-item">
                            <div class="md-card md-card-background md-theme-default" style="background-image: url('/img/slider-1.jpg')">
                                <div class="md-card-content" style="height:215px">
                                    <h6 class="card-category text-info" > 28.11.15 </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title"> Модернизация сайта </h3></a>
                                    <p class="card-description"> В связи с модернизацией сайта, некоторые его функции могут быть временно недоступны. Приносим свои извинения за доставленные неудобства. </p>
                                    <a href="javascript:void(0)" class="md-button md-danger md-round md-theme-default">
                                        <div class="md-ripple">
                                            <div class="md-button-content">
                                                <i class="md-icon md-icon-font md-theme-default">format_align_left</i> Read Article
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style="padding: 50px 0">
                    <div class="md-layout">
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/1.png"/>
                            </a>
                        </div>
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/2.png"/>
                            </a>
                        </div>
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/3.png"/>
                            </a>
                        </div>
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/4.png"/>
                            </a>
                        </div>
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/5.png"/>
                            </a>
                        </div>
                        <div class="md-layout-item">
                            <a href="#" target="_blank">
                                <img src="@/assets/img/partner/6.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { NavTabsCard } from "@/components";

    export default {
        components: {
            NavTabsCard
        },
        name: "index",
        data() {
            return {
                firstname: null,
                email: null,
                password: null,
                leafShow: false,
                carousel1: require("@/assets/img/slider-1.jpg"),
                carousel2: require("@/assets/img/slider-2.jpg"),
                carousel3: require("@/assets/img/slider-2.jpg"),
                productImg: require("@/assets/img/products/1.jpg"),
                category: 'N',
                products: [],
                clickCategory: 0,
                turn: 0
            };
        },
        methods: {
            leafActive() {
                if (window.innerWidth < 768) {
                    this.leafShow = false;
                } else {
                    this.leafShow = true;
                }
            },
            openCategory: function (event) {
                let parent = document.getElementById("tabs-menu");
                let tabsMenu = parent.querySelector('.md-tabs-navigation');
                if (this.clickCategory == 0) {
                    tabsMenu.classList.add("activeTabs");
                    this.clickCategory = 1;
                    this.turn = 0.5;
                } else {
                    tabsMenu.classList.remove("activeTabs");
                    this.clickCategory = 0;
                    this.turn = 0;
                }
            }
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.image})`
                };
            },
            signupImage() {
                return {
                    backgroundImage: `url(${this.signup})`
                };
            }
        },
        mounted() {
            this.leafActive();
            window.addEventListener("resize", this.leafActive);
            document.title = 'Megratec'
            this.axios.get(this.$route.meta.baseURL+'/rest/1/1szw54c9zzx4ab1d/entity.section.get?ENTITY=products&SORT%5BSORT%5D=ASC').then((response) => {
                this.category = response.data.result;
            });
            this.axios.get(this.$route.meta.baseURL + '/rest/1/1szw54c9zzx4ab1d/entity.item.get?ENTITY=products').then((response) => {
                this.products = response.data.result;
            });
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.leafActive);
        }
    };
</script>
<style lang="scss">
    .section-download {
        .md-button + .md-button

    {
        margin-left: 5px;
    }

    }

    .VueCarousel-pagination {
        margin-bottom: 10vh !important;
    }

    .VueCarousel-inner {
        transition: none !important;
    }

    .VueCarousel-slide-active {
        animation: shadow 3s 1 ease-in-out;
    }

    @keyframes shadow {
        from {
            opacity: 0.8;
        }

        20% {
            opacity: 1;
        }

        to {
            opacity: 1;
        }
    }

    .carousel-caption {
        bottom: 35vh !important;
        animation: carousel-caption 2s 1 ease-in-out;
    }

    @keyframes carousel-caption {
        from {
            opacity: 0;
            transform: translateY(10vh);
        }

        to {
            opacity: 1;
        }
    }

    .line-slider {
        margin: 3% auto;
        width: 25%;
        max-width: 100%;
        height: 1px;
        background: -moz-linear-gradient( 0deg, rgba(242, 243, 248, 0) 0%, #f6f6f6 50%, rgba(242, 243, 248, 0) 100% );
        background: -webkit-linear-gradient( 0deg, rgba(242, 243, 248, 0) 0%, #f6f6f6 50%, rgba(242, 243, 248, 0) 100% );
    }

    .product {
        height: 200px;
        margin-left: 1%;
        box-shadow: 0 0 black !important;
        border: 1px solid #c5c5c5;
        .md-card-header

    {
        background: #4b8edb !important;
    }

    .md-title {
        color: #3d434b;
        font-size: 14pt !important;
    }

    img {
        width: 60px !important;
        margin: 15px;
    }

    }
    .product:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }

    .md-layout-item:nth-child(2n + 1) .product {
        border-top: 10px solid #2e5790;
    }

    .md-layout-item:nth-child(2n) .product {
        border-top: 10px solid #4b8edb;
    }

    .md-toolbar {
        margin-bottom: 0 !important;
    }

    .md-card.md-card-nav-tabs {
        /*position: relative;
    top: -60px;*/
    }
    .news .card-title{
        color: #fff !important;
    }
    .news .card-description{
        color: #fff !important;
    }
    .news .md-card-content{
        background-color: rgba(10,30,50,0.7);
    }
    .news .md-card-content .md-button{
        position: absolute;
        bottom: 5px;
        left: 33%;
    }
    #tabs-menu {
        padding: 0 10px;
        .md-tabs-navigation

    {
        background: #4b8edb !important;
        box-shadow: 0 0 black;
        border-radius: 0;
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.15s ease-out;
    }

    button {
        width: 30%;
        max-width: inherit !important;
    }

    .activeTabs {
        max-height: 500px;
        transition: max-height 0.7s ease-out;
    }

    }

    .md-button .md-ripple {
        justify-content: start !important;
    }

    @media screen and (min-width: 960px) {
        .VueCarousel {
            height: 65vh;
        }

        .md-tabs-navigation {
            padding-left: 11vw !important;
        }
    }
</style>
