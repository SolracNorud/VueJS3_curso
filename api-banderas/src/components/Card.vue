<template>
<div class="card mt-2">
    <div class="card-body">
        <h5 class="text-center">{{ pais.name.common }}</h5>
        <p class="text-center">
            <img :src="pais.flags.svg" :alt="`bandera-${pais.name.common}`" class="img-fluid w-50">
        </p>
        <p class="card-text">
            <span class="badge text-bg-dark d-block mb-1">Official: {{ pais.name.official }}</span>
            <span class="badge text-bg-info p-3 d-block mb-1">Population: {{ numFormat(pais.population) }}</span>
            <span class="badge text-bg-dark d-block mb-1">Capital: {{ pais.capital[0] }}</span>
            <span class="badge text-bg-dark d-block mb-1">Region: {{ pais.region }}</span>
        </p>
    </div>
</div>
</template>

<script>
export default {
    props: ['pais'],
    setup(){
        const numFormat = (num) => { 
            return new Intl.NumberFormat("de-DE").format(num)
         }

         return {numFormat}
    }
}
</script>