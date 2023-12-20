<script setup>
/**
 * Affichez ce composant
 * 
 * 1. Script import HelloWorld from '@/components/exercices/01/Helloworld.vue';
 * 2. Template : <hello-world /> ou <HelloWorld />
 */

import useCounter from '@/stores/counterStore.js'

const counterStore = useCounter();


</script>

<template>
  <div>
    <h3>
      You've successfully created a project with


      {{ counterStore.count }}
    </h3>
  </div>
</template>

<style scoped>
</style>
