<script setup>
const saludo = 'desconocido!'

//metodo - methods
const handleClick = message => console.log(message)
</script>

<template>
  <h1> ¡Hola {{ saludo }}</h1>
  <button v-on:click="handleClick('¡Me activaste 1!')">Activame 1</button>
  <br>
  <button @:click="handleClick('¡Me activaste 2!')">Activame 2</button>
</template>

<style>
h1 {
  color: aqua;
}
</style>