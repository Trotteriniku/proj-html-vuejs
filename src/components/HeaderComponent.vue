<template>
    <!-- header posizionato in sticky per funzioni future -->
    <header class=" position-sticky ">
        <NavComponent/>
        <!-- <HeroComponent/> -->
    </header>
    
</template>

<script>
import NavComponent from './NavComponent.vue'
import HeroComponent from './HeroComponent.vue'

    export default {
        name:'HeaderComponent',
        components:{
    NavComponent,
    HeroComponent,
}
    }
</script>

<style lang="scss" scoped>
    header{
        height: 112px;
    }
</style>