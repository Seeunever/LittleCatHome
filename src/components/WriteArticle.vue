<template>
    <form>
        <label>请写文章</label>
        <input type="text" id="write-title" v-model="title">
        <input type="text" id="write-article" v-model="article">
        <a @click="submitArticle()">提交文章</a>
    </form>
</template>

<script>
    import URL from "../../APP_URL.js";
    // var host = URL.URL_DEV;
    var host = URL.URL_RELEASE;

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
                title: "title",
            }
        },
        methods: {
            submitArticle: function(){
                var submit = new XMLHttpRequest();
                submit.open("POST", host);
                submit.setRequestHeader("Content-Type" , "text/plain");
                var articleInfo = {
                    "task" : "submitArticle",
                    "article" : this.article,
                    "title" : this.title,
                    "writerId" : this.userId,
                    "createTime" : new Date().toISOString().slice(0, 19).replace('T', ' '),
                    "updateTime" : new Date().toISOString().slice(0, 19).replace('T', ' '),
                };
                submit.send(JSON.stringify(articleInfo));
                submit.onreadystatechange = function(){
                    if(this.readyState == 4 & this.status == 200){
                        if(submit.responseText === '1'){
                            alert("发布成功");
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
#write-title{
    margin-top: 10vh;
}
#write-article{
    margin-top: 15vh;
    margin-right: 5%;
    width: 80%;
    height: 50vh;
}
</style>