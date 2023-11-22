<template>
    <!-- header posizionato in sticky per funzioni future -->
    <header class=" sticky-top bg-light" >
        <NavComponent />
        
    </header>
        <HeroComponent/>
</template>

<script>
import NavComponent from './NavComponent.vue'

    export default {
        name:'HeaderComponent',
        components:{
    NavComponent,
}
    }
</script>

<style lang="scss" scoped>
    header{
        // height: 112px
    }
</style>