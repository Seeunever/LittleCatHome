<template>
    <div>
        <form class="login-form">
            <div><input class="input" id="input-username" type="text" name="username" v-model="username"></div>
            <div><input class="input" id="input-password" type="text" name="password" v-model="password"></div>
            <div><input id="login-button" type="button" v-on:click="submitLoginInfo()" value="登录"></div>
        </form>
    </div>
</template>

<script>
    import URL from '../../APP_URL.js';
    import router from '@/router/router';

    const CryptoJS = require("crypto-js");

    var host = URL.URL_RELEASE;
    // var host = URL.URL_DEV;

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
                            localStorage.setItem("isLoggedIn", true);
                            router.push({name: 'userHome', params: { userId: resInfo.userId}});
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
    width: 30vw;
    height: 30vh;
    margin-top: 20%;
    margin-left: 25%;
    font-size: 5%;
    background-color: white;
    box-shadow:0px 0px 20px #333333;
}
.input{
    width: 5vw;
    height: 2vh;
}
#input-username{
    margin-top: 8%;
    margin-left: 10%;
}
#input-password{
    margin-top: 8%;
    margin-left: 10%;
}
#login-button{
    margin-top: 8%;
    margin-left: 10%;
}
</style>