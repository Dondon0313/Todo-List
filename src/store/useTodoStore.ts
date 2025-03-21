import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Todo } from '../types/Todo';


export const useTodoStore = defineStore('todo', () => {
    const todos = ref<Todo []>([]);

    function addTodo(text: string) {
        todos.value.push({ id: Date.now(), text, completed: false});
    }

    function toggleTodo(id:number) {
        const todo = todos.value.find( todo => todo.id === id);
        if(todo) todo.completed = !todo.completed;
    }

    function removeTodo(id:number) {
        todos.value = todos.value.filter(todo => todo.id !==id);
    }

    return{ todos, addTodo, toggleTodo, removeTodo };


})