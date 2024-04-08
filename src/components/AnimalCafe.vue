<template>
    <div>
        <a v-on:click="sayHi()">{{hi}}</a>
    </div>
</template>

<script>


    export default {
        name: 'AnimalCafe',
        props: {
            msg: String
        },
        data(){
            return{
                hi:"are u fucking kidding me",
            }
        },
        components: {

        },
        methods: {
            sayHi:function(){
                alert("??????????????");
                this.hi = "why"
            }
        }
    }
</script>

<style scoped>
</style>