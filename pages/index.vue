<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <h4>This is an auto-imported component.</h4>
  </div>
</template>

<script setup>
import { usePostsStore } from "~/stores/posts";

const postsStore = usePostsStore();
await postsStore.fetchPosts();
</script>
