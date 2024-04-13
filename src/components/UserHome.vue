<template>
    <div>
        <IndexNavigator></IndexNavigator>
        <a>{{id}}</a>
        <DomainLicense></DomainLicense>
    </div>
</template>

<script>
    import IndexNavigator from './IndexNavigator.vue';
    import DomainLicense from './DomainLicense.vue';

    export default {
        name: 'UserHome',
        props:['id'],
        components: {
            IndexNavigator,
            DomainLicense,
        }
    }
</script>

<style scoped>
</style>