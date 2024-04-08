<template>
    <IndexNavigator></IndexNavigator>
    <DomainLicense></DomainLicense>
</template>

<script>
    import IndexNavigator from './IndexNavigator.vue';
    import DomainLicense from './DomainLicense.vue';

    export default {
        name: 'UserHome',
        props: {
            msg: String
        },
        components: {
            IndexNavigator,
            DomainLicense,
        }
    }
</script>

<style scoped>
</style>