import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", () => {
  const posts = ref({});

  const fetchPosts = async () => {
    const { data } = await useFetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    if (data.value) {
      data.value.forEach(p => {
        posts.value[p.id] = p
      })
    }
  };
  
  const getPostById = (id) => posts.value[id]

  return { posts, fetchPosts, getPostById };
});
