<template>
  <div>
    <md-toolbar class="md-primary mainMenu">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-list>
            <md-list-item href="javascript:void(0)" v-on:click="openCategory">
              <md-icon>list</md-icon>
              <p style="font-size: 14px">ПРОДУКТЫ</p>
              <md-icon :style="{ transform: 'rotate(' + turn + 'turn)' }"
                >keyboard_arrow_down</md-icon
              >
            </md-list-item>
          </md-list>
        </div>
        <div class="md-toolbar-section-end" v-if="isShow">
          <md-button class="md-just-icon md-simple md-white md-toolbar-toggle">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </md-button>
          <div class="md-collapse">
            <md-list>
              <md-list-item>
                <router-link exact to="/dizayn-centr/">
                  <md-icon>memory</md-icon>
                  <p>Дизайн-центр</p>
                </router-link>
              </md-list-item>
              <md-list-item>
                <router-link exact to="/trainings/">
                  <md-icon>explore</md-icon>
                  <p>Тренинги</p>
                </router-link>
              </md-list-item>
              <md-list-item>
                <router-link exact to="/contacts/">
                  <md-icon>account_circle</md-icon>
                  <p>Контакты</p>
                </router-link>
              </md-list-item>
              <md-list-item>
                <router-link exact to="/about/">
                  <md-icon>settings</md-icon>
                  <p>О нас</p>
                </router-link>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </md-toolbar>
    <nav-tabs-card no-label tabs-plain id="tabs-menu">
      <template slot="content">
        <md-tabs
          class="md-secondary"
          md-alignment="left"
          :md-active-tab="'md-' + active"
        >
          <md-tab
            v-for="categ in category[0]"
            :key="categ.ID"
            :md-label="categ.NAME"
            :id="'md-' + categ.ID"
          >
            <div class="container" v-if="productsShow">
              <div class="md-layout md-gutter md-alignment-left">
                <router-link
                  class="md-layout-item md-size-20 md-small-size-100"
                  v-for="product in productsFiltr(categ.ID)"
                  :key="product.ID"
                  :to="'/product/' + product.CODE"
                >
                  <md-card class="product">
                    <img
                      v-if="product.PROPERTY_VALUES.icon != ''"
                      :src="product.PROPERTY_VALUES.icon"
                    />
                    <img v-else src="@/assets/img/icon/noimg.svg" />
                    <md-card-header-text>
                      <div class="md-title">{{ product.NAME }}</div>
                      <div class="sub-title">
                        {{ product.PREVIEW_TEXT }}
                      </div>
                      <div class="md-subhead">Подробнее</div>
                    </md-card-header-text>
                  </md-card>
                </router-link>
                <i
                  v-on:click="tabChanged('prev')"
                  class="material-icons tabChanged-left"
                  >keyboard_arrow_left</i
                >
                <i
                  v-on:click="tabChanged('next')"
                  class="material-icons tabChanged-right"
                  >keyboard_arrow_right</i
                >
              </div>
            </div>
          </md-tab>
        </md-tabs>
        <div class="md-layout text-center" v-if="isShow">
          <div class="md-layout-item md-size-33 mx-auto">
            <router-link exact to="/products/">
              <md-button class="md-primary all-products">Все</md-button>
            </router-link>
          </div>
        </div>
      </template>
    </nav-tabs-card>
  </div>
</template>

<script>
import { NavTabsCard } from "@/components";

export default {
  components: {
    NavTabsCard,
  },
  name: "index",
  data() {
    return {
      category: "N",
      products: [],
      productsShow: 1,
      clickCategory: 0,
      turn: 0,
      active: 10,
    };
  },
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
  },
  methods: {
    openCategory: function (event) {
      let parent = document.getElementById("tabs-menu");
      let tabsMenu = parent.querySelector(".md-tabs-navigation");
      if (this.clickCategory == 0) {
        tabsMenu.classList.add("activeTabs");
        this.clickCategory = 1;
        this.turn = 0.5;
        if(this.isShow == 0){
            this.productsShow = 1;
        }
      } else {
        tabsMenu.classList.remove("activeTabs");
        this.clickCategory = 0;
        this.turn = 0;

        if(this.isShow == 0){
            this.productsShow = 0;
        }
      }
    },
    tabChanged(direction) {
      let arr = [];
      let cat = this.category.slice();
      cat.shift().forEach((element) => {
        arr.push(element["ID"]);
      });

      let i = arr.indexOf(String(this.active));
      if (direction == "next") {
        if (arr[i + 1] === undefined) {
          this.active = arr[0];
        } else {
          this.active = arr[i + 1];
        }
      } else {
        if (arr[i - 1] === undefined) {
          this.active = arr.pop();
        } else {
          this.active = arr[i - 1];
        }
      }
    },
    productsFiltr(categ_id) {
      let result = [];
      if (categ_id == 10) {
        result = this.products.filter(
          (i) => i["PROPERTY_VALUES"]["VIEWMAIN"] == "Да"
        );
      } else {
        result = this.products.filter((i) => i["SECTION"] == categ_id);
      }
      return result;
    },
  },
  mounted() {
    this.category = this.getSection("products", 0);
    this.getItem("products", 0).then(data=>{
      this.products = data;
    })

    if(this.isShow == 0){
        this.productsShow = 0;
    }
  }
};
</script>
<style lang="scss">
.product {
  height: 200px;
  margin-left: 1%;
  box-shadow: 0 0 black !important;
  border: 1px solid #c5c5c5;
  .md-card-header {
    background: #4b8edb !important;
  }

  .md-title {
    color: #3d434b;
    font-size: 14pt !important;
  }

  img {
    width: 60px !important;
    height: 65px !important;
    margin: 15px;
  }
}

.product:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.md-layout-item:nth-child(2n + 1) .product {
  border-top: 10px solid #2e5790;
}

.md-layout-item:nth-child(2n) .product {
  border-top: 10px solid #4b8edb;
}

.md-toolbar {
  margin-bottom: 0 !important;
}

.all-products .md-button-content {
  margin: auto;
}

#tabs-menu {
  padding: 0 10px;
  .md-tabs-navigation {
    background: #4b8edb !important;
    box-shadow: 0 0 black;
    border-radius: 0;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.15s ease-out;
  }

  button {
    width: 30%;
    max-width: inherit !important;
  }

  .activeTabs {
    max-height: 500px;
    transition: max-height 0.7s ease-out;
  }
}
.tabChanged-left,
.tabChanged-right {
  position: absolute;
  font-size: 50px;
  cursor: pointer;
  color: #000;
  opacity: 0.5;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.tabChanged-left:hover,
.tabChanged-right:hover {
  opacity: 1;
}

.tabChanged-left {
  left: -70px;
}

.tabChanged-right {
  right: -70px;
}

@media screen and (max-width: 900px) {
  .mainMenu button,
  .tabChanged-left,
  .tabChanged-right {
    display: none;
  }
}

@media screen and (max-width: 1400px) {
  .tabChanged-left {
    left: -30px;
  }

  .tabChanged-right {
    right: -30px;
  }
}

@media screen and (max-width: 1255px) {
  .tabChanged-left,
  .tabChanged-right {
    display: none;
  }
}
</style>