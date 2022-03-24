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
import { CollapsePlugin } from "bootstrap-vue";
import Breadcrumbs from "./views/components/Breadcrumbs.vue";
import VueJsonLD from "vue-jsonld";
import LangRus from "@/assets/lang/rus.json";
import LangEng from "@/assets/lang/eng.json";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(VueAxios, axios);
Vue.use(CollapsePlugin);
Vue.use(VueJsonLD);
Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

Vue.component("Breadcrumbs", Breadcrumbs);
const NavbarStore = {
  showNavbar: false,
};

const $baseURL = "https://megratec.ru";

Vue.mixin({
  data() {
    return {
      NavbarStore,
      baseURL: $baseURL,
      titleMeta: "Megratec",
      descriptionMeta: "Megratec",
      contentPage: "",
      language: this.$route.path.includes("/eng") ? "eng" : "rus",
      dictionary: LangRus,
    };
  },
  metaInfo() {
    return {
      title: this.$root.titleMeta,
      meta: [{ name: "description", content: this.$root.descriptionMeta }],
    };
  },
  methods: {
    async getCatalog() {
      let params = {
        params: {
          lang: this.$root.language,
        },
      };
      let { data } = await this.axios.get(
        $baseURL + "/rest-custom/getCatalog.php",
        params
      );

      return data;
    },
    async getItem(entity, code) {
      let params = {
        params: {
          ENTITY: entity,
          CODE: code,
          lang: this.$root.language,
        },
      };

      let { data } = await this.axios.get(
        $baseURL + "/rest-custom/getItem.php",
        params
      );

      return data;
    },
    getUserField: function(iblock, id) {
      let res = [];
      let params = {
        params: {
          IBLOCK: iblock,
          ID: id,
        },
      };
      this.axios
        .get($baseURL + "/rest-custom/userfield.php", params)
        .then((response) => {
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
          CODE: path,
        },
      };

      this.axios
        .get($baseURL + "/rest-custom/seoget.php", params)
        .then((response) => {
          this.$root.titleMeta = response.data["ELEMENT_META_TITLE"];
          this.$root.descriptionMeta =
            response.data["ELEMENT_META_DESCRIPTION"];
        });
    },
    changeLang(lang) {
      this.$root.language = lang;

      if (this.$root.language == "rus") {
        this.$root.dictionary = LangRus;
      } else {
        this.$root.dictionary = LangEng;
      }

      let uri = this.$route.name;
      uri = uri.replace("-eng", "");
      if (lang == "eng") {
        uri = uri + "-eng";
      }
      this.$router.push({ name: uri }).catch((err) => {});
    },
    loadContantsPage() {
      let code = "";
      if (this.$route.path.slice(0, 5) == "/eng/") {
        code = this.$route.path.slice(5);
      } else {
        code = this.$route.path;
      }
      this.getItem("pages", code.replace(/(\\|\/)/g, "")).then((data) => {
        this.contentPage = data[0];
      });
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
