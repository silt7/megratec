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
                  navigationPrevLabel="<i class='material-icons' style='display:none'>keyboard_arrow_left</i>"
                  style="height: 80vh;">
            <slide>
                <div class="carousel-caption">
                    <h3>#1 Новость</h3>
                    <h2>
                        Вышли новые версии XpeditionEnterprise,<br> PADS и HyperLynx
                        подробнее
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
                        Вышли новые версии XpeditionEnterprise,<br> 
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
                        Вышли новые версии XpeditionEnterprise,<br> PADS и HyperLynx
                        подробнее
                    </h2>
                    <div class="line-slider"></div>
                </div>
                <img width="100%" :src="carousel3" alt="carousel3" />
            </slide>
        </carousel>
        <div class="main main-raised">
            <div class="section" style="padding: 0;">
                <nav-tabs-card no-label 
                               tabs-plain 
                               style="padding:0 10px">
                    <template slot="content">
                        <md-tabs class="md-primary" md-alignment="centered">
                            <md-tab id="tab-home" md-label="ИМС">
                                <div class="container">
                                    <div class="md-layout">
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item  product b1">
                                                <img src="@/assets/img/products/1.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">Veloce</div>
                                                    <div class="md-subhead">The Veloce® Strato™</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item product b2">
                                                <img src="@/assets/img/products/icon/2.png" />
                                                <md-card-header-text>
                                                    <div class="md-title">Tanner</div>
                                                    <div class="md-subhead">Маршрут проектирования Tanner</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b1">
                                                <img src="@/assets/img/products/icon/3.png" />
                                                <md-card-header-text>
                                                    <div class="md-title">OASYS-RTL</div>
                                                    <div class="md-subhead">Высокое качество синтеза</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b2">
                                                <img src="@/assets/img/products/1.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">APRISA</div>
                                                    <div class="md-subhead">Трассировка цифровых ИС</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                    </div>
                                    <div class="md-layout">
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b2">
                                                <img src="@/assets/img/products/icon/2.png" />
                                                <md-card-header-text>
                                                    <div class="md-title">Eldo</div>
                                                    <div class="md-subhead">Eldo Classic,
                                                        Eldo Premier и Eldo RF.
                                                    </div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b1">
                                                <img src="@/assets/img/products/icon/3.png" />
                                                <md-card-header-text>
                                                    <div class="md-title">AFS</div>
                                                    <div class="md-subhead">Analog Fast Spice</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b2">
                                                <img src="@/assets/img/products/1.svg" />
                                                <md-card-header-text>
                                                    <div class="md-title">Symphony</div>
                                                    <div class="md-subhead">Symphony Mixed-Signal Platform</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                        <router-link to="/product" class="a-product">
                                            <md-card class="md-layout-item md-size-23 product b1">
                                                <img src="@/assets/img/products/icon/2.png" />
                                                <md-card-header-text>
                                                    <div class="md-title">Vista</div>
                                                    <div class="md-subhead">Vista™</div>
                                                </md-card-header-text>
                                            </md-card>
                                        </router-link>
                                    </div>
                                </div>
                            </md-tab>

                            <md-tab id="tab-pages" md-label="ПЛИС">
                                <div class="container">
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                </div>
                            </md-tab>

                            <md-tab id="tab-posts" md-label="Прроектирование на печатных платах">
                                <div class="container">
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                </div>
                            </md-tab>

                            <md-tab id="tab-posts2" md-label="Тепловой анализ">
                                <div class="container">
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/4.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                </div>
                            </md-tab>

                            <md-tab id="tab-posts3" md-label="Тестирование микросхем">
                                <div class="container">
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                </div>
                            </md-tab>

                            <md-tab id="tab-posts4" md-label="Кабельные соединения">
                                <div class="container">
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                    <div class="md-layout">
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b2">
                                            <img src="@/assets/img/products/2.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                        <md-card class="md-layout-item md-size-23 product b1">
                                            <img src="@/assets/img/products/1.svg" />
                                            <md-card-header-text>
                                                <div class="md-title">HDL описание проекта</div>
                                                <div class="md-subhead">HDL описание проекта</div>
                                            </md-card-header-text>
                                        </md-card>
                                    </div>
                                </div>
                            </md-tab>
                        </md-tabs>
                    </template>
                </nav-tabs-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { NavTabsCard } from "@/components";

    export default {
        components: {
            NavTabsCard,
        },
        name: "index",
        bodyClass: "index-page",
        props: {
            image: {
                type: String,
                default: require("@/assets/img/vue-mk-header.jpg")
            },
            leaf4: {
                type: String,
                default: require("@/assets/img/leaf4.png")
            },
            leaf3: {
                type: String,
                default: require("@/assets/img/leaf3.png")
            },
            leaf2: {
                type: String,
                default: require("@/assets/img/leaf2.png")
            },
            leaf1: {
                type: String,
                default: require("@/assets/img/leaf1.png")
            },
            signup: {
                type: String,
                default: require("@/assets/img/city.jpg")
            },
            landing: {
                type: String,
                default: require("@/assets/img/landing.jpg")
            },
            profile: {
                type: String,
                default: require("@/assets/img/profile.jpg")
            }
        },
        data() {
            return {
                firstname: null,
                email: null,
                password: null,
                leafShow: false,
                carousel1: require("@/assets/img/slider-1.jpg"),
                carousel2: require("@/assets/img/slider-2.jpg"),
                carousel3: require("@/assets/img/slider-2.jpg"),
                productImg: require("@/assets/img/products/1.jpg")
            };
        },
        methods: {
            leafActive() {
                if (window.innerWidth < 768) {
                    this.leafShow = false;
                } else {
                    this.leafShow = true;
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
        },
        beforeDestroy() {
            window.removeEventListener("resize", this.leafActive);
        }
    };
</script>
<style lang="scss">
    .section-download {
        .md-button + .md-button{
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
        animation: shadow  3s 1 ease-in-out;
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
        bottom: 30vh !important;
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
    .line-slider{
        margin: 3% auto;
        width: 25%;
        max-width: 100%;
        height: 1px;
        background: -moz-linear-gradient(0deg, rgba(242, 243, 248, 0) 0%, #f6f6f6 50%, rgba(242, 243, 248, 0) 100%);
        background: -webkit-linear-gradient(0deg, rgba(242, 243, 248, 0) 0%, #f6f6f6 50%, rgba(242, 243, 248, 0) 100%);
    }
    .a-product{
        margin-right: 1vw !important;
        margin-left: 1vw !important;
        width: 21%
    }
    .product{
        height: 200px;
    }
    .product.b1 {
        border-top: 10px solid #2e5790;
    }
    .product.b2 {
        border-top: 10px solid #4b8edb;
    }
    .product .md-card-header{
        background: #4b8edb !important;
    }
    .product .md-title{
        color:#3d434b;
        font-size:14pt !important;
    }
    .product img{
        width: 60px !important;
        margin: 15px;
    }
    @media all and (min-width: 991px) {
        .btn-container {
            display: flex;
        }
    }
</style>
