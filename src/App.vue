<script setup>
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style>

  body {
    background-color: #ffedda;
  }

  * {
    color: #000000;
    font-weight: 600;
    font-family: "Calibri";
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  select, form input, textarea, button {
    padding: 15px;
    width: 320px;
    text-align: center;
    border: 5px solid #ffdfdf;
    border-radius: 10px;
    font-size: 1.2em;
    background-color: transparent;
    resize: none;
  }

  .section_main {

    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
</style>
