<script setup>
/**
Créez deux compteurs, l'un géré avec ref et l'autre avec reactive. Affichez ces compteurs dans le modèle.

Ajoutez des boutons pour incrémenter et décrémenter chaque compteur.

Affichez la somme des deux compteurs.

Ajoutez un champ de texte qui permet de mettre à jour la valeur d'un des compteurs directement.

Bonus : Ajoutez une fonctionnalité pour réinitialiser les compteurs à zéro.

Astuces :
Utilisez ref pour créer des références réactives simples.
Utilisez reactive pour créer un objet réactif contenant plusieurs propriétés.
*/

import { ref, reactive } from 'vue';

const counter = ref(0)
const data = reactive({ counter : 0})

</script>

<template>
    <input type="number" v-model="counter">
    <button @click="counter ++">+</button>
    <button @click="counter --">-</button>
    <button @click="counter = 0">reset</button>

    <br>
    <input type="number" v-model="data.counter">
    <button @click="data.counter ++">+</button>
    <button @click="data.counter --">-</button>
    <button @click="data.counter = 0">reset</button>

    <br>
    {{ data.counter + counter }}

</template>

<style scoped>

</style>
