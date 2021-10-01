<template>
    <div></div>
</template>
<script>
    export default {
        props:{
            param: Object
        },
        jsonld() { 
            return {
                "@context": "http://schema.org/",
                "@type": "NewsArticle",
                "headline": this.param.NAME,
                "image":    this.param.DETAIL_PICTURE,
                "datePublished": this.param.DATE_CREATE,
                "dateCreated": this.param.DATE_CREATE,
                "dateModified": this.param.DATE_CREATE,
                "description": this.param.PREVIEW_TEXT,
                "articleBody": this.param.DETAIL_TEXT    
            }
        }
    };
</script>
<style>
</style>