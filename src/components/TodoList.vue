<template>
    <ul class="space-y-2">
        <li 
        v-for="todo in todoStore.todos" 
        :key="todo.id"
        class="flex items-center justify-between bg-white shadow-md rounded-md px-4 py-2"
        >
        <div class="flex items-center gap-2">
            <input 
            type="checkbox" 
            v-model="todo.completed" 
            @change="todoStore.toggleTodo(todo.id)" 
            class="w-5 h-5"
            />
            <span 
            :class="{
            'line-through text-gray-400': todo.completed, 
            'text-gray-800': !todo.completed       
          }"
        >
          {{ todo.text }}
            </span>
        </div>
            <button 
            @click="todoStore.removeTodo(todo.id)"
            class="text-sm text-red-500 hover:underline"
            >刪除</button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/store/useTodoStore';

const todoStore = useTodoStore()


</script>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>