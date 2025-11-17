<template>
    <section>
        <SelectComp @on-select-change="change_value_abonne" label="Intervention chez abonné" :data="data_sav"/>
        <Signal prefix="-" text="Signal PTO" v-if="valeur_abonne" @on-value="show_pbo_select" />
        <SelectComp @on-select-change="show_intervention_pm" label="Intervention PBO" :data="data_pbo"/>
        <SelectComp @on-select-change="change_value_pm" label="Intervention PM" :data="data_pm"/>
        <Signal @on-value="show_infos" v-if="valeur_pm"/>
        <Informations @on-submit-infos="infos_submit" v-if="show_info_text" />
        <GenerateButton @on-click="on_generate_clicked" text="Générer" />
    </section>
    
</template>


<script setup>
    import SelectComp from '@/components/SelectComp.vue';
    import data_sav from '../assets/data_sav.json';
    import data_pbo from '../assets/data_pbo.json';
    import data_pm from '../assets/data_pm.json';
    import Signal from '@/components/Signal.vue';
    import { onMounted, ref } from 'vue';
    import Informations from '@/components/Informations.vue';
    import GenerateButton from '@/components/GenerateButton.vue';

    const valeur_abonne        = ref(false);
    const show_pbo             = ref(false);
    const show_pm              = ref(false);
    const valeur_pm            = ref(false);
    const show_info_text       = ref(false);
    const show_generate_button = ref(false);
    const cr = ref({
        "type_intervention"           : "SAV",
        "intervention_abo"            : "",
        "signal_pto"                  :  0,
        "intervention_pbo"            : "",
        "intervention_pm"             : "",
        "signal_pm"                   :  0,
        "informations_complementaires": ""
    })

    const save_answer = (type_value, value) => {
        switch (type_value) {
            case "intervention_abo":
                cr.value.intervention_abo = value;
                break;
            case "signal_pto":
                cr.value.signal_pto = value;
                break;
            case "intervention_pbo":
                cr.value.intervention_pbo = value;
                break;
            case "intervention_pm":
                cr.value.intervention_pm = value;
                break;
            case "signal_pm":
                cr.value.signal_pm = value;
                break;
            case "informations_complementaires":
                if (value.length > 0) {
                    cr.value.informations_complementaires = value;
                } else {
                    console.log("Le champ est vide.");
                }
            default:
                break;
        }   
    }

    const reset_champs = () => {
    }

    const change_value_abonne = () => {
        event.preventDefault();
        switch (event.target.value) {
            case "Pas d'intervention nécessaire":
                valeur_abonne.value = false;
                break;
            default:
                valeur_abonne.value = true;
                break;
        }
        save_answer("intervention_abo", event.target.value);
    }

    const show_pbo_select = () => {
        const text = event.target.value;
        if (text.length > 0) {
            show_pbo.value = true;
            save_answer("signal_pto", text);
        } else {
            show_pbo.value = false;
        }
    }

    const show_intervention_pm = () => {
        save_answer("intervention_pbo", event.target.value);
        show_pm.value = true;
    }

    const change_value_pm = () => {
        event.preventDefault();
        switch (event.target.value) {
            case "Pas d'intervention nécessaire":
                valeur_pm.value = false;
                break;
            case "Brassage non réalisé":
                valeur_pm.value = false;
                break;
            default:
                valeur_pm.value = true;
                break;
        }
        save_answer("intervention_pm", event.target.value);
    }

    const show_infos = () => {
        event.preventDefault();
        const text = event.target.value;
        if (text.length > 0) {
            show_info_text.value = true;
            save_answer("signal_pm", event.target.value);
        } else {
            show_info_text.value = false;
        }
    }

    const infos_submit = () => {
        event.preventDefault();
        save_answer("informations_complementaires", event.target.value.trim());
        show_generate_button.value = true;
    }

    const on_generate_clicked = () => {
        const jsonString = JSON.stringify(cr.value, null, 2);
        console.log(jsonString);
        navigator.clipboard.writeText(jsonString);
        reset_champs();
    }

</script>
<style scoped>

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

</style>