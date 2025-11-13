<template>

    <h1>{{ title }}</h1>
    
</template>

<script setup>
    defineProps({
        title: String
    })
</script>

<style scoped>
    h1 {
        font-size: 1em;
    }
</style>