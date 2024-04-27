<template>
    <div class="index">
        <div class="content">
            <nav class="nav">
                <a class="info"  v-on:click="clickSayHello">{{sayHello}}</a>
                <div class="nav-bar">
                    <router-link class="tag" to="/">首页</router-link>
                    <router-link class="tag" to="/login">登录</router-link>
                    <router-link class="tag" to="/register">注册</router-link>
                </div>
            </nav>
            <div>
                <router-view class="router-view"></router-view>
                <ClickLove id="click-love"></ClickLove>
            </div>
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
        }
    }
</script>

<style scoped>
.index{
    background-color: yellow;
}
.content{
    min-height: 95vh;
}
.info{
    float: left;
    margin-left: 5%;
}
.nav{
    width: 100vw;
    position: fixed;
    height: 5vh;
    line-height: 5vh;
    background-color: pink;
    font-size: 2vmin;
    font-weight: bolder;
    font-family: '幼圆';
    box-shadow: 0 2% 2% -2% gray;
}
.tag{
    display: inline;
    width: 10vw;
    color: brown;
    margin-right: 2%;
    margin-left: 2%;
    text-decoration: none;
}
.nav-bar{
    float: right;
    margin-right: 15%;
    width: 20vw;
}
.go-to-write{
    float: left;
    margin-left: 10%;
    color: chocolate;
}
#click-love{
    float: left;
}
.router-view{
    margin-top: 1%;
    margin-right: 1%;
    width: 60vw;
    height: 100vh;
    float: right;
}
.center{
    text-align: center;
}
.footer{
    height: 5vh;
}
</style>