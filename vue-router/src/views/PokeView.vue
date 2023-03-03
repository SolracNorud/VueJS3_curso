<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const back = () => {
  router.push("/pokemons");
};
const poke = ref({});

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.name}`
    );
    console.log(data);
    poke.value = data;
  } catch (error) {
    console.log(error);
    poke.value = null;
  }
};

getData();
</script>

<template>
  <div v-if="poke">
    <h1>Pokemon name: {{ $route.params.name }}</h1>
    <img :src="poke.sprites?.front_default" alt="" />
    <h2 v-for="ability in poke.abilities">
      Ability: {{ ability["ability"]["name"] }}
    </h2>
    <h2>STATS</h2>
    <h2 v-for="stat in poke.stats">
      Name: "{{ stat.stat.name }}" --- Base stat: {{ stat.base_stat }}
    </h2>
  </div>
  <h1 v-else>No existe este pokemon</h1>
  <button class="btn btn-outline-primary" @click="back">Back</button>
</template>
