<template>
    <div class="container fs-5 p-0 d-flex ">
      <div class="card border-0 p-3">
        <img src="../assets/imagesNotDinamic/case-studies-1.jpg" class="" alt="">
        <div class="card-body p-0 pt-3">
          <p class="card-text fw-medium" style="font-size: 32px; line-height: 1.3;">How Spaces attracted five million visitors by improving the content</p>
        </div>
        <div class="cardborder my-3" style="max-height: 1px;"></div>
          <h3 class="m-0 fw-medium" style="font-size: 54px;">200%</h3>
        Higher revenue from digital
      </div>

      <div class="card border-0 p-3">
        <img src="../assets/imagesNotDinamic/case-studies-4.jpg" class="" alt="">
        <div class="card-body p-0 pt-3">
          <p class="card-text fw-medium" style="font-size: 32px; line-height: 1.3;">Creativity helped Hemisferio to increase their brand reach vertically</p>
        </div>
        <div class="cardborder my-3" style="max-height: 1px;"></div>
          <h3 class="m-0 fw-bold" style="font-size: 54px;">10x</h3>
        Sales increase with the same ad spend
      </div>
      <div class="card border-0 p-3">
        <img src="../assets/imagesNotDinamic/case-studies-6.jpg" class="" alt="">
        <div class="card-body p-0 pt-3">
          <p class="card-text fw-medium" style="font-size: 32px; line-height: 1.3;">How DigitalBox used AI-powered data insight to boost sales</p>
        </div>
        <div class="cardborder my-3" style="max-height: 1px;"></div>
          <h3 class="m-0 fw-bold" style="font-size: 54px;">3-year</h3>
        Partnership with Avada Consultant
      </div>
    </div>
    
</template>

<script>
    export default {
      name:'CardNComponent',
      data(){
        return{
          
        }
      }
    }
</script>

<style lang="scss" scoped>
  .card{
    width: calc(100% / 3);

    .cardborder{
      border: 1px dashed rgba(0, 0, 0, 0.24);
      // border-bottom: dashed;
      // border-top: dashed;
    }
  }
</style>