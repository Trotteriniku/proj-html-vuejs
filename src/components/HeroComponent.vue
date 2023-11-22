<template>
    <div>
         <HalfInputCardComponent  />
    </div>
</template>

<script>
import HalfInputCardComponent from './HalfInputCardComponent.vue';
import { store } from '../data/store';


    export default {
        name:'HeroComponent',
        components:{
    HalfInputCardComponent,
        data(){
            return{
               store, 
            }
        }
}
    }
</script>

<style lang="scss" scoped>
    div{
        background-image: url('../assets/imagesNotDinamic/marketing-intro.jpg');
    }
</style>