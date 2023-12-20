<script setup>
import { ref } from 'vue';
import TaskLine from '@/components/exercices/TPStore/TaskLine.vue'
import defineTodo from '@/stores/toDoStore.js'
import { storeToRefs } from 'pinia'


import { useMouse } from "./useMouse.js";
const {x, y} = useMouse();

const todo = defineTodo()

const { nameToAdd, dateToAdd, filterCompleted} = storeToRefs(todo)

</script>

<template>
    <h1>TP TASK</h1>



    <input type="text" v-model="nameToAdd" @keydown.enter="todo.add()">
    <input type="date" v-model="dateToAdd">
    <button @click="todo.add()">Ajouter</button>

    <button @click="todo.hide()">Hide Completed</button>

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
                v-for="task in filterCompleted" :key="task.name"
                :task="task"
                @completedTask="todo.completed()"
                @deleteTask="todo.delete"
            />
        </TransitionGroup>
    </table>


    x : {{ x }}

    <br />

    y : {{ y }}
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
