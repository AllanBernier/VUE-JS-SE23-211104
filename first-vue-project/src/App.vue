<script setup>

import { useRouter } from 'vue-router'
const router = useRouter()

const redirect = (url) => {
    router.push(url)
}


</script>

<template>
    <router-link to="/"> Home </router-link>
    <router-link to="/task"> Task </router-link>

    <router-link to="/HelloWorld"> HelloWorld </router-link>
    <router-link to="/ClickComponent"> ClickComponent </router-link>
    <router-link to="/ReactiveVarsExercise"> ReactiveVarsExercice </router-link>
    <router-link to="/DataBinding"> DataBinding </router-link>
    <router-link to="/DirectiveOn"> DirectiveOn </router-link>
    <router-link to="/UserForm"> UserForm </router-link>
    <router-link to="/ConditionalScoreRendering"> ConditionalScoreRendering </router-link>
    <router-link to="/ToDoList"> ToDoList </router-link>

    <br>
    <router-link to="/StoreExemple"> StoreExemple </router-link>


    <button @click="redirect('/ComputedField')">
        09
    </button>

    <button @click="redirect('/MyWatch')">
        10
    </button>


    <br>

    <router-view />
</template>

<style scoped>
</style>
