<template>
  <div class="posts">
    <h1>Posts</h1>
    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
      >
        <RouterLink :to="`/postDetail/${post.id}`">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
    <textarea v-autofocus />
    <div>
      <button
        class="counter-button"
        :class="{ yellow: oddOrEven === 'odd' }"
        @click="increaseCounter(1)"
      >
        {{ counterData.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { vAutofocus } from "@/directives/vAutofocus"
import { useCounter } from "@/use/useCounter.js"

/*
  posts
*/
const posts = ref([
  {
    id: "id1",
    title: "Post 1",
  },
  {
    id: "id2",
    title: "Post 2",
  },
  {
    id: "id3",
    title: "Post 3",
  },
])

const { counterData, increaseCounter, oddOrEven } = useCounter()
</script>

<style scoped>
ul {
  margin-bottom: 30px;
}
.counter-button {
  font-size: 60px;
  width: 100%;
  background: pink;
}
.yellow {
  background: yellowgreen;
}
</style>
