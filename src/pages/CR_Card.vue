

<template>

    <div class="main_cr">
        <p>Génération de CR</p>
        <div class="generator_cr">
            <Navbar/>
            <RouterView />
        </div>
    </div>

</template>

<script setup>
import Navbar from '@/components/Navbar.vue';


</script>

<style scoped>

    .main_cr {
        display: flex;
        flex-direction: column;
        align-items: center;
        
        border-radius: 10px;
        font-size: 1.5em;

        box-shadow: 0px 0px 10px lightgray;
    }

    .main_cr > p {

        font-size: 1em;
        
    }

</style>