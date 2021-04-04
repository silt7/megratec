// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
import "babel-polyfill";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(VueAxios, axios);

const NavbarStore = {
  showNavbar: false
};

const $baseURL = "https://megratec.ru";

Vue.mixin({
  data() {
    return {
      NavbarStore,
      baseURL: $baseURL
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
        params["params"]["ENTITY"] = "pages",
        params["params"]["FILTER[SECTION]"] = "13"
      }

      let { data } = await this.axios.get($baseURL + "/rest/1/1szw54c9zzx4ab1d/entity.item.get?", params);
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
    }
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
