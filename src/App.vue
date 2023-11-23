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
    <!-- Relationships -->
    <section  style="background-color: #f4f4f6; padding-bottom: 4%;">
      <div class="container p-0">
        <div class="row ">
          <div class="col-6 pe-4 mt-4">
            <h3 class="my-3" style="font-size: 32px;">We Build Relationships</h3>
            <p class="mb-5" style="font-size: 20px;">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
            <h3 class="my-3 mt-5 pt-5" style="font-size: 32px;">Proprietary Processes</h3>
            <p class="my-4 " style="font-size: 20px;">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
          </div>
          <div class="col-6 ps-5">
            <div class="d-flex my-5">
              <img src="./assets/imagesNotDinamic/image2.png" alt="">
              <div>
                <h4 class="fw-medium">Accountability</h4>
                <div style="font-size: 20px;">Curabitur ac leo nunc vestibulum</div>
              </div>
              
            </div>
            <div class="d-flex my-5">
              <img src="./assets/imagesNotDinamic/image3.png" alt="">
              <div>
                <h4 class="fw-medium">Accountability</h4>
                <div style="font-size: 20px;">Curabitur ac leo nunc vestibulum</div>
              </div>
            </div>
            <div class="d-flex my-5">
              <img src="./assets/imagesNotDinamic/image4.png" alt="">
              <div>
                <h4 class="fw-medium">Accountability</h4>
                <div style="font-size: 20px;">Curabitur ac leo nunc vestibulum</div>
              </div>
            </div>
              
          </div>
        </div>
      </div>
    </section>
    <!-- Awards -->
    <section  style="background-color: #f4f4f6; padding-bottom: 4%; margin-bottom: 4%;">
      <div  class="container text-center p-0">
        <h3 style="font-size: 32px;">Awards</h3>
      <!-- Awards image -->
        <div class="row">
          <div class="col-3 mt-5 p-0">
            <div>
              <img src="./assets/imagesNotDinamic/award-a-200x191.png" alt="">
            </div>
            <p style="font-size: 24px;" >Winner Seo Master MAGT Smart Start Award 2017</p>
          </div>

          <div class="col-3 mt-5 p-0">
            <div>
              <img src="./assets/imagesNotDinamic/award-b-200x191.png" alt="">
            </div>
            <p style="font-size: 24px;">Top Social Media Agencies Next Partner 2018</p>
          </div>

          <div class="col-3 mt-5 p-0">
            <div>
              <img src="./assets/imagesNotDinamic/award-c-200x191.png" alt="">
            </div>
            <p style="font-size: 24px;">10 Fastest Growing Abstract Solution Providers 2019</p>
          </div>

          <div class="col-3 mt-5 p-0 ">
            <div>
              <img src="./assets/imagesNotDinamic/award-d-200x191.png" alt="">
            </div>
            <p style="font-size: 24px;">National Excellence Agencie Award Winner 2020</p>
          </div>

         
        </div>
        
        
      </div>

        
    </section>
    <!-- team marketing expert -->
    <section class="container p-0" style="padding-bottom: 4%;">
      
      <div class="row">
          <div class="col-6">
            <img class="w-100  rounded-3"  src="./assets/imagesNotDinamic/large-testimonial-800x778.jpg" alt="" style="box-shadow: 0px 20px 30px 0px rgba(128, 128, 128, 0.452);
">
            
          </div>
          <div class="col-6 mt-3 p-5">
            <h3 class="w-75" style="font-size: 32px;">“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</h3>
            <div style="font-size: 20px;" class="mt-5">Kate Schadler</div>
            <p style="font-size: 14px;">Marketing Consultant – Abstract</p>
          </div>
        </div>
    </section >
    <!-- marketing resources -->
    <section style="background-color: #f4f4f6; padding-bottom: 6%; padding-top: 6%;" >
        <div class="container">
          <div class="d-flex justify-content-between align-items-baseline ">
            
            
          <h2 class="w-50" style="font-size: 54px;">Marketing Resources: Insider Advice on How to Increase Online Sales</h2>
      
          <button class="btn btn-my2-outline-success align-self-end my-btn mt-3 px-4 py-3 " style="min-width: 100px;" ><span class="mx-3 fw-medium  ">Why Work With Us</span></button>
        </div> 


          <div class="row pt-5">
            <div class="col-4">
              <div>
                <img src="./assets/imagesNotDinamic/blog-posts-6-600x400.jpg " alt="" class="w-100">
              </div>
              <h2 class="pt-4">Marketing Tips And Tricks For Your Website</h2>
            </div>

            <div class="col-4">
              <div>
                <img src="./assets/imagesNotDinamic/blog-posts-5-600x400.jpg" alt="" class="w-100">
              </div>
              <h2 class="pt-4">How to Write Stunning Blog Post Titles</h2>
            </div>

            <div class="col-4">
              <div>
                <img src="./assets/imagesNotDinamic/blog-posts-4-600x400.jpg" alt="" class="w-100">
              </div>
              <h2 class="pt-4">Techniques to Reduce Facebook Ads Spend</h2>
            </div>
          </div>

          
        </div>
    </section>
    <!-- Let’s Make Things Happen -->
    <section style="background-color: black;">
      <div class="container p-0">
        <div class="row justify-content-center p-5">
          <div class="col-6 px-5 me-5">
            <h1 style="font-size: 72px;" class="text-light">Let’s Make Things Happen</h1>
            <p style="font-size: 30px;"  class="text-light">Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus nec ut leo. Integer consectetur.</p>
            <div style=" border: 1px dashed rgba(0, 0, 0, 0.24); max-height: 10px;"></div>
            <em style="font-size: 22px;"  class="text-light mb-4">“The team at Avada Marketing Consultant is fabulous. They helped us unlock our potential online and offline. We have experienced year on year growth due to their progressive approach.”</em>
            <div style="font-size: 20px;"  class="text-light mt-4">George Anderson</div>
            <p style="font-size: 14px;"  class="text-light">Digitalbox CEO</p>
          </div>

            <HalfInputCardComponent/>
        
          
        </div>
      </div>

    </section>

    <section class="container p-0">
      <FooterComponent/>
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
import HalfInputCardComponent from './components/HalfInputCardComponent.vue';


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
    HalfInputCardComponent
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