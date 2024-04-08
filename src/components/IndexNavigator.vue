<template>
    <div id="index-navigator">
        <nav class="center">
            <a class="nav-cathome-title" id="say-hello" v-on:click="clickSayHello">{{sayHello}}</a>
            <router-link to="/">首页</router-link>
            <router-link to="/login">登录</router-link>
            <router-link to="/register">注册</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'IndexNavigator',
        props: {
            msg: String
        },
        data(){
            return{
                sayHello:"欢迎来到小猫家",
            }
        },
        methods: {
            clickSayHello:function(){
                this.sayHello = "想喝点什么？"
            }
        }
    }
</script>

<style scoped>
.center {
    text-align: center;
}
</style>