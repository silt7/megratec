// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import VueMeta from "vue-meta";

import MaterialKit from "./plugins/material-kit";
import { CollapsePlugin } from 'bootstrap-vue'
import Breadcrumbs from "./views/components/Breadcrumbs.vue";
import VueJsonLD from 'vue-jsonld'
Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(VueAxios, axios);
Vue.use(CollapsePlugin)
Vue.use(VueJsonLD)
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
});

Vue.component('Breadcrumbs', Breadcrumbs)
const NavbarStore = {
  showNavbar: false
};

const $baseURL = "https://megratec.ru";

Vue.mixin({
  data() {
    return {
      NavbarStore,
      baseURL: $baseURL,
      titleMeta: "Megratec",
      descriptionMeta: "Megratec"
    };
  },
  metaInfo() {
    return {
      title: this.$root.titleMeta,
      meta: [{ name: "description", content: this.$root.descriptionMeta }]
    };
  },
  methods: {
    getSection: function(entity, sectionId) {
      let res = [];
      let params = {
        params: {
          ENTITY: entity,
          "SORT[SORT]": "ASC",
          "FILTER[ACTIVE]": "Y"
        }
      };
      if (sectionId > 0) {
        params["params"]["FILTER[ID]"] = sectionId;
      } else if (sectionId == -1) {
        params["params"]["FILTER[ID]"] = 3;
      }
      axios
        .get($baseURL + "/rest/1/1szw54c9zzx4ab1d/entity.section.get?", params)
        .then(response => {
          res.push(response.data.result);
        });
      return res;
    },
    async getItem(entity, code) {
      let res = [];
      let params = {
        params: {
          ENTITY: entity,
          "SORT[SORT]": "ASC",
          "FILTER[ACTIVE]": "Y"
        }
      };

      if (code != 0) {
        params["params"]["FILTER[CODE]"] = code;
      }

      if (entity == "news") {
        delete params["params"]["SORT[SORT]"];
        params["params"]["SORT[ID]"] = "DESC";
      }

      if (entity == "banners") {
        (params["params"]["ENTITY"] = "pages"),
          (params["params"]["FILTER[SECTION]"] = "13");
      }
      let { data } = await this.axios.get(
        $baseURL + "/rest/1/1szw54c9zzx4ab1d/entity.item.get?",
        params
      );

      return data.result;
    },
    getUserField: function(iblock, id) {
      let res = [];
      let params = {
        params: {
          IBLOCK: iblock,
          ID: id
        }
      };
      this.axios
        .get($baseURL + "/rest-custom/userfield.php", params)
        .then(response => {
          res.push(response.data);
        });
      return res;
    },
    getSeo: function() {
      let path = this.$route.path;
      if (path == "/") {
        path = "main";
      }
      if (Object.keys(this.$route.params).length != 0) {
        if (this.$route.params["id"] !== undefined) {
          path = this.$route.params["id"];
        }
      }

      path = path.replace(/(\\|\/)/g, "");
      let res = [];
      let params = {
        params: {
          CODE: path
        }
      };

      this.axios
        .get($baseURL + "/rest-custom/seoget.php", params)
        .then(response => {
          this.$root.titleMeta = response.data["ELEMENT_META_TITLE"];
          this.$root.descriptionMeta =
            response.data["ELEMENT_META_DESCRIPTION"];
          res.push(response.data);
        });
      return res;
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
