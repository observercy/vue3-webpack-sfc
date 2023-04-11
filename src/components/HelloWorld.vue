<template>
    <div>
        <h1 v-color>{{ value.message }}</h1>
        <input v-focus />
    </div>
</template>

<script setup>
import { inject } from 'vue'

const value = inject('data')
console.log(value)


</script>