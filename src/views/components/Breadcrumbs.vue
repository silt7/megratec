<template>
    <nav>
        <ul itemscope itemtype="https://schema.org/BreadcrumbList">
            <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            >
            <router-link to="/" title="Главная" itemprop="item">
                <span itemprop="name">Главная</span>
                <meta itemprop="position" content="0" />
            </router-link>
            </li>
            <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
            v-if="subPath[0]"
            >
            <router-link :to="subPath[0]['path']" itemprop="item">
                <span itemprop="name"> {{ subPath[0]["name"] }} </span>
                <meta itemprop="position" content="1" />
            </router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
  data() {
    return {
      subPath: []
    };
  },
  mounted() {
    if (this.$route.params.id != undefined) {
      let uri = this.$route.path.split("/");
      this.subPath = this.$router.options.routes.filter(function(item) {
        return item.path == `/${uri[1]}s`;
      });
    }
  }
};
</script>
<style scoped>
nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  width: fit-content;
}
ul {
  padding-left: 0;
  margin: 0;
}
ul li {
  display: inline; /* Отображать как строчный элемент */
  margin-right: 5px; /* Отступ слева */
  padding: 3px; /* Поля вокруг текста */
}
ul li a {
  color: #fff !important;
}
ul li:not(:first-child) a::before {
  content: "•";
  padding-right: 7px;
}
</style>
