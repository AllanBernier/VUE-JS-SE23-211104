<script setup>
/**
Initialisation du Projet :

Utilisez Vue CLI pour créer un nouveau projet Vue.js.
Configurez une instance Vue dans le composant principal de l'application.
Affichage de la Liste de Tâches :

Dans le data de l'instance Vue, déclarez une variable tasks contenant une liste de tâches (chaque tâche est un objet avec une propriété name).
Utilisez une directive v-for pour afficher chaque tâche dans le modèle. (Chaque taches doit être dans son propre composent)

Ajout de Nouvelles Tâches :

Ajoutez un champ de saisie et un bouton "Ajouter" au modèle.
Utilisez v-model pour lier le champ de saisie à une nouvelle variable newTask.
Créez une méthode qui ajoute une nouvelle tâche à la liste lorsque le bouton "Ajouter" est cliqué.
Marquer une Tâche Comme Complétée :

Ajoutez une propriété completed à chaque tâche dans la liste (initialisez-la à false).
Utilisez v-bind pour conditionner l'affichage des tâches en fonction de leur état (completed).
Ajoutez un bouton à chaque tâche pour la marquer comme complétée. Mettez à jour la propriété completed en conséquence.
Suppression de Tâches :

Ajoutez un bouton "Supprimer" à chaque tâche.
Créez une méthode pour supprimer la tâche correspondante de la liste lorsque le bouton "Supprimer" est cliqué.
Ajouter un component confirmDialog confirmant la suppression de la tâche.

Ajoutez une fonctionnalité de filtrage pour afficher uniquement les tâches non complétées.
Ajoutez des transitions pour améliorer l'expérience utilisateur lors de l'ajout ou de la suppression de tâches.
Ajoutez une date de fin prévu à chaque tâches et affichez en rouges les tâches non terminé ayant dépassé leurs date de fin
*/
import { ref } from 'vue';
import TaskLine from '@/components/exercices/TP/TaskLine.vue'

const tasks = ref([
    { name : "task 2", completed : false, deadline : new Date(2022, 10, 25)},
    { name : "task 3", completed : true , deadline : new Date(2025, 10 ,25)},
    { name : "task 1", completed : true , deadline : new Date()},
    { name : "task 4", completed : false , deadline : new Date()},
])

const filtedTask = ref(tasks.value)
const showCompleted = ref(false)

const taskNameToAdd = ref("")
const taskDateToAdd = ref(new Date())



const hideCompleted = () => {
    showCompleted.value = !showCompleted.value
    filterCompleted()
}

const filterCompleted = () => {
    if (showCompleted.value){
        filtedTask.value = tasks.value.filter( (t) => !t.completed )
    } else {
        filtedTask.value = tasks.value
    }
}


const addTask = () => {

    tasks.value.push({
        name : taskNameToAdd.value, completed : false, deadline : new Date(taskDateToAdd.value)})
    taskNameToAdd.value = ""
    taskDateToAdd.value = new Date()
    filterCompleted()
}

const completeTask = (task) => {
    task.completed = ! task.completed
    filterCompleted()
}

const deleteTask = (task) => {
    tasks.value.splice(task ,1 )
}

</script>

<template>
    <h1>TP TASK</h1>



    <input type="text" v-model="taskNameToAdd" @keydown.enter="addTask">
    <input type="date" v-model="taskDateToAdd">
    <button @click="addTask">Ajouter</button>

    <button @click="hideCompleted">Hide Completed</button>

    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>DeadLine</th>
                <th>Actions</th>
            </tr>
        </thead>

        <TransitionGroup name="list" tag="tbody">
            <task-line 
                v-for="task in filtedTask" :key="task.name"
                :task="task"
                @completedTask="completeTask"
                @deleteTask="deleteTask"
            />
        </TransitionGroup>
    </table>

</template>

<style scoped>


.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

</style>
