<template>

    <form @submit.prevent="" @change="$emit('onValue')">
        <label for="signal">Signal en dBm</label>
        <input type="number">
    </form>


</template>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
</style>

<script setup>



</script>