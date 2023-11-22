<template>
    <div  id="intro">
        <div class="container p-0">
            <div class="row" style="padding-top: 100px; padding-bottom: 100px;">
                <div class="col-6 p-0 ">
                    <h1 class="text-light mb-3">Unlock Your Online Growth Potential</h1>
                    <p class="text-light mb-5">Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.</p>
                    <button type="button" class="btn btn-outline-dark fs-5 px-5 py-3 rounded-3 border-2">Our Services<i class="fa-solid fa-arrow-right align-middle ps-3 "></i></button>
                </div>
            
                     <HalfInputCardComponent class="col-6"/>
                

            </div>

           
        </div>
         
    </div>
</template>

<script>
import HalfInputCardComponent from './HalfInputCardComponent.vue';
import { store } from '../data/store';


    export default {
        name:'HeroComponent',
        components:{
        
            HalfInputCardComponent,
        },
        data() {
            return {
                store,
            };
        },
    }
    
</script>

<style lang="scss" scoped>
    #intro{
        max-height: 650px;
        background-image: url('../assets/imagesNotDinamic/marketing-intro.jpg');
        background-size: cover;
        background-position: left;
        
        h1{
            font-size: 72px;
        }
        p{
            font-size: 30px
        }

        .btn-outline-dark {
            --bs-btn-color: #fff;
            --bs-btn-border-color: #212529;
            --bs-btn-hover-color: #fff;
            --bs-btn-hover-bg: transparent;
            --bs-btn-hover-border-color: #212529;
            --bs-btn-focus-shadow-rgb: 33, 37, 41;
            --bs-btn-active-color: #fff;
            --bs-btn-active-bg: #212529;
            --bs-btn-active-border-color: #212529;
            --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
            --bs-btn-color: #212529;
            --bs-btn-bg: #fff;
            --bs-btn-disabled-border-color: #212529;
            --bs-gradient: none;
        }
    }
</style>