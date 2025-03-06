<script setup lang="ts">
import { ref } from 'vue'

const loanAmount = ref(100)
const loanDuration = ref(30)
const interestRate = 3.5

const calculateTotalRepayment = () => {
  return loanAmount.value * (1 + (interestRate / 100) * (loanDuration.value / 365))
}
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-pi-purple mb-8">Emprunter des Pi</h1>
    
    <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">Calculateur de Prêt</h2>
      
      <div class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Montant du prêt (π)
          </label>
          <input
            type="range"
            v-model="loanAmount"
            min="100"
            max="10000"
            step="100"
            class="w-full"
          />
          <p class="text-lg font-semibold text-pi-purple mt-2">{{ loanAmount }} π</p>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Durée (jours)
          </label>
          <input
            type="range"
            v-model="loanDuration"
            min="7"
            max="180"
            step="1"
            class="w-full"
          />
          <p class="text-lg font-semibold text-pi-purple mt-2">{{ loanDuration }} jours</p>
        </div>
        
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="text-lg font-medium text-gray-800 mb-2">Récapitulatif</h3>
          <p class="text-gray-600">Taux d'intérêt annuel: {{ interestRate }}%</p>
          <p class="text-gray-600">Montant total à rembourser: {{ calculateTotalRepayment().toFixed(2) }} π</p>
        </div>
        
        <button class="w-full bg-pi-purple hover:bg-pi-purple-dark text-white font-semibold py-3 px-6 rounded-lg transition-colors">
          Demander le prêt
        </button>
      </div>
    </div>
  </main>
</template>