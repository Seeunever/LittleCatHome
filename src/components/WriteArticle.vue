<template>
    <form>
        <label>请写文章</label>
        <input type="text" id="write-article">
    </form>
</template>

<script>
    export default {
        name: 'WriteArticle',
        props: {
            msg: String
        },
        components: {
        }
    }

    // alert("this is the write box");
</script>

<style scoped>
#write-article{
    width: 200px;
    height: 200px;
}
</style>