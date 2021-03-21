// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
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
    getItem: function(entity, itemId) {
      let res = [];
      let params = {
        params: {
          ENTITY: entity,
          "SORT[SORT]": "ASC",
          "FILTER[ACTIVE]": "Y"
        }
      };
      if (itemId > 0) {
        params["params"]["FILTER[ID]"] = itemId;
      } else if (itemId == -1) {
        params["params"]["FILTER[PROPERTY_VIEWMAIN]"] = 1;
      }
      if (entity == 'news') {
          delete params["params"]["SORT[SORT]"];
          params["params"]["SORT[ID]"] = 'DESC';
      }
      this.axios
        .get($baseURL + "/rest/1/1szw54c9zzx4ab1d/entity.item.get?", params)
        .then(response => {
          res.push(response.data.result);

          let categoryName = [];
            if (itemId > 0) {
            categoryName = this.getSection(
              entity,
              response.data.result[0]["SECTION"]
            );
            res.push(categoryName);
          }
        });
      return res;
    },
    getUserField: function (iblock, id) {
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
