<script setup>
/**
Créez une variable score avec une valeur initiale.
Utilisez les directives v-if, v-else-if, et v-else pour effectuer un rendu conditionnel en fonction de la valeur de score.
Affichez les messages suivants en fonction de la valeur de score :
Si score est supérieur à 90, affichez "Excellent !"
Si score est compris entre 70 et 90, affichez "Bien joué !"
Si score est inférieur à 70, affichez "Peut faire mieux."
Ajoutez un bouton pour permettre à l'utilisateur de générer une nouvelle valeur pour score.
*/

import { ref } from 'vue';


const score = ref(0)

const newScore = () => {
    score.value = Math.floor( Math.random() * 100 )
}
</script>

<template>
    <h1>{{score}}</h1>
    <h3 v-if="score > 90">Excellent !</h3>
    <h3 v-else-if="score > 70"> Bien joué !</h3>
    <h3 v-else>Peut faire mieux.</h3>

    <button @click="newScore">Reset</button>
</template>

<style scoped>
</style>
