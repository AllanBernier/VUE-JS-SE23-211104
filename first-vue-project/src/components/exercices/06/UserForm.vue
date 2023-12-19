<script setup>
/**
X Créez une variable user avec les propriétés name et email.
X Dans le modèle, créez un formulaire avec des champs de saisie pour le nom et l'e-mail. 
X Utilisez v-model pour lier ces champs de saisie aux propriétés name et email du user.
X Ajoutez un paragraphe dans le modèle qui affiche le contenu du user en temps réel.
X Utilisez v-on pour écouter l'événement de soumission du formulaire (submit) et déclencher une méthode submitForm.
X Implémentez la méthode submitForm dans le composant. Cette méthode doit afficher une alerte avec les données du user lorsque le formulaire est soumis.
X Ajoutez un bouton "Effacer le formulaire" avec un événement de clic qui déclenche une méthode clearForm.
X Implémentez la méthode clearForm qui réinitialise les propriétés name et email du user à une chaîne vide.
*/
import { reactive } from 'vue';


const user = reactive({
    name : "",
    email : ""
})

const submitForm = () => {
    alert(`User: {
        name : ${user.name},
        email : ${user.email}
    }`)
}

const resetForm = () => {
    user.name = ""
    user.email = ""
}

</script>

<template>
    <label for="name">Name :</label>
    <input type="text" id="name" v-model="user.name">

    <br>
    <label for="email">email :</label>
    <input type="text" id="email" v-model="user.email">

    <br>

    <button @click="submitForm">Submit</button>
    <button @click="resetForm">Reset</button>

    <br>
    
    <p>Nom : {{ user.name }} <br> Email : {{ user.email }}</p>

</template>

<style scoped>
</style>
