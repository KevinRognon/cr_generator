<template>

    <article>
        <label for="label">{{ label }}</label>
        <select @change="$emit('onSelectChange')" :name="label" :id="label">
            <option disabled selected value="">Choisir</option>
            <option v-for="value in data[0]" :value="value">{{ value }}</option>
        </select>
    </article>

</template>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>

<script setup>


    defineProps({
        label: String,
        data: Array
    });
    
    

</script>