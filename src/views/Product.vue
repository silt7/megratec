<template>
    <div class="wrapper">
        <parallax class="section page-header header-filter"
                  :style="headerStyle"></parallax>
        <div class="main main-raised">
            <div class="section profile-content">
                <div class="container">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-50 mx-auto">
                            <div class="profile">
                                <div class="avatar">
                                    <img v-if="product.DETAIL_PICTURE" 
										:src="product.DETAIL_PICTURE"
                                        class="img-raised rounded img-fluid" />
									<img v-else src="@/assets/img/picture-not.jpg" class="img-raised rounded img-fluid gg"/>
                                </div>
                                <div class="name">
                                    <h3 class="title">{{product.NAME}}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container" v-html="product.DETAIL_TEXT"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        components: {

        },
        bodyClass: "profile-page",
        data() {
            return {
                product: []
            };
        },
        props: {
            header: {
                type: String,
                default: require("@/assets/img/techno-animate-bg.jpg")
            },
        },
        computed: {
            headerStyle() {
                return {
                    backgroundImage: `url(${this.header})`
                };
            }
        },
        beforeRouteEnter(to, from, next) {
            var params = {
                params: {
                    ENTITY: 'products',
                    'FILTER[ID]': to.params.id
                }
            };
            axios.get(to.meta.baseURL + '/rest/1/1szw54c9zzx4ab1d/entity.item.get?', params).then((response) => {
                document.title = response.data.result[0].NAME;
                next(vm => vm.product = response.data.result[0])
            });
        },
        /*mounted() {
            var params = {
                params: {
                    ENTITY: 'products',
                    'FILTER[ID]': this.$route.params.id
                }
            };
            this.axios.get(this.$root.baseURL + '/rest/1/1szw54c9zzx4ab1d/entity.item.get?', params).then((response) => {
                this.product = response.data.result[0];
            });
        },*/
    };
</script>

<style lang="scss" scoped>
    .section {
        padding: 0;
    }

    .profile-page .profile img {
        max-width: 280px;
    }

    .profile-tabs::v-deep {
        .md-card-content .md-list

    {
        justify-content: center;
    }

    [class*="tab-pane-"] {
        margin-top: 3.213rem;
        padding-bottom: 50px;
        img

    {
        margin-bottom: 2.142rem;
    }

    }
    }
</style>
