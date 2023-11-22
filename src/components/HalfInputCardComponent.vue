<template>
        <div class="p-3  bg-white  d-flex flex-column align-items-center rounded-4 position-relative boxS" style="width: 36%;">
           <div class="rounded-circle overflow-hidden  facelogo"><img src="../assets/imagesNotDinamic/marketing-consultant-expert.jpg" alt="marketing-consultant-expert"></div>
           <div id="name" class="my-2">Richard Madsen</div>
           <div id="role">Marketing Consultant Expert</div>
           <a href="" id="phone-number" class="p-2 my-2">
            <i class="fa-solid fa-phone"></i>
            <span>(555) 802-1234</span>
           </a>
           <input type="text" placeholder="Your Name*" class="my-2 rounded-3 border-1 form-control px-4 py-3 fw-medium"  >
           <input type="email" placeholder="Your Email*" class="my-2 rounded-3 border-1 form-control fs-6 px-4 py-3 fw-medium" >
           <input type="text" placeholder="Your Phone Number*" class="my-2 rounded-3 border-1 form-control fs-6 px-4 py-3 fw-medium ">
           <a class="btn btn-outline-success col-auto my-btn w-100 px-4 py-3 my-2" ><span class="mx-3 fw-medium  ">Free Quote</span></a>
           <p>By submitting my data I agree to be contacted</p>
        </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'HalfInputCardComponent',
        props: {
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .facelogo{
        width: 80px;
        height: 80px;
        img{
            width: 100%;
        }
    }
    #name{
        font-size: 26px;
    }
    #role{
        font-size: 19px;
    }
    #phone-number{
        font-size: 18px;
        color:  #F86011;
        text-decoration: none;
    }

    input{
        outline: none;
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
    a{
        span{
            font-size: 18px;
        }
    }
    
    p{
        font-size: 13px;
    }

    .boxS{
        box-shadow:0px 24px 32px -6px rgba(0, 0, 0, 0.150) ;
    }
    
</style>