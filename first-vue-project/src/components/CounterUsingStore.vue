<script setup>

import useCounter from '@/stores/counterStore.js'
import { storeToRefs } from 'pinia'

const counterStore = useCounter();
const { completedTask } = storeToRefs(counterStore)

</script>

<template>
    <div>
        Hello world

        <button @click="counterStore.increment">+</button>
        <button @click="counterStore.decrement">-</button>

        {{ counterStore.count }}


        <div v-for="task in completedTask" :key="task.id">
            {{ task }}
        </div>

    </div>
</template>

<style scoped>
</style>