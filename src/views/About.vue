<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout md-alignment-center">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title" style="text-align:center">О нас</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-contacts">
          <div class="container">
              <p>
                  Компания МЕГРАТЕК (Megratec - Mentor Graphics Technologies) зарегистрирована в марте 2001 года и имеет статус официального представителя компании Mentor Graphics с правом распространения всего спектра продукции Mentor Graphics на рынке России и СНГ. Персонал компании имеет двадцатилетний опыт работы с программным обеспечением Mentor Graphics.
              </p>
              <p>
                  Компания Mentor Graphics, являющаяся одним из мировых лидеров в области разработки и распространения средств автоматизации проектирования электронных систем и программного обеспечения, была основана в 1981 году, насчитывает около 4500 сотрудников и имеет годовой оборот более 1200 млн. долларов.
              </p>
              <p>
                  Приоритетными направлениями развития средств проектирования, поставляемых Mentor Graphics, являются комплексные маршруты проектирования, функциональной и физической верификации систем, печатных плат и интегральных схем, в том числе HDL-проектирование FPGA и ASIC, проектирование встроенных программных систем, программно-аппаратная верификация, аппаратная эмуляция, тепловой и электромагнитный анализ, тестирование, тестопригодность и диагностика, формальная верификация и многое другое.
              </p>
              <p>
                  В функции компании МЕГРАТЕК входит маркетинг, продажа, техническая и административная поддержка и сопровождение программных продуктов Mentor Graphics. С этой целью создано два технических центра, специализирующихся, соответственно, в области средств проектирования систем и печатных плат и в области проектирования интегральных схем. Мы также имеем возможность осуществлять комплексные поставки программного обеспечения, электронных компонентов и аппаратных платформ любой конфигурации через своих партнеров.
              </p>
              <div class="md-layout">
                  <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto text-center">
                      <img src="@/assets/img/faces/avatar.jpg"
                           alt="Thumbnail Image"
                           class="img-raised rounded-circle"
                           width="60%"/>
                      <h4>Лохов Андрей Львович</h4>
                      Продажи и административная поддержка
                      lokhov@megratec.ru
                  </div>
              </div>
          </div>
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <form class="contact-form">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Name</label>
                      <md-input v-model="name" type="text"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Your Email</label>
                      <md-input v-model="email" type="email"></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field maxlength="5">
                  <label>Your Message</label>
                  <md-textarea v-model="message"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-primary">Send Message</md-button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/banner-bg.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
@media screen and (min-width: 960px) {
  .page-header  {
    height: 40vh;
  }
}

</style>
