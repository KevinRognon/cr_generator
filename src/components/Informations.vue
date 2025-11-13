

<template>

    <article>
        <form @submit.prevent="" @change="$emit('onSubmitInfos')">
            <label for="infos">Informations complémentaires</label>
            <textarea type="text" name="infos" id="infos"></textarea>
        </form>
    </article>

</template>

<script setup>

</script>

<style scoped>

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
</style>