<template>
<h1>Lista de Paises</h1>
<p v-for="(pais, index) in arrayData" :key="index">
<router-link :to="`/paises/${pais.name.official}`">
    {{ pais.name.official }}
</router-link>
</p>
</template>

<script>
import { useFetch } from '../hooks/useFetch'
export default {
    setup(){
        return {...useFetch('https://restcountries.com/v3.1/all')}
    }
}
</script>