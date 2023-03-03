<script setup>
import { useRoute, useRouter } from "vue-router";
import {} from "@/composables/getData";
import { useGetData } from "../composables/getData";

const route = useRoute();
const router = useRouter();

const { getData, data, loading, errorData } = useGetData();

const back = () => {
  router.push("/pokemons");
};

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
</script>

<template>
  <p v-if="loading">Cargando Información</p>
  <div class="alert alert-danger mt-2" v-if="errorData">{{ errorData }}</div>
  <div v-if="data">
    <h1>Pokemon name: {{ $route.params.name }}</h1>
    <img :src="data.sprites?.front_default" alt="" />
    <h2 v-for="ability in data.abilities">
      Ability: {{ ability["ability"]["name"] }}
    </h2>
    <h2>STATS</h2>
    <h2 v-for="stat in data.stats">
      Name: "{{ stat.stat.name }}" --- Base stat: {{ stat.base_stat }}
    </h2>
  </div>
  <button class="btn btn-outline-primary" @click="back">Back</button>
</template>
