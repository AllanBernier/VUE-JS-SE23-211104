<script setup lang="ts">
import { ref, onMounted } from 'vue';


let props = defineProps({
    counterDefault: {
        type: Number,
        default: 0
    },
})

let counter = ref(0);

const submit = () => {
    counter.value += 1;
}

onMounted(() => {
    counter.value = props.counterDefault; 
})


</script>

<template>
    <h1 @click="submit">Counter {{ counter }}</h1>

    <h2 v-if="counter > 10"> Geater than 10 </h2>
    <h2 v-else-if="counter > 5"> Greater than 5</h2>
    <h2 v-else> Less than 5 </h2>

    <h2>{{ counter > 10 ? 'Geater than 10' 
    : counter > 5 ? 'Greater than 5' 
    : 'Less than 5 '  }}</h2>

</template>

<style scoped>
</style>