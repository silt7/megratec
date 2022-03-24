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
              {{$root.dictionary.menu.products.title}}
            </a>
          </li>
          <li>
            <a href="/trainings/">
              {{$root.dictionary.menu.trainings.title}}
            </a>
          </li>
          <li>
            <a href="/contacts/">
              {{$root.dictionary.menu.contacts.title}}
            </a>
          </li>
          <li>
            <a href="/about/">
              {{$root.dictionary.menu.about.title}}
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
