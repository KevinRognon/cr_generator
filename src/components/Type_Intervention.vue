<template>

    <article>
        <select v-model="choix" name="selection_intervention" @change="type_change" id="selection_intervention">
            <option disabled value="">Choisir</option>
            <option value="Sav">Sav</option>
            <option value="Post-Production">Post-Production</option>
        </select>
    </article>    

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


    const choix = ref("");
    const router = useRouter();

    function type_change() {
        console.log(choix.value);
        switch (choix.value.toLowerCase()) {
            case "sav":
                router.push("/sav");
                break;
            case "post-production":
                router.push("/post-production");
                break;
            default:
                router.push("/");
                break;
        }
    }

</script>