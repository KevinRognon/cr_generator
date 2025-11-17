<template>

    <form @submit.prevent="" @change="$emit('onValue')">
        <input type="number" :prefix="prefix" :placeholder="text">
    </form>


</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    form input {
        padding-inline: 10px;
        padding-block: 5px;
    }
</style>

<script setup>

    defineProps({
        text: String,
        prefix: String
    })

</script>