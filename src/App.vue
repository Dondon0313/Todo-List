<template>
  <div class="min-h-screen bg-gray-100 flex justify-center items-start py-12 px-4">
    <div class="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
      <h1 class="text-2xl font-bold text-center mb-6">Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  </div>
</template>



<script setup>
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<style scoped>

</style>
