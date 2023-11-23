<template>
    
    <!-- First card -->
        <div class="row" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="col-6">
                <img src="/publicImages/img1.svg" alt="image" class="w-100">

            </div>
           
            
            <div class="col-6 p-0 ">
                <span style="width: 40.8px; height: 40.8px;" class=" rounded-circle  bg-secondary p-2 me-2 ">
                    <i class="fa-solid fa-chart-simple fa-xs"></i>
                </span>
                <span  >{{ store.elements[0].argument }}</span>
                <h2 class="w-50 py-3 my-3">{{ store.elements[0].title }}</h2>
                <p  class="py-2 my-3">{{ store.elements[0].mainText }}</p>
                <a class="btn btn-outline-success  my-btn w-50 px-4 py-3 my-3" ><span class="mx-3 fw-medium  ">Get a Consultation</span></a>
            </div>
        </div>
        <!-- Second card -->
        <div class="row flex-row-reverse " style="padding-top: 60px; padding-bottom: 60px;">
            <div class="col-6">
            <img src="/publicImages/img2.svg" alt="image" class="w-100">
            </div>
            <div class="col-6">
                <span style="max-width: 50px; max-height: 40.8px;"  class=" rounded-circle  bg-secondary p-2 me-2 ">
                    <i class="fa-solid fa-chart-simple fa-xs " ></i>
                </span>
                <span >{{ store.elements[1].argument }}</span>
                <h2 class="w-50 py-3 my-3">{{ store.elements[1].title }}</h2>
                <p class="py-2 my-3">{{ store.elements[1].mainText }}</p>
                <a class="btn btn-outline-success  my-btn w-50 px-4 py-3 my-2" ><span class="mx-3 fw-medium  ">Get a Consultation</span></a>
            </div>
        </div>
        <!-- Third card -->
        <div class="row" style="padding-top: 60px; padding-bottom: 60px;">
            <div class="col-6">
                <img src="/publicImages/img3.svg" alt="image">
            </div>
            
            <div class="col-6">
                <span style="width: 40.8px; height: 40.8px;" class=" rounded-circle  bg-secondary p-2 me-2">
                    <i class="fa-solid fa-chart-simple fa-xs"></i>
                </span>
                <span >{{ store.elements[2].argument }}</span>
                <h2 class="w-50 py-3 my-3">{{ store.elements[2].title }}</h2>
                <p class="py-2 my-3">{{ store.elements[2].mainText }}</p>
                <a class="btn btn-outline-success  my-btn w-50 px-4 py-3 my-2 " ><span class="mx-3 fw-medium  ">Get a Consultation</span></a>
            </div>
        </div>
        

      
        

   
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'HalfCardComponent',
        data(){
            return{
               store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    img{
        width: 100%;
    }
    h2{
        font-size: 52px;
    }
    p{
        font-size: 32px;
    }
    span{
        font-size: 20px;
    }
    .btn-outline-success{
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