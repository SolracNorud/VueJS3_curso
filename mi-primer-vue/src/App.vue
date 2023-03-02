<script setup>
const name = 'Vue Dinamico'
const objetoFruta = {
  name: "Manzana",
  price: "$1.00",
  description: "Una manzana",
  id:1
}
</script>

<template>
  <h1> Hola {{ name.toUpperCase() }}</h1>
  <ul>
    <li v-for="(value, prop, index) in objetoFruta" :key="index">
      {{ index }} - {{ prop }} : {{ value }}
    </li>
  </ul>
</template>

<style>
h1 {
  color: aqua;
}
</style>