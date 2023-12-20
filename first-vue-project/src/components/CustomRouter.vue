<script setup>

import router from '@/router/index.js'
import Ex11 from '@/components/exercices/11/ParentComponent.vue'
import Ex12 from '@/components/exercices/12/ParentComponent.vue'
import TaskList from '@/components/exercices/TP/TaskList.vue'

const redirect = (name) => {
    router.push(`/CustomRouter/${name}`)
}

</script>

<template>
    <button @click="redirect('Props')"> Props </button>
    <button @click="redirect('Emit')"> Emit </button>
    <button @click="redirect('Task')"> Task </button>

    <Ex11 v-if="$route.params.name === 'Props'" />
    <Ex12 v-else-if="$route.params.name === 'Emit'" />
    <TaskList v-else-if="$route.params.name === 'Task'" />
    <div v-else > 
        Unknown exercice
    </div>
</template>


<style scoped>
</style>