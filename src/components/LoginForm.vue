<template>
    <div>
        <form class="login-form" id="login-register-info" onsubmit="return false">
            <input type="text" name="username" v-model="username">
            <input type="text" name="password" v-model="password">
            <input type="button" v-on:click="submitLoginInfo()" value="登录">
        </form>
    </div>
</template>

<script>
    import URL from '../../APP_URL.js';

    const CryptoJS = require("crypto-js");

    // var host = URL.URL_RELEASE;
    var host = URL.URL_DEV;

    export default {
        el:'#login-register-info',
        name: 'LoginForm',
        props: {
            msg: String
        },
        data(){
            return{
                username:"username",
                password:"password",
            }
        },
        methods: {
            submitLoginInfo:function(){
                var login = new XMLHttpRequest();
                login.open("POST", host, true);
                login.setRequestHeader('Content-Type', 'text/plain');
                var user = {
                    task:"login",
                    username:this.username,
                    password:CryptoJS.MD5(this.password).toString(),
                };

                var userInfo = JSON.stringify(user);
                login.send(userInfo);
                login.onreadystatechange = function(){
                    if(this.readyState == 4 & this.status == 200){
                        let resInfo = JSON.parse(login.responseText);
                        console.log("login.responseText = ", login.responseText)
                        if(resInfo.resResult === '1'){
                            this.$router.push('/login')
                        }
                    }
                }
            }
        },
        components: {
        },
    }
</script>

<style scoped>
.login-form {
    width: 500px;
    height: 500px;
    margin: auto;
    font-size: 50px;
    color: blue;
    border: 5px solid;
    border-color: cadetblue;
    border-radius: 10px;
}
</style>