<template>
  <div class="container">
    <h2 class="title" style="margin: 10px auto">{{$root.dictionary.title.application}}</h2>
    <div class="md-layout">
      <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
        <form class="contact-form">
          <div class="md-layout">
            <div
              class="md-layout-item md-size-50"
              v-if="fields.includes('Имя')"
            >
              <md-field :class="className">
                <label>{{$root.dictionary.static.name}}</label>
                <md-input v-model="name" type="text" required></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-size-50"
              v-if="fields.includes('Компания')"
            >
              <md-field :class="classCompany">
                <label>{{$root.dictionary.static.company}}</label>
                <md-input v-model="company" type="text" required></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-size-50"
              v-if="fields.includes('Телефон')"
            >
              <md-field :class="classPhone">
                <label>{{$root.dictionary.static.phone}}</label>
                <md-input v-model="phone" type="number" required></md-input>
              </md-field>
            </div>
            <div
              class="md-layout-item md-size-50"
              v-if="fields.includes('Почта')"
            >
              <md-field :class="classEmail">
                <label>{{$root.dictionary.static.email}}</label>
                <md-input v-model="email" type="email" required></md-input>
              </md-field>
            </div>
          </div>
          <md-field maxlength="5">
            <label>{{$root.dictionary.static.message}}</label>
            <md-textarea v-model="message"></md-textarea>
          </md-field>
          <p v-if="messOk" class="text-success">{{$root.dictionary.static.sent}}</p>
          <p v-if="messErr" class="text-danger">{{$root.dictionary.static.errorsent}}</p>
          <div class="md-layout" style="margin-bottom:15px">
            <div class="md-layout-item md-size-33 mx-auto text-center">
              <md-button
                class="md-primary"
                :disabled="messOk"
                @click="sendForm()"
                >{{$root.dictionary.button.send}}</md-button
              >
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fields: Array
  },
  data() {
    return {
      name: null,
      phone: null,
      company: null,
      email: null,
      message: null,
      page: "",
      messOk: false,
      messErr: false,
      nameError: false,
      companyError: false,
      phoneError: false,
      emailError: false,
    };
  },
  computed: {
    className () {
      return {
        'md-invalid': this.nameError
      }
    },
    classCompany () {
      return {
        'md-invalid': this.companyError
      }
    },
    classPhone () {
      return {
        'md-invalid': this.phoneError
      }
    },
    classEmail () {
      return {
        'md-invalid': this.emailError
      }
    }
  },
  methods: {
    sendForm() {  
      !this.name ? this.nameError = 1 : this.nameError = 0
      !this.company ? this.companyError = 1 : this.companyError = 0
      !this.phone ? this.phoneError = 1 : this.phoneError = 0
      !this.email ? this.emailError = 1 : this.emailError = 0

      let params = {
        params: {
          form: "callme",
          name: this.name,
          company: this.company,
          phone: this.phone,
          email: this.email,
          comment: this.message,
          source: this.$route.path
        }
      };
      this.axios
        .get(this.$root.baseURL + "/rest-custom/form/", params)
        .then(response => {
          if (response.data == "success") {
            this.messErr = false;
            this.messOk = true;
          } else {
            this.messOk = false;
            this.messErr = true;
          }
        });
    }
  }
};
</script>
<style scoped>
.md-field.md-theme-default.md-invalid label {
    color: #ff1744 !important;
}
</style>
