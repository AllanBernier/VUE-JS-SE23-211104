<script setup>
/**
X Créez une liste de tâches dans avec plusieurs objets, chaque objet ayant une propriété title représentant le nom de la tâche.
X Utilisez la directive v-for pour effectuer le rendu de la liste des tâches dans le modèle.
X Affichez le nom de chaque tâche dans un élément <li>.
X Ajoutez un bouton à côté de chaque tâche pour permettre à l'utilisateur de supprimer la tâche de la liste.
XU tilisez v-on pour écouter l'événement de clic sur le bouton et déclencher une méthode removeTask(index) qui supprime la tâche correspondante de la liste.
X Ajoutez un formulaire en bas de la liste pour permettre à l'utilisateur d'ajouter de nouvelles tâches.
Utilisez v-on pour écouter l'événement de soumission du formulaire (submit) et déclencher une méthode addTask qui ajoute une nouvelle tâche à la liste.
*/

import { ref } from 'vue';

const newTask = ref("")
const tasks = ref([
{
        title : "Tâche 1"
    },
    {
        title : "Tâche 2"
    },
    {
        title : "Tâche 3"
    },
    {
        title : "Tâche 4"
    }
])

const removeTask = (task) => {
    console.log(task)
    tasks.value = tasks.value.filter((t) => t.title !== task.title)
}

const addTask = () => {
    tasks.value.push({
        title : newTask.value
    })
    newTask.value = ""
}

</script>

<template>

    <h1>Liste de tâches</h1>

    <table>
        <thead>

        </thead>

        <tbody>
            <tr v-for="(task, index) in tasks">
                <td>{{ task.title }}</td>
                <td> <button @click="removeTask(task)">Supprimer</button> </td>
            </tr>
        </tbody>
    </table>

    <input type="text" v-model="newTask" @keydown.enter="addTask" >
    <button @click="addTask">Ajouter</button>

</template>

<style scoped>
</style>
