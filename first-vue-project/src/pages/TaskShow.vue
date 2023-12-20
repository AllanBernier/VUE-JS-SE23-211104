<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

console.log(route.params.id)

</script>


<template>
    <div>
        {{ route.params.id }}
    </div>
</template>

<style scoped>
</style>