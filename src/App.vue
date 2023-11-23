<template>
  <!-- hero and nav sect -->
  <section>
    <HeaderComponent/>
    <HeroComponent/>
  </section>
  
  <main>
    <!-- attributes cards sect -->
    <section>
      <CardsComponentList/>
    </section>

    <!-- brand section -->
    <section class="container">
      <div class=" row flex-column text-center w-100 ">
        <!-- brand info -->
        <div>
            <h2 style="font-size: 54px;">
              Some Brands We Work With
            </h2>
            <p style="font-size: 24px; margin-bottom: 20px;">
              Quisque aliquet, libero consequat elementum convallis.
            </p>
        </div>
        <!-- brand images -->
        <div class="d-flex flex-row justify-content-between p-0 mt-4">
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/abstract.png" alt="Abstacrt brand" style="max-width: 148px;">
            </a>
          </span>
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/cglobal.png" alt="cglobal brand" style="max-width: 148px;">
            </a>
          </span>
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/next.png" alt="next brand" style="max-width: 148px;">
            </a>
          </span>
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/hemisferio.png" alt="hemisferio brand" style="max-width: 148px;">
            </a>
          </span>
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/spaces.png" alt="spaces brand" style="max-width: 148px;">
            </a>
          </span>
          <span>
            <a href="">
              <img src="./assets/imagesNotDinamic/digitalbox.png" alt="digitalbox brand" style="max-width: 148px;">
            </a>
          </span>
          
        </div>

      </div>
    </section>

    
    
  </main>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import NavComponent from './components/NavComponent.vue';
import HalfCardComponent from './components/HalfCardComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import CardNComponent from './components/CardNComponent.vue';
import CardsComponentList from './components/CardsComponentList.vue';
import HeroComponent from './components/HeroComponent.vue'


  export default {
    
    name:'App',
    components:{
    CardNComponent,
    CardsComponentList,
    FooterComponent,
    HalfCardComponent,
    HeaderComponent,
    NavComponent,
    HeroComponent,
},
    data(){
      return{
        // brandImgList:
        // [
        //   {
        //     images:'./assets/imagesNotDinamic/abstract.png',
        //   },
        //   {
        //     images:'./assets/imagesNotDinamic/cglobal.png.png',
        //   },
        //   {
        //     images:'./assets/imagesNotDinamic/next.png.png',
        //   },
        //   {
        //     images:'./assets/imagesNotDinamic/hemisferio.png.png',
        //   },
        //   {
        //     images:'./assets/imagesNotDinamic/spaces.png.png',
        //   },
        //   {
        //     images:'./assets/imagesNotDinamic/digitalbox.png.png',
        //   },
        // ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>