<template>
    <!-- container totale -->
    <nav class="container " >

        <div class="row align-items-center align-content-center justify-content-between py-4 ">
        <!-- logo -->
            <a href="" class=" col-auto">
                <img src="../assets/imagesNotDinamic/avada-marketing-logo.png" alt="avada logo">
            </a>
        <!-- navbar menu list -->
            <ul class="col-auto d-flex  gap-4 m-0 list-unstyled  align-items-center align-content-center">
                    <li class="">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">Home</span>
                            <span></span>
                        </a>
                    </li>
                    <li class="   ">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">Services</span>
                            <span></span>
                        </a>
                    </li>
                    <li class="   ">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">Why Us</span>
                        </a>
                    </li>
                    <li class="   ">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">Case Studies</span>
                        </a>
                    </li>
                    <li class="   ">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">About</span>
                        </a>
                    </li>
                    <li class="   ">
                        <a href="" class=" nav-link ">
                            <span class=" fw-medium fs-5 ">Blog</span>
                        </a>
                    </li>
            </ul>
                
        <!-- phone-number -->
            <div class=" col-auto " >
                    <span class="me-3"><i class="fa-solid fa-phone"></i></span>
                    <span class="fs-5 fw-medium  ">(555) 802-1234</span>
            </div>
        
        <!-- Quote Button -->
            <a class="btn btn-outline-success col-auto my-btn " ><span class="mx-3 fw-medium ">Free Quote</span></a>
            
        </div>
    </nav>
</template>

<script>
    export default {
        name:'NavComponent'
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

    li:first-child{
        color:  #F86011;

    }

    i{
        color:  #F86011;
    }

    .my-btn{
        padding: 13px 14px;
        border-radius: 12px;

        span{
            font-size: 1.15em;
        }
    }
.btn-outline-success{
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
    
</style>