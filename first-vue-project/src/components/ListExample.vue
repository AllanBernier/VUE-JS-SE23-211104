<script setup>
import { ref, reactive } from 'vue';

const myInput = ref("")

const array = reactive([10,20,25,30,35,40,45,50,55,60])

const obj = reactive({
    title : "Vue.js",
    author : "Jhon Doe",
    pages : 100
})

</script>

<template>
    
    <h1>{{ myInput }}</h1>
    <input type="text" v-model="myInput">
    <h1> Range </h1>
    <ul>
        <li v-for="i in 10">
            {{ i }}
        </li>
    </ul>
    <h1> Array </h1>
    <ul>
        <li v-for="i in array">
            {{ i }}
        </li>
    </ul>

    <h1> Object </h1>
    <ul>
        <li v-for="(value, key ) in obj">
            {{ key }} : {{ value }}
        </li>
    </ul>





</template>

<style scoped>

</style>
