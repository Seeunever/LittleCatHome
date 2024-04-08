<template>
    <div>
        <IndexNavigator></IndexNavigator>
        <AnimalCafe></AnimalCafe>
        <DomainLicense></DomainLicense>
    </div>
</template>

<script>
    import IndexNavigator from './IndexNavigator.vue';
    import DomainLicense from './DomainLicense.vue';
    import AnimalCafe from './AnimalCafe.vue';

    export default {
        name: 'IndexHome',
        props: {
            msg: String
        },
        components: {
            IndexNavigator,
            DomainLicense,
            AnimalCafe,
        }
    }
</script>

<style scoped>
</style>