<template>
    <!-- header posizionato in sticky per funzioni future -->
    <header class=" position-sticky ">
        <NavComponent/>
    </header>
    
</template>

<script>
import NavComponent from './NavComponent.vue'
    export default {
        name:'HeaderComponent',
        components:{
            NavComponent
        }
    }
</script>

<style lang="scss" scoped>
    header{
        height: 112px;
    }
</style>