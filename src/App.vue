<template>
  <div>
    <h1 class="text-center text-5xl text-sky-500 font-bold mb-6">pokemon</h1>
    <div>
      <div class="grid grid-cols-5">
        <!-- <div v-if="posts.length"> -->
        <!-- <Card v-if="showPosts" :contents="filteredPosts" /> -->
        <Card />
      </div>
      <div>
        <!-- <div v-else class="text-center text-3xl text-slate-900 font-bold"> -->
        Loading...
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from './components/Card.vue';
import getPosts from './composables/getPost'
import { computed } from 'vue';

// const { posts, error, load, showPosts, allTags, filteredPosts, filterPostsByTag } = getPosts();
// load()
// const tags = computed(() => allTags());

// return { posts, error, showPosts, tags, filteredPosts, filterPostsByTag }
</script>

<style scoped></style>