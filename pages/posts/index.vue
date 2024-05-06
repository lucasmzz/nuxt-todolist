<template>
  <h2>All Posts</h2>
  <div v-for="post in posts" v-bind:key="post.id">
    <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
  </div>
</template>

<script setup>
import { usePostsStore } from "~/stores/posts";

const postsStore = usePostsStore();

const posts = computed(() => Object.values(postsStore.posts));
</script>
