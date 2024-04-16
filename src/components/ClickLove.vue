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

    document.addEventListener('click', function(event) {
        var cat = document.createElement('img');
        cat.src = "@/assets/logo.png";
        cat.className = 'click-cat';
        cat.style.left = event.clientX - 50 + "px";
        cat.style.top = event.clientY - 50 + "px";
        document.body.appendChild(cat);
    });
</script>

<style scoped>
.click-cat {
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
}
</style>