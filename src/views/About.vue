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
            <div class="container text-center">
                <h5>
                    Компания МЕГРАТЕК (Megratec - Mentor Graphics Technologies) зарегистрирована в марте 2001 года и имеет статус официального представителя компании Mentor Graphics с правом распространения всего спектра продукции Mentor Graphics на рынке России и СНГ. Персонал компании имеет двадцатилетний опыт работы с программным обеспечением Mentor Graphics.
                </h5>
                <div class="md-layout support">
                    <h2 class="title" style="margin: 10px auto;margin-top: 70px">Наша поддержка</h2>
                    <h5 style="margin-bottom: 50px">
                        В функции компании МЕГРАТЕК входит маркетинг, продажа, техническая и административная поддержка и сопровождение программных продуктов Mentor Graphics. С этой целью создано два технических центра, специализирующихся, соответственно, в области средств проектирования систем и печатных плат и в области проектирования интегральных схем.
                    </h5>
                    <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto text-center">
                        <img src="@/assets/img/about/1.svg" />
                        <h4 class="title">Лохов Андрей Львович</h4>
                        Продажи и администр. поддержка
                        <span class="text-danger">lokhov@megratec.ru</span>
                    </div>
                    <div class="md-layout-item md-size-25 md-xsmall-size-100 ml-auto text-center">
                        <img src="@/assets/img/about/2.svg" />
                        <h4 class="title">Филиппов Александр Анатольевич</h4>
                        Техническая поддержка, консалтинг, проекты
                        <span class="text-danger">fill@megratec.ru</span>
                    </div>
                    <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto text-center">
                        <img src="@/assets/img/about/3.svg" />
                        <h4 class="title">Селиванов Иван Витальевич</h4>
                        Цифровое и аналого-цифровое моделирование
                        <span class="text-danger">selivanov@megratec.ru</span>
                    </div>
                    <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto text-center">
                        <img src="@/assets/img/about/4.svg" />
                        <h4 class="title">Селиванов Иван Витальевич</h4>
                        Печатные платы, синтез C, верификация, DFT
                        <span class="text-danger">selivanov@megratec.ru</span>
                    </div>
                </div>
            </div>
            <div class="container" style="padding: 70px 15px">
                <h2 class="text-center title">Партнёры</h2>
                <h5>Мы также имеем возможность осуществлять комплексные поставки программного обеспечения, электронных компонентов и аппаратных платформ любой конфигурации через своих партнеров.</h5>
                <div class="md-layout">
                    <div class="md-layout-item md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/1.png" />
                        </a>
                    </div>
                    <div class="md-layout-item  md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/2.png" />
                        </a>
                    </div>
                    <div class="md-layout-item  md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/3.png" />
                        </a>
                    </div>
                    <div class="md-layout-item  md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/4.png" />
                        </a>
                    </div>
                    <div class="md-layout-item  md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/5.png" />
                        </a>
                    </div>
                    <div class="md-layout-item  md-small-size-33">
                        <a href="#" target="_blank">
                            <img src="@/assets/img/partner/6.png" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="container">
                <h2 class="title" style="margin: 10px auto">Оставить заявку</h2>
                <div class="md-layout">
                    <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
                        <form class="contact-form">
                            <div class="md-layout">
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Имя</label>
                                        <md-input v-model="name" type="text"></md-input>
                                    </md-field>
                                </div>
                                <div class="md-layout-item md-size-50">
                                    <md-field>
                                        <label>Email</label>
                                        <md-input v-model="email" type="email"></md-input>
                                    </md-field>
                                </div>
                            </div>
                            <md-field maxlength="5">
                                <label>Сообщение</label>
                                <md-textarea v-model="message"></md-textarea>
                            </md-field>
                            <div class="md-layout">
                                <div class="md-layout-item md-size-33 mx-auto text-center">
                                    <md-button class="md-primary">Отправить</md-button>
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
@media screen and (max-width: 900px) {
  .page-header  {
    height: 30vh;
  }
  .support .md-layout-item{
      margin-top: 30px;
  }
}
</style>
