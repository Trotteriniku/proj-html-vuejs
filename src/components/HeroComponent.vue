<template>
    <div  id="intro">
        <div class="container p-0">
            <div class="row" style="padding-top: 100px; padding-bottom: 100px;">
                <div class="col-6 p-0 ">
                    <h1 class="text-light mb-3">Unlock Your Online Growth Potential</h1>
                    <p class="text-light mb-3">Online marketing to secure customer retention, leads, and sales. We focus on the bigger picture.</p>
                    <button type="button" class="btn btn-outline-dark">Dark</button>
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
    }
</style>