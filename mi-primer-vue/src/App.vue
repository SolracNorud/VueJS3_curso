<script setup>
import { ref, computed } from 'vue'

const counter = ref(0)
const arrayFav = ref([])

//metodo - methods
const increment = () => counter.value++
const decrement = () => counter.value--
const reset = () => counter.value = 0

const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  }
  return counter.value > 0 ? "positive" : "negative";
});

const add = () => arrayFav.value.push(counter.value)

const bloquearBtnAdd = computed(() => {
  const numSearch = arrayFav.value.find(num => num === counter.value)
  // if (numSearch === 0) return true
  // return numSearch ? true : false
  return numSearch || numSearch === 0
})
</script>

<template>
  <h1> ¡Práctica 2! </h1>
  <h2 :class="classCounter">{{ counter }}</h2>
  <button @click="increment()">Incrementar</button>
  <button @click="decrement()">Decrementar</button>
  <button @click="reset()">Restablecer</button>
  <button @click="add(counter)" :disabled="bloquearBtnAdd">Favorito</button>
  <ul>
    <li v-for="(num, index) in arrayFav" :key="index"> {{ num }}</li>
  </ul>

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

.zero {
  color: white;
}</style>