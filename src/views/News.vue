<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container" v-for="item in news" :key="item.ID">
          <div class="md-layout content">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    v-if="item.DETAIL_PICTURE"
                    :src="item.DETAIL_PICTURE"
                    class="img-raised rounded img-fluid"
                  />
                  <img
                    v-else
                    src="@/assets/img/picture-not.jpg"
                    class="img-raised rounded img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">{{ item.NAME }}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="container" v-html="item.DETAIL_TEXT"></div>
          <Form 
            v-if="(item.PROPERTY_VALUES.FORM == 'Да') && (item.PROPERTY_VALUES.FORMFIELD != '')" 
            :fields="item.PROPERTY_VALUES.FORMFIELD"></Form>
        </div>
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
  bodyClass: "profile-page",
  data() {
    return {
      news: []
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/techno-animate-bg.jpg")
    }
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
      vm.getItem("news", to.params.id).then(data=>{
        vm.news = data;
        vm.getSeo();
      });
    });
  }
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
  .md-card-content .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;
    img {
      margin-bottom: 2.142rem;
    }
  }
}
.breadcrumps {
  padding: 10px;
  font-size: 12px;
}
.breadcrumps a {
  color: #2e5790 !important;
  padding-right: 5px;
  padding-left: 5px;
}
@media screen and (max-width: 900px) {
  .profile-page .page-header {
    height: 200px;
  }
  .content {
    margin-top: 50px;
  }
  .content .name {
    margin-top: -30px !important;
  }
}
</style>
