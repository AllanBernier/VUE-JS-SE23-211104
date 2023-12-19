<script setup>
/**
Créez une variable message avec une valeur initiale.
Ajoutez un paragraphe dans le modèle qui affiche le contenu de la variable message.
Ajoutez un bouton avec le texte "Changer le message".
Utilisez la directive v-on pour écouter l'événement de clic sur le bouton et déclencher une méthode updateMessage.
Implémentez la méthode updateMessage dans le composant. Cette méthode doit changer la valeur de la variable message pour un nouveau message.
Ajoutez un champ de texte dans le modèle.
Utilisez v-on pour écouter l'événement de saisie de texte (input) et déclencher une méthode updateMessage à chaque modification.
Implémentez la méthode updateMessage qui met à jour la variable message avec la valeur saisie dans le champ de texte.
Astuces :
v-on peut être utilisé pour écouter différents types d'événements, comme les clics, les saisies de texte, les survols de la souris, etc.
*/

import { ref } from 'vue';

const message = ref("Mon message")
const updateMessage = (msg) => {
    message.value = msg
}

</script>

<template>
    <p @mouseover="updateMessage('Mouse Over')">{{ message }}</p>

    <button @click="updateMessage('Mon message')">Changer le message</button>
    <input type="text" @input="(e)=> updateMessage(e.target.value)" >
</template>

<style scoped>
</style>
