<template>
    <ul>
        <li v-for="todo in todoStore.todos" :key="todo.id">
            <input type="checkbox" v-model="todo.completed" @change="todoStore.toggleTodo(todo.id)" />
            <span :class="{ completed: todo.completed}">{{ todo.text }}</span>
            <button @click="todoStore.removeTodo(todo.id)"刪除></button>
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