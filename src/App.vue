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
    <section class="container px-0" style="padding-bottom: 7%;">
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
    <!-- Marketing consultant expert reference -->
    <section class="container p-2 position-sticky top-0 z-1   ">
      <div class="w-100 bg-white rounded-3 row mark-expert p-3 align-items-center ">
        <div class=" rounded-circle overflow-hidden facelogo p-0 ms-5 col-auto" >
          <img src="./assets/imagesNotDinamic/marketing-expert-cta.png" alt="marketing-expert">
        </div>
        <div class="col-auto">
          <div class="fw-medium" style="font-size: 20px;">Sandy Reiff</div>
          <p style="font-size: 14px;">Marketing Consultant Expert</p>
        </div>
        <h4 class="col-5 m-0 ps-5" style="font-size: 24px;">Drive Leads and Sales with Avada</h4>
        <div class="col-auto d-flex justify-content-center mx-5">
          <a class="btn btn-my-outline-success my-btn w-100 py-3 px-4 rounded-3 " style="font-size: 18px;" ><span class="mx-3 fw-medium "><i class="fa-solid fa-phone"></i>(555) 802-1234</span></a>
        </div>
      </div>
        
    </section>
     <!-- Trusted -->
    <section class="container px-0 text-center" style="padding-top: 6%; padding-bottom: 6%;">
      <div class=" container-sm text-center pb-4">
          <h2 style="font-size: 54px;">Trusted by Leading Organisations</h2>
      </div>
        
      <CardNComponent/>
      <a class="btn btn-my2-outline-success  my-btn w-25 px-4 py-3 mt-5 " ><span class="mx-3 fw-medium  ">Get a Consultation</span></a>
    </section>
    <!-- Client's benefits -->
    <section style="background-color: #f4f4f6;">
        <div class="container" style="padding-top: 6%; padding-bottom: 4%;">
          <div class="row">
            <div class="col-6 my-5 pt-5 p-0  ">
              <h2 style="font-size: 54px;">We Boost Our Clients’ Bottom Line by Optimizing Their Growth Potential.</h2>
              <p style="font-size: 27px;" class="my-4">Quisque aliquet, libero consequat elementum convallis, erat risus imperdiet pellentesque sem neque eget.</p>
              <a class="btn btn-my2-outline-success  my-btn mt-3 px-4 py-3 " ><span class="mx-3 fw-medium  ">Why Work With Us</span></a>
            </div>

            <div class="col-6 p-0  ">
            <img class=" p-4 w-100 " src="./assets/imagesNotDinamic/we-boost-our-clients-800x732.jpg" alt="our-client" style="border-radius: 5%;">
            </div>
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
  .facelogo{
      width: 62px;
      height: 62px;
      img{
        width: 62px;
        height: 62px;
          // width: 100%;
      }
  }
  .mark-expert{
    box-shadow: 0px 20px 30px 0px rgba(128, 128, 128, 0.452);
  }

  .btn-my-outline-success{
    --bs-btn-color: #F86011;
    --bs-btn-border-color: $-my-primary ;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #F86011;
    --bs-btn-hover-border-color: #F86011;
    --bs-btn-focus-shadow-rgb: 25, 135, 84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #F86011;
    --bs-btn-active-border-color: #F86011;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #F86011;
    --bs-btn-bg: #f862121A;
    --bs-btn-disabled-border-color: #F86011;
    --bs-gradient: none;
}

.btn-my2-outline-success{
    --bs-btn-color: #fff;
    --bs-btn-border-color: $-my-primary ;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #ca4700;
    --bs-btn-hover-border-color: #F86011;
    --bs-btn-focus-shadow-rgb: 25, 135, 84;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #F86011;
    --bs-btn-active-border-color: #F86011;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #F86011;
    --bs-btn-bg: #F86011;
    --bs-btn-disabled-border-color: #F86011;
    --bs-gradient: none;
    }
</style>