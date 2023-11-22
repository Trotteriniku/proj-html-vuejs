<template>
    <div >
        <div class="container">
           <h1>{{ store.HalfInputElements[0].title }}</h1> 
        </div>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name:'HalfInputCardComponent',
        props: {
            positions:Number,
        },
        data(){
            return{
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>