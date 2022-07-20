<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">{{$root.dictionary.static.about}}</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <Breadcrumbs title="О нас"/>
      <div class="section section-contacts">
        <div v-if="$root.contentPage" v-html="$root.contentPage.DETAIL_TEXT"></div>
        <div class="container" style="padding: 70px 15px" >
          <h2 class="text-center title">Партнёры</h2>
          <h5>
            Мы также имеем возможность осуществлять комплексные поставки
            программного обеспечения, электронных компонентов и аппаратных
            платформ любой конфигурации через своих партнеров.
          </h5>
          <carousel
            :perPageCustom="[[900, 5]]"
            loop
            :speed="700"
            :navigationEnabled="true"
            :paginationEnabled="false"
            navigationNextLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_right</i>"
            navigationPrevLabel="<i class='material-icons' style='color:#000 !important'>keyboard_arrow_left</i>"
            class="partnerSlide"
          >
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

        <Form :fields="['Имя', 'Компания', 'Почта', 'Телефон']"></Form>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  components: {
    Form
  },
  bodyClass: "landing-page",
  data() {
    return {
      page: "",
      header: require("@/assets/img/banner-bg.jpg")
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$root.loadContantsPage();
    });
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
