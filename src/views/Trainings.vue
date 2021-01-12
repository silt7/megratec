<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Тренинги</h1>
            <h4>
              Схемы самотестирования логики и памяти, использование интерфейса
              JTAG, внедрение сканирующей логики на RTL уровне и многое другое.
            </h4>
            <br />
            <md-button href="" class="md-primary md-lg" target="_blank"
              ><i class="fas fa-play"></i> Смотреть видео</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-contacts">
        <div class="container">
          <h4 class="title">
            При приобретении ПО Mentor Graphics специалисты Megratec проводят
            обучение по следующим направлениям:
          </h4>
          <div class="blockquote">
            Разработка принципиальных схем и управление проектом в редакторе
            DxDesigner (маршрут Expedition)
          </div>
          <div class="blockquote">
            Разработка принципиальных схем и управление проектом в редакторе
            DxDesigner (маршрут PADS)
          </div>
          <div class="blockquote">
            Начальный курс проектирования топологии печатных плат в Expedition
            PCB (маршрут Expedition)
          </div>
          <div class="blockquote">
            Расширенный курс проектирования топологии в Expedition PCB (маршрут
            Expedition)
          </div>
          <div class="blockquote">
            Проектирование топологии печатных плат в PADS Layout (маршрут PADS)
          </div>
          <div class="blockquote">
            Трассировка печатных плат в PADS Router (маршрут PADS)
          </div>
          <div class="blockquote">
            Анализ целостности сигналов, перекрестных наводок и ЭМС c помощью
            пакета HyperLynx (маршруты Expedition и PADS)
          </div>
          <div class="blockquote">
            Анализ целостности сигналов, перекрестных наводок и ЭМС с помощью
            пакета ICX Explorer/ICX Verify (маршрут Expedition)
          </div>
          <div class="blockquote">
            Интеграция маршрутов проектирования печатных плат и ПЛИС с помощью
            пакета I/O Designer (маршруты Expedition и PADS)
          </div>
          <div class="blockquote">
            Разработка проекта ПЛИС в пакете HDL Designer
          </div>
          <div class="blockquote">
            Моделирование ПЛИС в пакете ModelSim
          </div>
          <div class="blockquote">
            Синтез ПЛИС в пакете Precision Synthesis
          </div>
          <div class="blockquote">
            Высокоуровневый синтез (С/C++ -> VHDL/Verilog) в пакете Catapult C
            Synthesis
          </div>
          <div class="blockquote">
            Комплексный маршрут проектирования ПЛИС - HDL Designer + ModelSim +
            Precision Synthesis
          </div>
          <div class="blockquote">
            Аналоговое моделирование (Spice) в пакете HyperLynx Analog
          </div>
          <div class="blockquote">
            Смешанное аналого-цифровое моделирование в пакете SystemVision
          </div>

          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Записаться</h2>
              <h4 class="text-center description"></h4>
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
                  <div class="md-layout-item md-size-50 mx-auto text-center">
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

.blockquote {
  padding: 5px 20px;
  margin: 0 0 20px;
  border-left: 5px solid #2e5790;
}

@media screen and (min-width: 900px) {
  .page-header {
    height: 70vh;
  }
}
@media screen and (max-width: 900px) {
  .section {
    padding: 10px 0;
  }
}
</style>
