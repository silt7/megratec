<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    :src="img"
                    alt="Circle Image"
                    class="img-raised rounded img-fluid"
                  />
                </div>
                <div class="name">
                  <h3 class="title">Veloce</h3>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-dribbble"
                    ><i class="fab fa-dribbble"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-twitter"
                    ><i class="fab fa-twitter"></i
                  ></md-button>
                  <md-button
                    href="javascript:void(0)"
                    class="md-just-icon md-simple md-pinterest"
                    ><i class="fab fa-pinterest"></i
                  ></md-button>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <tabs
              :tab-name="['Русский', 'English']"
              plain
              nav-pills
              color-button="primary"
            >
              <!-- here you can add your content for tab-content -->
            <template slot="tab-pane-1">
                <p><b>Veloce</b> – это система аппаратной эмуляции, которая является одним из краеугольных камней
                всей платформы функциональной верификации сложных систем на кристалле (SoC) компании Mentor A Siemens Business.
                Система имеет масштабируемую архитектуру и может обслуживать тестируемые объекты емкостью до 15 млрд. вентилей,
                что делает ее безусловным лидером среди аналогичных систем от других поставщиков.</p>
                <p>Архитектура Veloce базируется на запатентованном специализированном ASIC (Crystal), который перепрограммируется
                для компиляции RTL кода тестируемого объекта с учетом межсоединений на одном блоке (плате)
                и между блоками для обмена данными между чипами ASIC.</p>
                <p>Специализированная операционная система управляет всей средой верификации,
                которая включает также специальные приложения и программно-аппаратные решения для подключения 
                физических и виртуальных периферийных устройств. В результате пользователь получает гибкую настраиваемую систему,
                которая позволяет решать задачу функциональной верификации SoC практически неограниченного объема со скоростью на
                несколько порядков превышающей скорость традиционного моделирования, обеспечивая при этом полную наблюдаемость всех
                внутренних и внешних логических сигналов тестируемого объекта для эффективного процесса отладки.</p>
                <p>Операционная система Veloce обеспечивает гибкое управление ресурсами в процессе эмуляции, которое
                 позволяет в процессе работы с одним тестируемым объектом, добавлять новые варианты тестирования,
                 включая, например, тестирование встроенного программного обеспечения SoC одновременно с аппаратным
                 тестированием. Дополнительно операционная система позволяет использовать Veloce в мнопользовательском режиме,
                 поддерживая одновременный запуск нескольких сеансов эмуляции не связанных между собой тестируемых объектов.</p>

                <h4 class="title">Основные характеристики и преимущества</h4>
                <ul>
                    <li>Использование специализированного программируемого ASIC и масштабируемой аппаратной архитектуры обеспечивает эмуляцию проектов в диапазоне от 40 млн. до 15 млрд. вентилей</li>
                    <li>Эмуляция отдельных блоков, модулей и всего тестируемого SoC со скоростью на несколько порядков превышающей скорость моделирования</li>
                    <li>
                        Возможность прогона за короткое время гигантского объема тестовых векторов, включая реальное встроенное программное обеспечение,
                        позволяет обнаружить сложные “скрытые” ошибки, которые крайне трудно выявить традиционными методами верификации.
                        Это дает возможность исключить повторные запуски реализации проекта в кремнии при обнаружении ошибок на поздних
                        этапах тестирования, например, в условиях лабораторного макетирования
                    </li>
                    <li>Исчерпывающая и гибкая среда отладки, близкая по своим параметрам к среде отладки при моделировании</li>
                    <li>Поддержка механизма ассертов и анализа полноты покрытия, аналогичная программному моделированию</li>
                    <li>
                        Поддержка многопользовательского режима за счет стандартного механизма управления очередями
                        пользователей в том числе обслуживание запросов в удаленном режиме
                    </li>
                    <li>
                        Специально написанные для Veloce приложения позволяют решать весь спектр задач
                        функциональной верификации для самых сложных современных проектов SoC.
                    </li>
                </ul>
            </template>
            <template slot="tab-pane-2">
                <p>
                    The Veloce® Strato™ platform is engineered to scale to support 15 billion
                    gate designs and establishes a roadmap into the next decade capable of verifying the largest chips ever designed.
                </p>

                <p>
                    Because the Veloce Strato platform is fully scalable, a user can obtain what they need now in terms of capacity,
                    and increase capacity along the way as their design sizes grow. In addition, the software that runs on the
                    Veloce Strato platform is fully scalable. All the applications built for previous generation Veloce platforms
                    are fully reusable on Veloce Strato.
                </p>

                <p>
                    The Veloce® Emulation Platform dramatically reduces risk in the verification of today’s complex SoCs and is a
                    core technology in the Mentor Enterprise Verification Platform™ (EVP).
                </p>
                <br>
                <h4 class="title">
                    The Veloce Emulation Platform advantage
                </h4>
                <p>The Veloce emulation platform combines a unique hardware architecture,
                    innovative operating system, specialized applications, and versatile peripheral solutions to deliver
                    a comprehensive and flexible high-speed, high-capacity verification environment. Veloce accelerates
                    simulation and provides uncompromised visibility and debug.
                </p>
                <p>Its innovative Veloce operating system adds software programmability and resource management,
                    making it easier to add new use models that extend the value of the emulator.
                    The interplay of software innovation on powerful, flexible hardware makes emulation a more effective 
                    verification choice for more companies.</p>
                <ul>
                    <li>State-of-the-art emulation SoC and scalable hardware configurations for verifying designs from
                        40 million to 15 billion gates.</li>
                    <li>Acceleration of block, module, and full SoC regression test runs is many orders of magnitude faster than simulation</li>
                    <li>Eliminates most silicon respins by running billions of cycles to find hard-to-find bugs missed by traditional methods</li>
                    <li>Comprehensive and versatile simulation-like debug environment for ease-of-use</li>
                    <li>Full system integration using real-world stimulus and software for testbenches before first silicon is available</li>
                    <li>Simulation-like use model for assertion and coverage based verification</li>
                    <li>Standard queuing support for optimal utilization of emulation resources among various teams and sites</li>
                    <li>Veloce Apps leverage the proven, robust emulator capabilities to solve specific verification and validation challenges.</li>
                </ul>
            </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ]
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/techno-animate-bg.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/products/stratomfront-97AE157A.jpg")
    }
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
</style>
