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
  <div class="container text-center mt-3">
    <h1> ¡Deploy! </h1>
    <h2 :class="classCounter">{{ counter }}</h2>
    <div class="btn-group">
      <button @click="increment()" class="btn btn-success">Incrementar</button>
      <button @click="decrement()" class="btn btn-danger">Decrementar</button>
      <button @click="reset()" class="btn btn-secondary">Restablecer</button>
      <button @click="add(counter)" :disabled="bloquearBtnAdd" class="btn btn-primary">Favorito</button>
    </div>
    <ul class="list-group mt-4">
      <li class="list-group-item" v-for="(num, index) in arrayFav" :key="index"> {{ num }}</li>
    </ul>
  </div>
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
}
</style>