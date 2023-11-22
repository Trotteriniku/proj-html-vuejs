<template>
  <HeaderComponent/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import HalfCardComponent from './components/HalfCardComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CardNComponent from './components/CardNComponent.vue';
import CardsComponentList from './components/CardsComponentList.vue';

  export default {
    
    name:'App',
    components:{
    CardNComponent,
    CardsComponentList,
    FooterComponent,
    HalfCardComponent,
    HeaderComponent,
    NavComponent,
},
    data(){
      return{
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>