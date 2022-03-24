<template>
    <div class="row">
        <div class="accordion" role="tablist">
            <div no-body class="mb-1 card-item" v-for="(item, index) in text" :key="item.ID" style="border:none">
                <div header-tag="header" class="p-1 title" role="tab">
                    <div class="title" block v-b-toggle="'accordion-'+index" variant="info">
                            <h3>{{item.NAME}}</h3>
                                <span class="when-opened plus">
                                +
                            </span>
                            <span class="when-closed plus">
                                +
                            </span>
                    </div>
                </div>
                <b-collapse :id="'accordion-'+index" accordion="my-accordion" role="tabpanel">
                    <p>{{item.DETAIL_TEXT}}</p>
                </b-collapse>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      text: []
    };
  },
  methods: {
    async loadInfo(id_tab) {
      this.text = await this.getItem("faq", '');
    }
  },
  created() {
    this.loadInfo();
  }
};
</script>
<style scoped>
    .accordion{
        padding-top: 25px !important;
        width: 50%;
        margin: 0 auto;
    }
    .title{
        position: relative;
        display:block;
        width: 100%;
        cursor: pointer;
    }
    .title:hover > .plus{
        background: #ced4da;
    }
    h3{
        width: 90%;
    }
    .plus{
        position: absolute;
        width: 30px;
        height: 30px;
        line-height: 30px;
        right:0;
        top:5px;
        text-align: center;
        font-size: 21px;
        font-weight: 600;
        border-radius: 15px;
    }
    .collapsed > .when-opened,
    :not(.collapsed) > .when-closed {
        display: none;
    }
    .collapsed > .when-closed {
        display: inline-block;
        -moz-transform: rotate(0deg); /* Для Firefox */
        -ms-transform: rotate(0deg); /* Для IE */
        -webkit-transform: rotate(0deg); /* Для Safari, Chrome, iOS */
        -o-transform: rotate(0deg); /* Для Opera */
        transform: rotate(0deg);
   }
    :not(.collapsed) > .when-opened {
        display: inline-block;
        -moz-transform: rotate(45deg); /* Для Firefox */
        -ms-transform: rotate(45deg); /* Для IE */
        -webkit-transform: rotate(45deg); /* Для Safari, Chrome, iOS */
        -o-transform: rotate(45deg); /* Для Opera */
        transform: rotate(45deg);
   }
</style>
