<template>
    <div>
      <div v-if="post">
        <h1>{{ post.title }}</h1>
        <p>{{ post.content }}</p>
      </div>
      <div v-else>
        <router-link to="/posts">Quay lại danh sách bài viết</router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const post = ref(null);
  const route = useRoute();
  
  onMounted(() => {
    const postId = parseInt(route.params.id);
    const posts = [
      { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1' },
      { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2' },
      { id: 3, title: 'Bài viết 3', content: 'Nội dung bài viết 3' }
    ];
    post.value = posts.find(p => p.id === postId);
  });
  </script>
  