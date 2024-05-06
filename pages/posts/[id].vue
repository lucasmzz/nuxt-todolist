<template>
  <NuxtLink to="/posts">Back to Posts</NuxtLink>
  <h2>{{ post ? post.title : "No post found..." }}</h2>
  <small>{{ post.body }}</small>
</template>

<script setup>
import { useRoute } from "vue-router";
import { usePostsStore } from "~/stores/posts";

const route = useRoute();
const postsStore = usePostsStore();

const post = computed(() => postsStore.getPostById(parseInt(route.params.id)));
</script>
