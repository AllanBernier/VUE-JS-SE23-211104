
<script setup>
/**
Créez une variable appelée isRed avec la valeur initiale false.

Utilisez la directive v-bind pour lier la classe CSS conditionnellement. Si isRed est vrai, appliquez la classe CSS "red", sinon, n'appliquez aucune classe.

Ajoutez un bouton qui inverse l'état de isRed lorsque vous cliquez dessus.

Créez un paragraphe avec du texte, et appliquez la classe conditionnelle à ce paragraphe.

Expérimentez en ajoutant une autre variable fontSize avec une valeur initiale.

Utilisez v-bind pour lier la taille de la police du paragraphe à la valeur de fontSize.

Ajoutez un champ de texte qui permet à l'utilisateur de mettre à jour la valeur de fontSize en temps réel.
*/

import { reactive } from 'vue';


const style = reactive({
    isRed : true,
    fontSize : 12
})


</script>

<template>
    <button v-on:click="style.isRed = !style.isRed"> Change color </button>
    <input type="number" v-model="style.fontSize">

    <p v-bind:class="{'red' : style.isRed}"
        v-bind:style="{fontSize : style.fontSize + 'px'}">
        This is a paragraphe
    </p>

</template>

<style scoped>

    .red {
        color: red;
    }
</style>
