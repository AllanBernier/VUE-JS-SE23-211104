<script setup>

const props = defineProps({
    customMessage : String
})


</script>

<template>
    <p v-if="customMessage.includes('Vue')">
        Message spécial pour les amateurs de Vue !
    </p>

    <p v-else>
        Message ordinaire
    </p>
</template>

<style scoped>
</style>
