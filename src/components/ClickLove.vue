<template>
    <div>
        <img class="random-cat-img" id="floating-cat" src="@/assets/logo.png">
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
        cat.style.left = event.clientX - 10 + "px";
        cat.style.top = event.clientY - 10 + "px";
        cat.style.width = "20px";
        cat.style.height = "20px";
        cat.style.position = "absolute";
        document.body.appendChild(cat);
        $(cat).slideUp(3000);
    });
</script>

<style scoped>
.random-cat-img {
    margin-top: 15%;
    margin-left: 5%;
    width: 25vw;
    height: 40vh;
}
</style>