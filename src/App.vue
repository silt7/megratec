<template>
  <div id="material-kit">
    <div :class="{ 'nav-open': NavbarStore.showNavbar }">
      <router-view name="header" />
      <div>
        <transition name="fade">
          <router-view />
        </transition>
      </div>
      <router-view name="footer" />
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/*********** Landing Page **************/
.page-header .md-layout-item {
  max-width: 100% !important;
  flex: 1 !important;
}
.article-content h2 {
  font-size: 32px;
  font-weight: 600;
  font-family: Roboto Slab, serif;
  margin: 16px 0;
}
.article-content h3 {
  font-size: 22px;
  font-weight: 600;
  margin: 0 0 16px;
}
.article-content p,
.article-content ul {
  font-size: 16px;
  line-height: 1.5;
  margin: 0 0 16px;
}
.article-content ul {
  padding: 0 0 0 25px;
}
.width-img {
  display: flex;
  justify-content: space-between;
}
.width-img .img {
  margin-bottom: 32px;
}
.width-img.left {
  align-items: flex-start;
}
.width-img.left .img {
  min-width: 280px;
  margin-right: 32px;
  border-radius: 10px;
  position: relative;
}
.width-img.left .img:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(46 87 144 / 10%);
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: -1;
}
.width-img.left .img img {
  border-radius: 10px;
}
.width-img.right {
  align-items: center;
}
.width-img.right .img {
  margin-left: 32px;
  flex-shrink: 0;
}
.text-banner {
  color: #fff;
  font-family: Roboto Slab, serif;
  text-align: center;
  background-color: #2e5790;
  padding: 48px 0 32px;
  margin: 32px 0;
}
.text-banner p {
  font-size: 28px;
}
.questa-benefits {
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
}
.questa-benefits > div {
  flex-basis: 32%;
  padding: 16px;
  margin: 0 0 32px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 15%);
  position: relative;
}
.questa-benefits > div:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgb(46 87 144 / 10%);
  border-radius: 10px;
  position: absolute;
  left: 10px;
  top: 10px;
  z-index: -1;
}
@media screen and (max-width: 1200px) {
  .width-img.right {
    align-items: flex-start;
  }
}
@media screen and (max-width: 991px) {
  .width-img {
    flex-direction: column;
  }
  .width-img.left .img {
    margin-right: 0;
  }
  .width-img.left,
  .width-img.right {
    align-items: center;
  }
  .width-img.right .img {
    margin-left: 0;
  }
  .questa-benefits {
    flex-direction: column;
  }
}
@media screen and (max-width: 640px) {
  h1 {
    font-size: 24px !important;
  }
  .article-content h2 {
    font-size: 22px;
  }
  .article-content h3 {
    font-size: 18px;
  }
  .width-img .img img {
    width: 100% !important;
    border: 0;
    margin: 0;
  }
  .width-img.left .img:before {
    display: none;
  }
  .text-banner {
    text-align: left;
  }
  .text-banner p {
    font-size: 18px;
  }
}
/***********End Landing Page  **************/
</style>
