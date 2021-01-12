<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">Продукты</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <md-list class="filtr">
            <li class="md-list-item">
              <a
                href="javascript:void(0)"
                class="md-list-item-router md-list-item-container md-button-clean dropdown"
              >
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-primary md-simple dropdown-toggle text-primary"
                      data-toggle="dropdown"
                    >
                      <i class="md-icon md-icon-font md-theme-default">list</i>
                      <p style="font-size: 14px;">Фильтр</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-with-icons">
                      <li>
                        <a v-on:click="category = getSection('products', 0)">
                          <i class="material-icons">view_day</i>
                          <p>Все</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 3)">
                          <i class="material-icons">account_circle</i>
                          <p>Функциональная верификация</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 5)">
                          <i class="material-icons">account_circle</i>
                          <p>Физическая верификация ИС</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 2)">
                          <i class="material-icons">account_circle</i>
                          <p>Системное проектирование</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 4)">
                          <i class="material-icons">account_circle</i>
                          <p>Физическое проектирование ИС</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 6)">
                          <i class="material-icons">account_circle</i>
                          <p>Подготовка производства ИС</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 7)">
                          <i class="material-icons">account_circle</i>
                          <p>Тестирование и диагностика ИС</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 8)">
                          <i class="material-icons">account_circle</i>
                          <p>Проектирование FPGA</p>
                        </a>
                      </li>
                      <li>
                        <a v-on:click="category = getSection('products', 9)">
                          <i class="material-icons">account_circle</i>
                          <p>Проектирование систем на печатных платах</p>
                        </a>
                      </li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>
          </md-list>
          <div v-for="item in category[0]" :key="item.ID" class="catalog">
            <h2>{{ item.NAME }}</h2>
            <div class="container">
              <div class="md-layout md-gutter md-alignment-left">
                <router-link
                  class="md-layout-item md-size-20 md-small-size-100"
                  v-for="product in products[0]"
                  :key="product.ID"
                  :to="'/product/' + product.ID"
                  v-if="product.SECTION == item.ID"
                >
                  <md-card class="product text-center">
                    <img
                      v-if="product.PROPERTY_VALUES.icon != ''"
                      :src="product.PROPERTY_VALUES.icon"
                    />
                    <img v-else src="@/assets/img/icon/noimg.svg" />
                    <md-card-header-text>
                      <div class="md-title">{{ product.NAME }}</div>
                      <div class="md-subhead">Подробнее</div>
                    </md-card-header-text>
                  </md-card>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  bodyClass: "profile-page",
  data() {
    return {
      category: [],
      products: []
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
    let categoryId = 0;

    if (typeof to.params.filtr !== "undefined") {
      categoryId = to.params.filtr;
    }

    next(vm => {
      (vm.products = vm.getItem("products", 0)),
        (vm.category = vm.getSection("products", categoryId));
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
.dropdown-menu li a:hover,
.dropdown-menu li a:focus,
.dropdown-menu li a:active {
  background-color: #2e5790 !important;
}
.filtr {
  width: 140px;
  position: absolute;
  right: 15px;
}
@media screen and (max-width: 900px) {
  .filtr {
    left: 0;
    right: 0;
  }
  .catalog {
    margin-top: 40px;
  }
  h2 {
    font-size: 2.1rem;
  }
}
</style>
