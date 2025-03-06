<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentMode = ref<'borrow' | 'lend'>('borrow')
const amount = ref(1000)
const duration = ref(30)
const fixedInterestRate = 3.5 // Taux fixe pour l'emprunt
const minLendingRate = 1
const maxLendingRate = 10

const switchMode = (mode: 'borrow' | 'lend') => {
  currentMode.value = mode
  amount.value = mode === 'borrow' ? 1000 : 6500
  duration.value = 30
}

const interestRate = computed(() => {
  if (currentMode.value === 'borrow') {
    return fixedInterestRate
  }
  // Calcul du taux variable pour le prêt basé sur le montant
  const rate = (amount.value / 10000) * (maxLendingRate - minLendingRate) + minLendingRate
  return Math.min(Math.max(rate, minLendingRate), maxLendingRate)
})

const totalInterest = computed(() => {
  return Number((amount.value * (interestRate.value / 100) * (duration.value / 365)).toFixed(2))
})

const totalAmount = computed(() => {
  return Number(amount.value + totalInterest.value).toFixed(2)
})

const reset = () => {
  amount.value = currentMode.value === 'borrow' ? 1000 : 6500
  duration.value = 30
}
</script>

<template>
  <div class="bg-white rounded-xl shadow-lg p-8">
    <div class="flex justify-center space-x-4 mb-8">
      <button
        @click="switchMode('borrow')"
        :class="[
          'px-6 py-2 rounded-full transition-colors',
          currentMode === 'borrow' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        {{ t('calculator.borrow') }}
      </button>
      <button
        @click="switchMode('lend')"
        :class="[
          'px-6 py-2 rounded-full transition-colors',
          currentMode === 'lend' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        ]"
      >
        {{ t('calculator.lend') }}
      </button>
    </div>

    <div class="space-y-6">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          {{ t('calculator.amount') }} (π)
        </label>
        <input
          type="range"
          v-model="amount"
          :min="100"
          :max="10000"
          step="100"
          class="w-full"
        />
        <p class="text-lg font-semibold text-purple-600 mt-2">{{ amount }} π</p>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          {{ t('calculator.duration') }}
        </label>
        <select
          v-model="duration"
          class="w-full border border-gray-300 rounded-lg p-2"
        >
          <option v-for="days in [30, 60, 90, 180]" :key="days" :value="days">
            {{ days }} {{ t('calculator.days') }}
          </option>
        </select>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">
          {{ t('calculator.interestRate') }}
        </label>
        <div class="bg-gray-50 p-3 rounded-lg">
          <p v-if="currentMode === 'borrow'" class="text-sm text-gray-600">
            {{ t('calculator.fixedRate') }}
          </p>
          <p v-else class="text-sm text-gray-600">
            {{ t('calculator.variableRate') }}
          </p>
          <p class="text-lg font-semibold text-purple-600">{{ interestRate.toFixed(1) }}%</p>
        </div>
      </div>

      <div class="bg-purple-50 p-6 rounded-lg">
        <h3 class="text-lg font-medium text-gray-800 mb-4">
          {{ t('calculator.summary') }}
        </h3>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-600">{{ t('calculator.totalInterest') }}</span>
            <span class="font-semibold">{{ totalInterest }} π</span>
          </div>
          <div class="flex justify-between text-lg font-bold">
            <span>{{ currentMode === 'borrow' ? t('calculator.totalRepayment') : t('calculator.totalReceived') }}</span>
            <span class="text-purple-600">{{ totalAmount }} π</span>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <button
          @click="reset"
          class="text-gray-600 hover:text-gray-800"
        >
          {{ t('calculator.reset') }}
        </button>
        <button class="bg-purple-600 text-white px-8 py-2 rounded-full">
          {{ currentMode === 'borrow' ? t('calculator.borrowButton') : t('calculator.lendButton') }}
        </button>
      </div>
    </div>
  </div>
</template>