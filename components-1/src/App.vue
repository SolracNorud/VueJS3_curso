<script setup>
import { ref, computed, onMounted } from "vue";
import BlogPost from "./components/BlogPost.vue";
import PaginatePost from "./components/PaginatePost.vue";
import LoadingSpinner from "./components/LoadingSpinner.vue";

const posts = ref([]);
const postXpage = 10;
const inicio = ref(0);
const fin = ref(postXpage);
const favorito = ref("");
const loading = ref(true);

const cambiarFavorito = (title) => {
  favorito.value = title;
};

const next = () => {
  inicio.value += +postXpage;
  fin.value += +postXpage;
};

const previous = () => {
  inicio.value += -postXpage;
  fin.value += -postXpage;
};

// onMounted(async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     posts.value = await res.json();
//   } catch (error) {
//     console.log(error);
//   } finally {
//     setTimeout(() => {
//       loading.value = false;
//     }, 2000);
//   }
// });

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     posts.value = data;
//   })
//   .finally(() => {
//     setTimeout(()=>{
//         loading.value = false
//     }, 2000)
//   });


const fetchData = (async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 2000);
  }
});
fetchData();
const maxLength = computed(() => posts.value.length);
</script>

<template>
  <LoadingSpinner v-if="loading" />
  <div class="container" v-else>
    <h1>APP</h1>

    <h2>Mis Post Favorito: {{ favorito }}</h2>

    <PaginatePost
      :inicio="inicio"
      :fin="fin"
      class="mb-2"
      @next="next()"
      @previous="previous()"
      :maxLength="maxLength"
    />

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"
      class="mb-2"
    >
    </BlogPost>
  </div>
</template>

<style></style>
