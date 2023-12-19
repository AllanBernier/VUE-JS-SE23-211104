<script setup>
/**
Objectif :
Pratiquer l'utilisation de la directive watch pour observer une variable et filtrer une liste de tâches en fonction de cette variable.

Instructions :

Déclarez une variable tasks avec une liste de tâches. Chaque tâche devrait être un objet avec une propriété name.
Déclarez une variable search avec une valeur initiale vide.
Ajoutez un champ de recherche (input) dans le modèle lié à la variable search à l'aide de la directive v-model.
Déclarez une variable filteredTasks avec une valeur initiale égale à la liste complète des tâches.
Affichez la liste des tâches filtrées (filteredTasks) dans le modèle. Utilisez v-for pour itérer sur les tâches et affichez le nom de chaque tâche dans un élément de liste (li).

Utilisez la directive watch pour observer les changements de la variable search.
À chaque changement de search, mettez à jour la variable filteredTasks pour inclure uniquement les tâches dont le nom contient la valeur de search. Vous pouvez utiliser la méthode filter pour cela.
*/
</script>

<template>
</template>

<style scoped>
</style>
