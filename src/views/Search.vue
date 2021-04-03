<template>
  <div id="search" class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <form class="contact-form md-layout" @submit="validateBeforeSubmit">
              <md-icon
                class="text-primary md-layout-item"
                style="font-size: 32px !important;"
                >search</md-icon
              >
              <md-field class="md-layout-item md-size-55">
                <label>Текст для поиска...</label>
                <md-input
                  v-model="searchText"
                  type="text"
                  style="-webkit-text-fill-color: #fff !important"
                ></md-input>
              </md-field>
              <div class="md-layout-item md-size-30">
                <md-button class="md-primary" @click="search()"
                  >Искать</md-button
                >
              </div>
            </form>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <p v-if="$route.query.q == ''">
            Пустой поисковый запрос
          </p>
          <p v-else-if="result.length == 0">
            На ваш поисковый запрос ничего не найдено
          </p>
          <div v-else v-for="item in result" :key="item.ID">
            <router-link :to="item.URL">
              <h4>{{ item.TITLE }}</h4>
              <p v-html="item.BODY_FORMATED"></p>
            </router-link>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner-bg.jpg")
    }
  },
  data() {
    return {
      result: [],
      searchText: ""
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
    this.getSearch();
  },
  methods: {
    getSearch() {
      let params = {
        params: {
          q: this.$route.query.q
        }
      };
      this.axios
        .get(this.$root.baseURL + "/rest-custom/search/", params)
        .then(response => {
          this.result = response.data;
        });
    },
    search() {
      this.$route.query.q = this.searchText;
      this.getSearch();
      let url = new URL(window.location.href);
      url.searchParams.set("q", this.searchText);
      history.pushState(null, null, url);
    },
    validateBeforeSubmit(e) {
      e.preventDefault();
      this.search();
    }
  }
};
</script>

<style>
@media screen and (min-width: 960px) {
  #search .page-header {
    height: 40vh !important;
  }
}
@media screen and (max-width: 959px) {
  #search .page-header {
    height: 300px !important;
  }
}
</style>
