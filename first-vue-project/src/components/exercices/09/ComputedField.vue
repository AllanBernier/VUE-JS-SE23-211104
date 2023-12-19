<script setup>
/**
X Créez deux variables : inputValue avec une valeur initiale "" et computedValue avec une valeur initiale de null.
X Ajoutez un champ de texte dans le modèle lié à la variable inputValue en utilisant v-model.
Utilisez une valeur calculée (computed) pour afficher la longueur de la valeur actuelle de inputValue. Cette valeur calculée doit s'appeler computedValue.
Affichez computedValue dans le modèle.
Affichez un message conditionnel dans le modèle. Si computedValue est supérieur à 5, 
affichez "Texte trop long !", sinon, affichez "Texte de longueur acceptable."
*/

import { ref, computed } from 'vue';


const inputValue = ref("")
const computedValue = computed( () => {
    return inputValue.value.length
})
const conputedText = computed( () => {
    return computedValue.value > 5 ? ' Texte trop long !' : 'Texte de longueur acceptable.'
})


</script>

<template>
    <input type="text" v-model="inputValue">
    {{ computedValue }}

    <p>{{ conputedText }}</p>

    <p v-if="computedValue > 5">
        Texte trop long !
    </p>
    <p v-else>
        Texte de longueur acceptable.
    </p>
    
</template>

<style scoped>
</style>
