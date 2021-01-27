<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">О нас</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-contacts">
        <div v-html="page[0][0].DETAIL_TEXT"></div>
        <div class="container" style="padding: 70px 15px">
          <h2 class="text-center title">Партнёры</h2>
          <h5>
            Мы также имеем возможность осуществлять комплексные поставки
            программного обеспечения, электронных компонентов и аппаратных
            платформ любой конфигурации через своих партнеров.
          </h5>
          <carousel :perPageCustom ="[[900, 5]]"
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
        <div class="container">
          <h2 class="title" style="margin: 10px auto">Оставить заявку</h2>
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Имя</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Сообщение</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-primary">Отправить</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner-bg.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null,
      page: ''
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
      this.page = this.getItem("pages", 58);
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
@media screen and (min-width: 960px) {
  .page-header {
    height: 40vh;
  }
}
@media screen and (max-width: 900px) {
  .page-header {
    height: 300px;
  }
  .support .md-layout-item {
    margin-top: 30px;
  }
}
</style>
