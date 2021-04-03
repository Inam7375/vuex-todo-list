<template>
    <div>
        Filter:
        <select @change="logIndex($event.target)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="20">20</option>
            <option value="10">10</option>
        </select>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'LimitTodo',
    methods: {
        ...mapActions(['toggleTodo']), 
        logIndex(e){
            this.toggleTodo(e.options[e.options.selectedIndex].innerText)
        }
    }
}
</script>

<style>

</style>