<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">{{$root.dictionary.title.design}}</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <Breadcrumbs title="Дизайн-центр"/>
      <div class="section section-contacts">
        <div v-if="$root.contentPage" v-html="$root.contentPage.DETAIL_TEXT"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
