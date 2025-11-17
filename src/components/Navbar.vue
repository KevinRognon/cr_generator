

<template>

    <nav>
        <SelectComp label="Intervention" :data="data" ></SelectComp>
    </nav>
    
</template>

<script setup>
    import SelectComp from '../components/SelectComp.vue';
    import data from '../assets/data_type.json';
</script>

<style scoped>

    .active {
        border: 3px solid white;
    }

    nav {
        height: 3rem;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        /* gap: 10%; */

        margin-bottom: 2rem;
    }

    nav a {
        /* background-color: #6b1919; */
        color: black;
        height: 100%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3em;

        text-decoration: none;
    }

</style>