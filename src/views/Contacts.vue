<template>
  <div class="wrapper">
    <parallax class="section page-header">
      <div class="header-background"></div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A9d6d0e5d7de6282289225ecd34d2c7e141d20e4b775ca761992f0a5b77ade574&amp;source=constructor"
        width="100%"
        style="height:45vh"
        frameborder="0"
      ></iframe>
    </parallax>
    <div class="main main-raised">
      <div class="section section-contacts">
        <div class="container">
            <div class="md-layout">
                <div class="md-layout-item md-size-50 md-small-size-100 ml-auto block-1">
                    <h2 class="title" style="margin-top:0">
                        Отправить нам сообщение
                    </h2>
                    <form class="contact-form">
                        <md-field>
                            <label>Имя</label>
                            <md-input v-model="name" type="text"></md-input>
                        </md-field>
                        <md-field>
                            <label>Email</label>
                            <md-input v-model="email" type="email"></md-input>
                        </md-field>
                        <md-field>
                            <label>Телефон</label>
                            <md-input v-model="phone" type="phone"></md-input>
                        </md-field>
                        <md-field maxlength="5">
                            <label>Комментарий</label>
                            <md-textarea v-model="message"></md-textarea>
                        </md-field>
                        <p v-if="messOk" class="text-success">Отправлено</p>
                        <p v-if="messErr" class="text-danger">Ошибка при отправке</p>
                        <div class="md-layout">
                            <div class="md-layout-item md-size-33 mx-auto text-center">
                                <md-button class="md-primary" @click="sendForm()">Отправить</md-button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="md-layout-item md-size-33 md-small-size-100 ml-auto block-2">
                    <div class="md-layout contacts">
                        <div class="md-layout-item md-size-20 md-small-size-100 ml-auto">
                            <i class="md-icon md-icon-font md-theme-default">pin_drop</i>
                        </div>
                        <div class="md-layout-item md-size-80 md-small-size-100 ml-auto">
                            <h4 class="title">Адрес</h4>
                            <p class="muted-text" v-if="contacts[0]" v-html="contacts[0].UF_ADDRES"></p>
                        </div>
                    </div>
                    <div class="md-layout contacts">
                        <div class="md-layout-item md-size-20 md-small-size-100 ml-auto">
                            <i class="md-icon md-icon-font md-theme-default">phone</i>
                        </div>
                        <div class="md-layout-item md-size-80 md-small-size-100 ml-auto">
                            <h4 class="title">Контактная информация</h4>
                            <p class="muted-text" v-if="contacts[0]" v-html="contacts[0].UF_CONTACTS"></p>
                        </div>
                    </div>
                    <div class="md-layout contacts">
                        <div class="md-layout-item md-size-20 md-small-size-100 ml-auto">
                            <i class="md-icon md-icon-font md-theme-default">contacts</i>
                        </div>
                        <div class="md-layout-item md-size-80 md-small-size-100 ml-auto">
                            <h4 class="title">Техническая поддержка</h4>
                            <p class="muted-text" v-if="contacts[0]" v-html="contacts[0].UF_SUPPORT"></p>
                            <!--<h6>Продажи и административная поддержка:</h6>
                <p class="muted-text">
                    Лохов Андрей Львович<br>
                    lokhov@megratec.ru
                </p>
                <h6>Техническая поддержка, консалтинг, проекты:</h6>
                <p class="muted-text">
                    Филиппов Александр Анатольевич<br>
                    fill@megratec.ru
                </p>
                <h6>Цифровое и аналого-цифровое моделирование, синтез VHDL, верификация:</h6>
                <p class="muted-text">
                    Селиванов Иван Витальевич<br>
                    selivanov@megratec.ru
                </p>
                <h6>Печатные платы, синтез C, верификация, DFT:</h6>
                <p class="muted-text">
                    Селиванов Иван Витальевич<br>
                    selivanov@megratec.ru
                </p>-->
                        </div>
                    </div>
                </div>
                <div v-if="page[0]" v-html="page[0][0].DETAIL_TEXT"></div>
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
      message: null,
      phone: null,
      page: '',
      contacts: [],
      messOk: false,
      messErr: false
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
      this.contacts = this.getUserField(5, 12);
      this.page = this.getItem("pages", 59);
  },
  methods:{
      sendForm() {
        let params = {
            params: {
                form: 'callme',
                name: this.name,
                phone: this.phone,
                email: this.email,
                comment: this.message,
            }
        };
        this.axios
            .get(this.$root.baseURL + "/rest-custom/form/", params)
            .then(response => {
                if (response.data == 'success') {
                    this.messErr = false
                    this.messOk = true
                } else {
                    this.messOk = false
                    this.messErr = true
                }
            })
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
  .page-header {
    height: 45vh;
  }
}
.section-contacts i {
  color: #2e5790 !important;
  font-size: 36px !important;
}
.section-contacts .title {
  margin-top: 0px;
  margin-bottom: 10px;
}
.section-contacts .contacts {
  margin-top: 15px;
  margin-bottom: 40px;
}
.section-contacts h6 {
  margin-bottom: 0px;
}
.header-background {
  height: 100px;
  background: #2e5790;
  width: 100%;
  opacity: 0.3;
  position: absolute;
  top: 0;
}
.block-3 {
  margin-top: 50px;
}
@media screen and (max-width: 900px) {
  .page-header {
    height: 300px;
  }
  .block-1 {
    order: 3;
  }
  .block-2 {
    order: 1;
  }
  .block-3 {
    order: 2;
  }
  .header-background {
    height: 80px;
  }
  .block-3 {
    margin-top: 0;
  }
  .block-3 .md-layout-item {
    margin-top: 20px;
  }
  .block-1 {
    margin-top: 50px;
  }
  .block-2 .title {
    margin-top: 10px;
  }
}
</style>
