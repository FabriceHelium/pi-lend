<script setup lang="ts">
import { ref } from 'vue'

const lendingOpportunities = ref([
  {
    id: 1,
    amount: 1000,
    duration: 30,
    interestRate: 5,
    collateral: 250,
    status: 'active'
  },
  {
    id: 2,
    amount: 500,
    duration: 60,
    interestRate: 4.5,
    collateral: 125,
    status: 'active'
  }
])
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-pi-purple mb-8">Opportunités de Prêt</h1>
    
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="opportunity in lendingOpportunities"
        :key="opportunity.id"
        class="bg-white rounded-lg shadow-lg p-6"
      >
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-xl font-semibold text-gray-800">{{ opportunity.amount }} π</h3>
          <span
            class="px-2 py-1 text-sm rounded-full"
            :class="opportunity.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'"
          >
            {{ opportunity.status }}
          </span>
        </div>
        
        <div class="space-y-2 mb-6">
          <p class="text-gray-600">
            <span class="font-medium">Durée:</span> {{ opportunity.duration }} jours
          </p>
          <p class="text-gray-600">
            <span class="font-medium">Taux d'intérêt:</span> {{ opportunity.interestRate }}%
          </p>
          <p class="text-gray-600">
            <span class="font-medium">Garantie:</span> {{ opportunity.collateral }} π
          </p>
        </div>
        
        <button class="w-full bg-pi-purple hover:bg-pi-purple-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors">
          Prêter
        </button>
      </div>
    </div>
  </main>
</template>