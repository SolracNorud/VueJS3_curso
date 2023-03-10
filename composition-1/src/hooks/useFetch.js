import { ref } from 'vue'

export function useFetch(url){
    const arrayData = ref([])

        const fetchData = async() =>{
            try {
                const res = await fetch(url)
                arrayData.value = await res.json()
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

        return {arrayData}
}