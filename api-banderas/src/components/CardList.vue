<template>
  <div class="row">
    <div class="col-12" v-for="pais in paises" :key="pais.name.common">
      <Card :pais="pais"></Card>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./Card";
export default {
  components: {
    Card,
  },
  setup() {
    const paises = computed(() => {
      return store.getters.topPaisesPoblacion;
    });

    const store = useStore();
    onMounted(async() => {
      await store.dispatch("getPaises");
      await store.dispatch("filtrarRegion","Americas")
    });

    return { paises };
  },
};
</script>
