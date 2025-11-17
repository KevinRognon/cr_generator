

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
        background-color: rgb(9, 167, 36);
        color: white;
        cursor: pointer;
    }

</style>