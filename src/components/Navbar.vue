<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="bg-white border-b border-gray-100">
    <div class="container mx-auto px-4 py-4">
      <div class="flex justify-between items-center">
        <RouterLink to="/" class="flex items-center space-x-2">
          <div class="w-8 h-8 bg-purple-600 rounded-full"></div>
          <span class="text-xl font-semibold">Pi-Lend Bloom</span>
        </RouterLink>

        <div class="flex items-center space-x-8">
          <RouterLink to="/" class="text-gray-600 hover:text-gray-900">Home</RouterLink>
          <RouterLink to="/loans" class="text-gray-600 hover:text-gray-900">Borrow</RouterLink>
          <RouterLink to="/lending" class="text-gray-600 hover:text-gray-900">Lend</RouterLink>
          <RouterLink to="/dashboard" class="text-gray-600 hover:text-gray-900">Comment ça marche</RouterLink>
          
          <div class="flex items-center space-x-4">
            <select class="bg-transparent text-gray-600">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
            
            <button class="text-gray-600">Login with Pi</button>
            <button class="bg-purple-600 text-white px-4 py-2 rounded-full">Register</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>