<template>
  <div class="section">
    <div class="container">
      <nav>
        <ul itemscope itemtype="https://schema.org/BreadcrumbList">
          <li
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <router-link to="/" title="Главная" itemprop="item">
              <span itemprop="name"><md-icon>home</md-icon>Главная</span>
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
          <li
            v-if="title"
          >
            <span class="title" >
              <span > {{ title }} </span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    title:String
  },
  data() {
    return {
      subPath: [],
    };
  },
  mounted() {
    if (this.$route.params.id != undefined) {
      let uri = this.$route.path.split("/");
      this.subPath = this.$router.options.routes.filter(function (item) {
        if (uri[1] == "news") {
          uri[1] = "new";
        }
        return item.path == `/${uri[1]}s`;
      });
    }
  },
};
</script>
<style scoped>
.section {
  padding: 0;
}
.container {
  position: relative;
}
.container i {
  font-size: 18px !important;
  padding-bottom: 3px;
}
nav {
  position: absolute;
  top: 10px;
  left: 10px;
  width: fit-content;
  z-index: 100;
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
  color: #000 !important;
}
ul li:not(:first-child) a::before, ul li span.title::before{
  content: "/";
  padding-right: 7px;
}
</style>
