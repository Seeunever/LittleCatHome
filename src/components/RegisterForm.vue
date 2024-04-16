<template>
    <div>
        <form class="register-form" id="submit-register-info" onsubmit="return false">
            <input type="text" name="username" v-model="username">
            <input type="text" name="password" v-model="password">
            <input type="button" v-on:click="submitRegisterInfo()" value="提交">
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

                console.log("11233 code = ", CryptoJS.MD5(this.password).toString());

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