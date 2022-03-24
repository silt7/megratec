<template>
  <div class="section" style="padding: 0;">
    <div class="container">
      <div class="md-layout text-center">
        <div
          class="md-layout-item"
          v-for="item in items"
          :key="item.ID"
        >
          <div
            class="md-card md-card-background md-theme-default"
            :style="{
              'background-image': 'url(' + $root.baseURL + item.PREVIEW_PICTURE + ')'
            }"
          >
            <div class="md-card-content" style="height:230px">
              <a href="javascript:void(0)"
                ><h3  class="card-title">{{ item.NAME }}</h3></a
              >
              <p
                class="card-description truncate"
                v-html="item.PREVIEW_TEXT"
              ></p>
              <div>
              <router-link
                :to="$root.dictionary.link.training + item.CODE"
                style="color: white"
                class="md-button md-white md-round md-theme-default"
              >
                <div class="md-ripple">
                  <div class="md-button-content">
                    <i class="md-icon md-icon-font md-theme-default"
                      >format_align_left</i
                    >
                    {{$root.dictionary.button.detail}}
                  </div>
                </div>
              </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default ({
  props: {
    count: String
  },
  data(){
    return{
      items: []
    }
  },
  mounted(){
    this.loadContent();
  },
  methods: {
    async loadContent() {
      console.log('xxx')
      this.items = await this.getItem("trainings", '');

      for(let key in this.items){
        if((this.items[key].ID == 169) 
          ||(this.items[key].ID == 170)
           ||(this.items[key].ID == 171)){
            this.items.splice(key)
        }
      }
    }
  },
  watch: {
    "$root.language": function() {
      this.loadContent();
    }
  },
})
</script>

<style scoped>
h3{
  color:white
}
.md-button {
    position: absolute;
    width: 150px;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>