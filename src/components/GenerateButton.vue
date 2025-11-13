

<template>

    <button v-on:click="$emit('onClick')">
        {{ text }}
    </button>

</template>

<script setup>

    defineProps({
        text: String
    })

</script>


<style scoped>

    button {
        transition: .3s ease;
    }

    button:hover {
        background-color: black;
        color: white;
        cursor: pointer;
    }

</style>