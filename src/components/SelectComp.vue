<template>

    <article>
        <select @change="$emit('onSelectChange')" :name="label" :id="label">
            <option disabled selected value="">{{ label }}</option>
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

    select {
        padding-inline: 10px;
        padding-block: 5px;
    }
</style>

<script setup>


    defineProps({
        label: String,
        data: Array
    });
    
    

</script>