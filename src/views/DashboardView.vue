<script setup lang="ts">
import { ref } from 'vue'

const userStats = ref({
  totalLoans: 0,
  activeLoans: 0,
  totalLending: 0,
  activeLending: 0,
  piBalance: 0
})
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-pi-purple mb-8">Tableau de Bord</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Solde Pi</h3>
        <p class="text-2xl font-bold text-pi-purple">{{ userStats.piBalance }} π</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Prêts Actifs</h3>
        <p class="text-2xl font-bold text-pi-purple">{{ userStats.activeLoans }}</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Investissements Actifs</h3>
        <p class="text-2xl font-bold text-pi-purple">{{ userStats.activeLending }}</p>
      </div>
      
      <div class="bg-white rounded-lg shadow-lg p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-2">Total Prêts</h3>
        <p class="text-2xl font-bold text-pi-purple">{{ userStats.totalLoans }}</p>
      </div>
    </div>
  </main>
</template>