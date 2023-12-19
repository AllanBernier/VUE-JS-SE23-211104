<script setup>
import { defineProps, ref } from 'vue';


let props = defineProps({
    title: {
        type: String,
        default : "Rainbow Title Props"
    }
})


let myClass = ref("")

const changeColor = (value) => {
    myClass.value = value;
}
</script>

<template>

<h1 :class="myClass">{{ title }}</h1>

<button @click="changeColor('blue')">Blue</button> 
<button @click="changeColor('red')">Red</button> 

</template>

<style scoped>

.blue {
    color: blue;
}
.red{
    color: red;
}
</style>