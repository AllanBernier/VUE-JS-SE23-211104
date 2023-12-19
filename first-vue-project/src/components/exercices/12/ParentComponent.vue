<script setup>
/**
Objectif :
Mettre en pratique l'utilisation des émissions d'événements ($emit) pour créer et contrôler un composant modal dans Vue.js.

Instructions :

Composant Parent :
Dans le composant parent, déclarez une variable isModalOpen avec une valeur initiale de false.
Ajoutez un bouton "Ouvrir Modal" dans le modèle qui, lorsqu'il est cliqué, modifie la valeur de isModalOpen pour ouvrir le modal.

Composant Enfant (ModalComponent) :
Configurez ModalComponent pour recevoir une prop appelée isOpen qui indiquera s'il doit être ouvert ou fermé.
Utilisez une directive v-if pour afficher le modal uniquement lorsque la prop isOpen est true.
Le modal doit contenir un message "Ceci est un modal !" et un bouton "Fermer" pour fermer le modal.
Émission d'Événement pour Fermer le Modal :

Ajoutez un gestionnaire de clic au bouton "Fermer" dans le composant enfant (ModalComponent).
Utilisez $emit pour déclencher un événement appelé "closeModal". Ce sera capturé par le composant parent.
Capturer l'Événement et Fermer le Modal :

Dans le composant parent, ajoutez un écouteur d'événements pour "closeModal". Lorsque cet événement est capturé, modifiez la valeur de isModalOpen pour fermer le modal.
*/
</script>

<template>
</template>

<style scoped>
</style>
