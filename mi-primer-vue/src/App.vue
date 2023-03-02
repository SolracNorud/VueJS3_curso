<script setup>
import {ref} from 'vue'

const counter = ref(0)

//metodo - methods
const increment = () => counter.value++
const decrement = () => counter.value--
const reset = () => counter.value = 0

if (counter.value < 0){
  color.value  = ref(1)
}
</script>

<template>
  <h1> ¡Práctica! </h1>
  <h2 :class="counter > 0 ? 'positive' : 'negative' ">{{ counter }}</h2>
  <button @click="increment()">Incrementar</button>
  <button @click="decrement()">Decrementar</button>
  <button @click="reset()">Restablecer</button>

</template>

<style>
h1 {
  color: aqua;
}
.positive {
  color: green;
}
.negative {
  color: red;
}
</style>