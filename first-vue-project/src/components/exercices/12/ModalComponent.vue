<script setup>

const props = defineProps({
    isOpen : Boolean
})


</script>

<template>
    <div v-if="isOpen">
        <h1>Ceci est un modal !</h1>
        <button @click="$emit('closeModal')">Fermer </button>
    </div>
</template>

<style scoped>
</style>
