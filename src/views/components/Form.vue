<template>
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
          <p v-if="messOk" class="text-success">Отправлено</p>
          <p v-if="messErr" class="text-danger">Ошибка при отправке</p>
          <div class="md-layout">
            <div class="md-layout-item md-size-33 mx-auto text-center">
              <md-button
                class="md-primary"
                :disabled="messOk"
                @click="sendForm()"
                >Отправить</md-button
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
  data() {
    return {
      name: null,
      email: null,
      message: null,
      page: "",
      messOk: false,
      messErr: false
    };
  },
  methods: {
    sendForm() {
      let params = {
        params: {
          form: "callme",
          name: this.name,
          phone: this.phone,
          email: this.email,
          comment: this.message
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
