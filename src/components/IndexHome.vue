<template>
    <div>
        <div class="content">
            <nav class="nav">
                <a class="info"  v-on:click="clickSayHello">{{sayHello}}</a>
                <div class="nav-bar">
                    <router-link class="tag" to="/">首页</router-link>
                    <router-link class="tag" to="/login">登录</router-link>
                    <router-link class="tag" to="/register">注册</router-link>
                </div>
                <a class="go-to-write" v-on:click="goToWrite()">写博客</a>
            </nav>
            <RouterView></RouterView>
            <ClickLove></ClickLove>
        </div>
        <div class="footer center">宁ICP备2023001566号</div>
    </div>
</template>

<script>
    import ClickLove from './ClickLove';
    export default {
        name: 'IndexHome',
        props: {
        },
        data(){
            return {
                sayHello: "欢迎来到小猫家",
            }
        },
        components: {
            ClickLove,
        },
        methods: {
            clickSayHello:function(){
                this.sayHello = "想喝点什么？"
            },
            goToWrite:function(){
                alert("goToWrite");
                this.$router.push('/writeArticle')
            }
        }
    }
</script>

<style scoped>
.content{
    min-height: calc(100vh - 70px);
}
.info{
    float: left;
    margin-left: 30px;
}
.go-to-write{
    float: right;
    margin-right: 30px;
}
.nav{
    width: 100vw;
    position: fixed;
    height: 80px;
    line-height: 80px;
    background-color: pink;
    font-size: 30px;
    font-weight: 30px;
    font-family: '幼圆';
    box-shadow: 0 8px 6px -6px gray;
}
.tag{
    display: inline;
    width: 100px;
    color: brown;
    margin-right: 20px;
    margin-left: 20px;
    text-decoration: none;
}
.nav-bar{
    float: left;
    border: 10px;
    border-color: black;
}
.center {
    text-align: center;
}
.footer {
    height: 50px;
}
</style>