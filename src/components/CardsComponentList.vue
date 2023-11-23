<template>
    <div class="container p-0 ">
        <HalfCardComponent/>
    </div>
</template>

<script>
import HalfCardComponent from './HalfCardComponent.vue';

    export default {
    name: "CardsComponentList",
    components: { 
        HalfCardComponent,

    },
    data(){
        return{
            
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        margin-top: 100px;
        margin-bottom: 100px;
    }
</style>