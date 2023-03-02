<script setup>
const name = 'Vue Dinamico'
const styleColor = "color: white"
const arrayColores = ["green", "white", "orange"]
const active = null
</script>

<template>
  <h1> Hola {{ name.toUpperCase() }}</h1>
  <br>
  <h2> {{ arrayColores }}</h2>
  <br>
  <h2 :style="`color:${arrayColores[2]}`"> Soy Naranja </h2>
  <br>
  <h2>
    {{ active ? 'Estoy activo' : 'Estoy inactivo' }}
  </h2>
  <br>
  <p v-if= "active === true">Estoy activo</p>
  <p v-else-if ="active === false">Estoy inactivo</p>
  <p v-else>Esto indeciso</p>
</template>

<style>
h1{
  color:aqua;
}
</style>