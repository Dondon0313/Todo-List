<template>
    <div>
        <input 
        v-model="newTodo" placeholder="新增代辦事項" 
        @keyup.enter="addTodo"
        class="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        
        <button 
        @click="addTodo"
        class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >新增</button>
    </div>

</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useTodoStore } from '@/store/useTodoStore';

const todoStore = useTodoStore();
const newTodo = ref('');

function addTodo() {
    if(newTodo.value.trim()) {
        todoStore.addTodo(newTodo.value);
        newTodo.value ='';
    }
}



</script>

<style scoped>
input {
    border: 1px solid #ccc;
    padding: 8px;
}

button {
    margin-left: 10px;
}
</style>