<template>
    <div  v-for="item in posts" :key="item.id" class="flex gap-4 bg-sky-100 rounded-3xl p-4 m-2 shadow-lg">
        <div>
            <h1 class="font-bold">ID: <span class="text-sky-600">{{ item.id }}</span></h1>
            <h1 class="font-bold">Name: <span class="text-sky-600">{{ item.name }}</span></h1>
            <p class="font-bold">Base Experience: <span class="text-sky-600">{{ item.url }}</span></p>
            <p class="font-bold">Weight: <span class="text-sky-600"></span></p>
            <p class="font-bold">Stat: <span class="text-sky-600"></span></p>
        </div>
        <img src="" alt="image">
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/results')
            if (!data.ok) {
                throw Error('No data available, refresh')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    load();
</script>

<style scoped>

</style>