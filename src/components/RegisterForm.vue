<template>
    <div>
        <IndexNavigator></IndexNavigator>
        <form class="register-form" id="submit-register-info" onsubmit="return false">
            <input type="text" name="username" v-model="username">
            <input type="text" name="password" v-model="password">
            <input type="button" v-on:click="submitRegisterInfo()" value="提交">
        </form>
        <DomainLicense></DomainLicense>
    </div>
</template>

<script>
    import IndexNavigator from './IndexNavigator.vue';
    import DomainLicense from './DomainLicense.vue';
    import router from '@/router/router';

    const CryptoJS = require("crypto-js");

    var host = 'https://server.littlecathome.com/';

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
                        }
                    }
                }
            }
        },
        components: {
            IndexNavigator,
            DomainLicense,
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