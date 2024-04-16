<template>
    <router-view></router-view>
    <div>
        <img src="@/assets/logo.png">
        <img id="new-cat">
    </div>
</template>

<script>
    export default {
        name: 'ClickLove',
        props: {
        },
        components: {
        },
        methods: {
        }
    }

    import $ from 'jquery';

    document.addEventListener('click', function(event) {
        var cat = document.createElement('img');
        cat.src = require("@/assets/logo.png");
        cat.style.left = event.clientX + "px";
        cat.style.top = event.clientY + "px";
        cat.style.width = "20px";
        cat.style.height = "20px";
        cat.style.position = "absolute";
        console.log("x = " + event.clientX + "   y = " + event.clientY);
        document.body.appendChild(cat);
        $(cat).slideUp(3000);
    });
</script>

<style scoped>
</style>