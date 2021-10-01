<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item"
            style="text-align: center"
            v-if="page"
            v-html="page.PREVIEW_TEXT"
          ></div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <Breadcrumbs/>
      <div class="section section-contacts">
        <div class="container news" style="padding-bottom:25px">
          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(1)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="min-height:290px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                  <router-link
                    :to="'/news/' + item.CODE"
                    style="color: #999"
                    class="md-button md-white md-round md-theme-default"
                  >
                    <div class="event md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default"
                          >format_align_left</i
                        >
                        Читать
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(2)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="height:300px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p
                    class="card-description truncate"
                    v-html="item.PREVIEW_TEXT"
                  ></p>
                  <router-link
                    :to="'/news/' + item.CODE"
                    style="color: white"
                    class="md-button md-danger md-round md-theme-default"
                  >
                    <div class="md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default"
                          >format_align_left</i
                        >
                        Читать
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(3)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="min-height:290px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p class="card-description" v-html="item.PREVIEW_TEXT"></p>
                  <router-link
                    :to="'/news/' + item.CODE"
                    style="color: #999"
                    class="md-button md-white md-round md-theme-default"
                  >
                    <div class="event md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default"
                          >format_align_left</i
                        >
                        Читать
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout text-center">
            <div
              class="md-layout-item"
              v-for="item in newsFiltr(4)"
              :key="item.ID"
            >
              <div
                class="md-card md-card-background md-theme-default"
                :style="{
                  'background-image': 'url(' + item.PREVIEW_PICTURE + ')'
                }"
              >
                <div class="md-card-content" style="height:300px">
                  <h6 class="card-category text-info">
                    {{ item.DATE_CREATE.split("T")[0] }}
                  </h6>
                  <a href="javascript:void(0)"
                    ><h3 class="card-title">{{ item.NAME }}</h3></a
                  >
                  <p
                    class="card-description truncate"
                    v-html="item.PREVIEW_TEXT"
                  ></p>
                  <router-link
                    :to="'/news/' + item.CODE"
                    style="color: white"
                    class="md-button md-danger md-round md-theme-default"
                  >
                    <div class="md-ripple">
                      <div class="md-button-content">
                        <i class="md-icon md-icon-font md-theme-default"
                          >format_align_left</i
                        >
                        Читать
                      </div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: "",
      header: require("@/assets/img/banner-bg.jpg"),
      news: []
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
    this.getItem("pages", this.$route.path.replace(/(\\|\/)/g, "")).then(
      data => {
        this.page = data.shift();
        this.getSeo();
        this.loadContent();
      }
    );
  },
  methods: {
    newsFiltr(number) {
      let result = [];
      if (number == 1) {
        result = this.news.slice(0, 2);
      } else if (number == 2) {
        result = this.news.slice(2, 5);
      } else if (number == 3) {
        result = this.news.slice(5, 7);
      } else if (number == 4) {
        result = this.news.slice(7, 10);
      }

      return result;
    },
    async loadContent() {
      this.news = await this.getItem("news", 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}

@media screen and (min-width: 900px) {
  .page-header {
    height: 40vh;
  }
}
@media screen and (max-width: 900px) {
  .section {
    padding: 10px 0;
  }
}
</style>
