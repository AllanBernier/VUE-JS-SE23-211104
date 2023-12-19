<script setup>
/**
Événement de clic :
Ajoutez un élément interactif (bouton, image, etc.) dans le modèle.

Réaction au clic :
Utilisez @click pour lier cet élément à une méthode handleClick.

Action de la méthode :
Dans handleClick, effectuez une action (par exemple, console.log, modification de propriété).

Personnalisation :
Ajoutez une fonctionnalité supplémentaire (effet visuel, changement de texte) en utilisant @click.

*/

import { ref } from 'vue';

let clicked = ref(false)
</script>

<template>
    <button v-on:click="clicked = !clicked">Click me </button>


    {{ clicked }}

</template>

<style scoped>
</style>
