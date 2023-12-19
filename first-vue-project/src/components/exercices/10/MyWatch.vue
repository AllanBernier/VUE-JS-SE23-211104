<script setup>
/**
Objectif :
Pratiquer l'utilisation de la directive watch pour observer une variable et filtrer une liste de tâches en fonction de cette variable.

Instructions :

X Déclarez une variable tasks avec une liste de tâches. Chaque tâche devrait être un objet avec une propriété name.
X Déclarez une variable search avec une valeur initiale "".
X Ajoutez un champ de recherche (input) dans le modèle lié à la variable search à l'aide de la directive v-model.
X Déclarez une variable filteredTasks avec une valeur initiale égale à la liste complète des tâches.
X Affichez la liste des tâches filtrées (filteredTasks) dans le modèle. Utilisez v-for pour itérer sur les tâches et affichez le nom de chaque tâche dans un élément de liste (li).

Utilisez la directive watch pour observer les changements de la variable search.
À chaque changement de search, mettez à jour la variable filteredTasks pour inclure uniquement les tâches dont le nom contient la valeur de search. Vous pouvez utiliser la méthode filter pour cela.
*/
import { ref, watch } from 'vue';
import { debounce } from 'lodash'

const tasks = ref([
{
        title : "Tata 1"
    },
    {
        title : "Tati 2"
    },
    {
        title : "Lala 3"
    },
    {
        title : "Lolo 4"
    }
])

const filteredTasks = ref(tasks.value)

const search = ref("")

watch( search, debounce( () => {
    filteredTasks.value = tasks.value.filter( (t) => t.title.includes(search.value) )
}, 500))

</script>

<template>
    <input v-model="search" type="text" />
    <button @click="search = ''">X</button>
    <ul>
        <li v-for="task in filteredTasks">
            {{task.title}}
        </li>
    </ul>
</template>

<style scoped>
</style>
