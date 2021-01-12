<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="/products/">
              Продукты
            </a>
          </li>
          <li>
            <a href="/trainings/">
              Тренинги
            </a>
          </li>
          <li>
            <a href="/contacts/">
              Контакты
            </a>
          </li>
          <li>
            <a href="/about/">
              О нас
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">&copy; 2020 - {{ year }}</div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
