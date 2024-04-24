<template>

    <form>
        <label>请写文章</label>
        <input type="text" id="write-article" v-model="article">
        <a @click="submitArticle()">提交文章</a>
    </form>
</template>

<script>
    import URL from "../../APP_URL.js";
    var host = URL.URL_DEV;

    export default {
        name: 'WriteArticle',
        props: {
            userId: Int16Array,
        },
        components: {
        },
        data() {
            return {
                article: "article",
            }
        },
        methods: {
            submitArticle: function(){
                var submit = new XMLHttpRequest();
                submit.open("POST", host);
                submit.setRequestHeader("Content-Type" , "text/plain");
                var articleInfo = {
                    "task" : "submitArticle",
                    "article" : this.article
                };
                submit.send(JSON.stringify(articleInfo));
            }
        }
    }
</script>

<style scoped>
#write-article{
    width: 60vh;
    height: 80vw;
}
</style>