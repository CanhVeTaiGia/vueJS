<template>
  <div class="mt-2">
    <h2 class="text-3xl">Bài 3</h2>
    <v-card max-width="350">
      <v-img
        src="https://m.media-amazon.com/images/M/MV5BMWY0Y2RhY2YtYjhiNy00NzNlLTk0YzMtNzZiMTNhMzBkYTlkXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg"
        height="200px"
      >
        <v-card-title
          class="white--text"
          v-text="'Top 10 Australian beaches'"
        ></v-card-title>
      </v-img>
      <v-card-subtitle class="py-2">
        <span class="font-weight-bold">Number 10</span>
      </v-card-subtitle>
      <v-card-text>
        <div>Whitehaven Beach</div>
        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue" text @click="share">Share</v-btn>
        <v-btn color="orange" text @click="explore">Explore</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script setup></script>
<style></style>
