<template>
    <div>
        <a>{{id}}</a>
        <div class="go-to-write" v-on:click="goToWrite()">想发布信息的话点这里！</div>
    </div>
</template>

<script>
    import router from '@/router/router';
    export default {
        name: 'UserHome',
        props:['id'],
        components: {
        },
        methods: {
            goToWrite:function(){
                alert("goToWrite");
                router.push({name: 'writeArticle', params: { userId: this.id}});
            }
        }
    }
</script>

<style scoped>
.go-to-write{
    margin-top: 50%;
}
</style>