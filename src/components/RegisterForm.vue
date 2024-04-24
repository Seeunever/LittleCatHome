<template>
    <div>
        <form class="register-form">
            <div><input class="input" id="input-username" type="text" name="username" v-model="username"></div>
            <div><input class="input" id="input-password" type="text" name="password" v-model="password"></div>
            <div><input id="register-button" type="button" v-on:click="submitRegisterInfo()" value="提交"></div>
        </form>
    </div>
</template>

<script>
    import router from '@/router/router';
    import URL from '../../APP_URL.js';

    const CryptoJS = require("crypto-js");

    // var host = URL.URL_RELEASE;
    var host = URL.URL_DEV;

    export default {
        name: 'RigisterForm',
        props: {
            msg: String
        },
        data(){
            return {
                username:'username',
                password:'password',
            }
        },
        methods: {
            submitRegisterInfo:function(){
                var register = new XMLHttpRequest();
                register.open("POST", host, true);
                register.setRequestHeader('Content-Type', 'text/plain');
                var user = {
                    task:"register",
                    username:this.username,
                    password:CryptoJS.MD5(this.password).toString(),
                };

                var userInfo = JSON.stringify(user);
                register.send(userInfo);
                register.onreadystatechange = function(){
                    if(this.readyState == 4 & this.status == 200){
                        if(register.responseText === '1'){
                            alert("注册成功 请登录");
                            router.push('/login');
                        }else if(register.responseText === '0'){
                            alert("账号已被注册，请重新输入账号");
                        }
                    }
                }
            }
        },
        components: {
        }
    }
</script>

<style scoped>
.register-form {
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
#register-button{
    margin-top: 8%;
    margin-left: 10%;
}
</style>