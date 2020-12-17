// =========================================================
// * Vue Material Kit - v1.2.2
// =========================================================
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'

import MaterialKit from "./plugins/material-kit";

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.use(VueAxios, axios);

const NavbarStore = {
  showNavbar: false
};

const $baseURL = 'https://megratec-dev.ru';

Vue.mixin({
    data() {
    return {
        NavbarStore
    };
    },
    methods: {
        getSection: function (entity, categoryId) {
            let res = [];
            let params = {
                params: {
                    ENTITY: entity,
                    'SORT[SORT]': 'ASC',
                    'FILTER[ACTIVE]': 'Y'
                }
            };
            if (categoryId > 0) {
                params['params']['FILTER[ID]'] = categoryId;
            } else if (categoryId == -1) {
                params['params']['FILTER[ID]'] = 3;
            }
            axios.get($baseURL + '/rest/1/1szw54c9zzx4ab1d/entity.section.get?', params).then((response) => {
                res.push(response.data.result);
            });
            return res;
        },
        getItem: function (entity, productId) {
            let res = [];
            let params = {
                params: {
                    ENTITY: entity,
                    'SORT[SORT]': 'ASC',
                    'FILTER[ACTIVE]': 'Y'
                }
            };
            if (productId > 0) {
                params['params']['FILTER[ID]'] = productId;
            } else if (productId == -1) {
                params['params']['FILTER[PROPERTY_VIEWMAIN]'] = 1;
            }
            this.axios.get($baseURL + '/rest/1/1szw54c9zzx4ab1d/entity.item.get?', params).then((response) => {
                res.push(response.data.result);

                let categoryName = [];
                if (productId > 0) {
                    categoryName = this.getSection(entity, response.data.result[0]['SECTION']);
                    res.push(categoryName);
                }
            });
            return res;
        }
    },
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
