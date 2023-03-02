<script setup>
import {ref} from 'vue'

const saludo = 'desconocido!'

const counter = ref(0)

//metodo - methods
const increment = () => counter.value++

</script>

<template>
  <h1> ¡Variables reactivas!</h1>
  <h2>{{ counter }}</h2>
  <button @click="increment()">Incrementar</button>
</template>

<style>
h1 {
  color: aqua;
}
</style>