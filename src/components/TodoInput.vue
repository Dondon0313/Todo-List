<template>
    <div>
        <input v-model="newTodo" placeholder="新增代辦事項" @keyup.enter="addTodo">
        <button @click="addTodo">新增</button>
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