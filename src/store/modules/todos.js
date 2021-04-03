// import axios from 'axios'

import axios from "axios"

const state = {
    todos : []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({ commit }) {
        const res =  await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setTodos' ,res.data)
    },

    async addTodo({commit}, todo) {
        const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {title:todo, completed:false})
        commit('newTodo', res.data)
    },

    async deleteTodo({commit}, id) {
        const res = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        console.log(res.status)
        commit('removeTodo', id)
    },

    async toggleTodo({commit},e){
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${e}`)
        commit('setTodos', res.data)
    },

    async updateTodo({commit}, updTodo){
        const res = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo)
        console.log(res.status)
        commit('toggleTodo', res.data)
    }
}

const mutations = {
    setTodos: (state, todos) => state.todos = todos,
    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    toggleTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)
        if(index !== -1){
            state.todos.splice(index, 1, updTodo)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}