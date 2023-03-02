<script setup>
import {ref, computed} from 'vue'

const counter = ref(0)

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
</script>

<template>
  <h1> ¡Computed! </h1>
  <h2 :class="classCounter">{{ counter }}</h2>
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
.zero{
  color: white;
}
</style>