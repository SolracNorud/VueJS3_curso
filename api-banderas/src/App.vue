<template>
  <div class="container">
    <h1 class="text-center">Paises API</h1>
    <Continentes></Continentes>
    <Buscador></Buscador>
    <CardList></CardList>
  </div>
</template>

<script>
import CardList from './components/CardList.vue'
import Continentes from './components/Continente.vue'
import Buscador from './components/Buscador.vue'

export default {
  name: 'App',
  components: {
    CardList,
    Continentes,
    Buscador
  }
}
</script>

