<template>

    <section>
        <div class="title">
            <div class="left_side_title">
                <span class="boule_bleue"></span>
                <p>CR Fibre</p>
            </div>
            <p>Technicien</p>
        </div>

        <article>
            <CR_Card class="cr_card"></CR_Card>
        </article>
        
    </section>

</template>

<script setup>
import CR_Card from '@/pages/CR_Card.vue';


</script>

<style scoped>

    section {
        background-color: #fff;
        width: 90%;

        margin: auto;
        border-radius: 10px;
        box-shadow: 0px 0px 3px grey;
    }

    section .title {
        display: flex;
        justify-content: space-evenly;
        gap: 20%;
        align-items: center;
        height: 2rem;
        padding-inline: 20px;
    }

    section .left_side_title {
        display: flex;
        width: 100%;

        gap: 5%;
    }

    section .left_side_title .boule_bleue {
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #2c74ff;
    }

    .cr_card {
        background-color: #fefefe;
    }
    
    article {
        
        
        background-color: #f6f8fa;
        padding: 30px;
        padding-inline: 50px;
        

    }

</style>