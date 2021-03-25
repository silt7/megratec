<template>
    <div id="indexPage" class="wrapper">
        <carousel :per-page="1"
                  loop
                  :speed="1"
                  autoplay
                  :autoplay-timeout="12000"
                  :mouse-drag="false"
                  navigationEnabled
                  navigationNextLabel="<i class='material-icons' style='display:none'>keyboard_arrow_right</i>"
                  navigationPrevLabel="<i class='material-icons' style='display:none'>keyboard_arrow_left</i>"
                  class="main-carusel">
            <slide v-for="item in banners" :key="item.ID">
                <div class="carousel-caption">
                    <h3>{{item.NAME}}</h3>
                    <h2 v-html="item.PREVIEW_TEXT"></h2>
                    <div class="line-slider"></div>
                </div>
                <video :autoplay="autoplay" muted
                       width="100%"
                       style="margin-top: -10%"
                       v-if="item.PROPERTY_VALUES['BANNER_VIDEO']">
                    <source :src="item.PROPERTY_VALUES['BANNER_VIDEO']">
                </video>
                <img v-else width="100%" :src="item.PREVIEW_PICTURE" alt="carousel1" />
            </slide>
        </carousel>
        <div class="main main-raised">
            <div class="section" style="padding: 0;">
                <md-toolbar class="md-primary mainMenu">
                    <div class="md-toolbar-row">
                        <div class="md-toolbar-section-start">
                            <md-list>
                                <md-list-item href="javascript:void(0)"
                                              v-on:click="openCategory">
                                    <md-icon>list</md-icon>
                                    <p style="font-size:14px">ПРОДУКТЫ</p>
                                    <md-icon :style="{ transform: 'rotate(' + turn + 'turn)' }">keyboard_arrow_down</md-icon>
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
                                        <router-link exact to="/dizayn-centr/">
                                            <md-icon>memory</md-icon>
                                            <p>Дизайн-центр</p>
                                        </router-link>
                                    </md-list-item>
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
                        <md-tabs class="md-secondary" md-alignment="left" :md-active-tab="'md-' + active">
                            <md-tab v-for="item in category[0]"
                                    :key="item.ID"
                                    :md-label="item.NAME"
                                    :id="'md-' + item.ID">
                                <div class="container">
                                    <div class="md-layout md-gutter md-alignment-left">
                                        <router-link class="md-layout-item md-size-20 md-small-size-100"
                                                     v-for="product in productsMain[0]"
                                                     :key="product.ID"
                                                     :to="'product/' + product.ID"
                                                     v-if="item.ID == 10">
                                            <md-card class="product">
                                                <img v-if="product.PROPERTY_VALUES.icon != ''"
                                                     :src="product.PROPERTY_VALUES.icon" />
                                                <img v-else src="@/assets/img/icon/noimg.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">{{ product.NAME }}</div>
                                                    <div class="sub-title">{{ product.PREVIEW_TEXT }}</div>
                                                    <div class="md-subhead">Подробнее</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link class="md-layout-item md-size-20 md-small-size-100"
                                                     v-for="product in products[0]"
                                                     :key="product.ID"
                                                     :to="'product/' + product.ID"
                                                     v-if="product.SECTION == item.ID">
                                            <md-card class="product">
                                                <img v-if="product.PROPERTY_VALUES.icon != ''"
                                                     :src="product.PROPERTY_VALUES.icon" />
                                                <img v-else src="@/assets/img/icon/noimg.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">{{ product.NAME }}</div>
                                                    <div class="md-subhead">Подробнее</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <i v-on:click="tabChanged('prev')" class='material-icons tabChanged-left'>keyboard_arrow_left</i>
                                        <i v-on:click="tabChanged('next')" class='material-icons tabChanged-right'>keyboard_arrow_right</i>
                                    </div>
                                </div>
                            </md-tab>
                        </md-tabs>

                        <div class="md-layout text-center">
                            <div class="md-layout-item md-size-33 mx-auto">
                                <router-link exact to="/products/">
                                    <md-button class="md-primary all-products">Все</md-button>
                                </router-link>
                            </div>
                        </div>
                    </template>
                </nav-tabs-card>
                <div class="container news" style="padding-bottom:25px">
                    <h2>Последние события</h2>
                    <div class="md-layout text-center">
                        <div class="md-layout-item"
                             v-for="(item, index) in news[0]"
                             :key="item.ID"
                             v-if="index < 2">
                            <div class="md-card md-card-background md-theme-default"
                                 :style="{'background-image': 'url(' + item.PREVIEW_PICTURE + ')'}">
                                <div class="md-card-content" style="min-height:290px">
                                    <h6 class="card-category text-info">
                                        {{ item.DATE_CREATE.split("T")[0] }}
                                    </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title">{{ item.NAME }}</h3></a>
                                    <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                                    <a href="javascript:void(0)"
                                       class="md-button md-white md-round md-theme-default">
                                        <div class="event md-ripple">
                                            <router-link :to="'/news/' + item.ID" style="color: #999">
                                                <div class="md-button-content">
                                                    <i class="md-icon md-icon-font md-theme-default">format_align_left</i>
                                                    Читать
                                                </div>
                                            </router-link>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md-layout text-center">
                        <div class="md-layout-item"
                             v-for="(item, index) in news[0]"
                             :key="item.ID"
                             v-if="index > 2 && index <= 5">
                            <div class="md-card md-card-background md-theme-default"
                                 :style="{'background-image': 'url(' + item.PREVIEW_PICTURE + ')'}">
                                <div class="md-card-content" style="height:300px">
                                    <h6 class="card-category text-info">
                                        {{ item.DATE_CREATE.split("T")[0] }}
                                    </h6>
                                    <a href="javascript:void(0)"><h3 class="card-title">{{ item.NAME }}</h3></a>
                                    <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                                    <a href="javascript:void(0)"
                                       class="md-button md-danger md-round md-theme-default">
                                        <div class="md-ripple">
                                            <router-link :to="'/news/' + item.ID"
                                                         style="color: white">
                                                <div class="md-button-content">
                                                    <i class="md-icon md-icon-font md-theme-default">format_align_left</i>
                                                    Читать
                                                </div>
                                            </router-link>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style="padding: 50px 0">
                    <carousel :perPageCustom="[[900, 5]]"
                              loop
                              :speed="700"
                              :navigationEnabled="true"
                              :paginationEnabled="false"
                              navigationNextLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_right</i>"
                              navigationPrevLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_left</i>"
                              class="partnerSlide">
                        <slide>
                            <img src="@/assets/img/partner/huawei.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/baikal.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/depo.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/ineum.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/ka.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/miet.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/elbrus.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/odul.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/oak.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/rti.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/elvis.png" />
                        </slide>
                        <slide>
                            <img src="@/assets/img/partner/pai.png" />
                        </slide>
                    </carousel>
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
                category: "N",
                products: [],
                productsMain: [],
                news: [],
                clickCategory: 0,
                turn: 0,
                active: 10,
                banners: [],
                autoplay: true
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
                let tabsMenu = parent.querySelector(".md-tabs-navigation");
                if (this.clickCategory == 0) {
                    tabsMenu.classList.add("activeTabs");
                    this.clickCategory = 1;
                    this.turn = 0.5;
                } else {
                    tabsMenu.classList.remove("activeTabs");
                    this.clickCategory = 0;
                    this.turn = 0;
                }
            },
            tabChanged(direction) {
                let arr = []
                let cat = this.category.slice()
                cat.shift().forEach((element) => {
                    arr.push(element['ID'])
                })

                let i = arr.indexOf(String(this.active))
                if (direction == 'next') {
                    if (arr[i + 1] === undefined) {
                        this.active = arr[0]
                    } else {
                        this.active = arr[i + 1]
                    }
                } else {
                    if (arr[i - 1] === undefined) {
                        this.active = arr.pop()
                    } else {
                        this.active = arr[i - 1]
                    }
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
            document.title = "Megratec";
            this.category = this.getSection("products", 0);
            this.products = this.getItem("products", 0);
            this.productsMain = this.getItem("products", -1); // -1 Вывести продукты с пометкой на главную
            this.news = this.getItem("news", 0);



            let params = {
                params: {
                    ENTITY: 'pages',
                    "FILTER[SECTION]": '13',
                    "SORT[SORT]": "ASC",
                    "FILTER[ACTIVE]": "Y"
                }
            };
            this.axios
                .get(this.$root.baseURL + "/rest/1/1szw54c9zzx4ab1d/entity.item.get?", params)
                .then(response => {
                    this.banners = response.data.result
                });
            if (window.screen.width < 900) {
                this.autoplay = false;
            }
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

    .main-carusel .VueCarousel-pagination {
        bottom: 50% !important;
    }

    .main-carusel .VueCarousel-inner {
        transition: none !important;
    }

    .main-carusel .VueCarousel-slide-active {
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
        top: 15%;
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
        height: 65px !important;
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

    .all-products .md-button-content {
        margin: auto;
    }

    .news .card-title {
        color: #fff !important;
    }

    .news .card-description {
        color: #fff !important;
    }

    .news .md-card-content {
        background-color: rgba(10, 30, 50, 0.7);
    }
    .news a.md-button{
        margin-bottom: 5px !important;
    }
    .news .md-card-background{
        background-repeat:no-repeat;
        -webkit-background-size:cover;
        -moz-background-size:cover;
        -o-background-size:cover;
        background-size:cover;
        background-position:center;
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

    .partnerSlide .VueCarousel-slide {
        text-align: center;
    }

        .partnerSlide .VueCarousel-slide img {
            width: 70%;
        }

    .partnerSlide .VueCarousel-navigation-prev {
        left: 0 !important;
    }

    .partnerSlide .VueCarousel-navigation-next {
        right: 0 !important;
    }

    .partnerSlide .VueCarousel-navigation-button {
        outline: none !important
    }

    .tabChanged-left, .tabChanged-right {
        position: absolute;
        font-size: 50px;
        cursor: pointer;
        color: #000;
        opacity: 0.5;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

        .tabChanged-left:hover, .tabChanged-right:hover {
            opacity: 1;
        }

    .tabChanged-left {
        left: -70px;
    }

    .tabChanged-right {
        right: -70px;
    }
    @media screen and (min-width: 901px) {
        .main-carusel.VueCarousel {
            height: 450px;
        }

        .md-tabs-navigation {
            padding-left: 18vw !important;
        }

        .news .md-card-content .md-button {
            position: absolute;
            width: 140px;
            bottom: 5px;
            left: 0;
            right: 0;
            margin: auto;
        }
    }

    @media screen and (min-width: 1600px) {
        .main-carusel.VueCarousel {
            height: 600px;
        }
    }

    @media screen and (max-width: 900px) {
        .mainMenu button, .tabChanged-left, .tabChanged-right {
            display: none;
        }

        .partnerSlide .VueCarousel-navigation {
            display: none;
        }

        .carousel-caption {
            display: none;
        }

        .event.md-ripple {
            height: auto;
        }
    }

    @media screen and (max-width: 1400px) {
        .tabChanged-left {
            left: -30px;
        }

        .tabChanged-right {
            right: -30px;
        }

        .partnerSlide .VueCarousel-navigation-prev {
            left: 25px !important;
        }

        .partnerSlide .VueCarousel-navigation-next {
            right: 25px !important;
        }
    }

    @media screen and (max-width: 1255px) {
        .tabChanged-left, .tabChanged-right {
            display: none;
        }
    }
</style>
