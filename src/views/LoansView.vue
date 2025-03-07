<script setup lang="ts">
import LoanCalculator from '../components/LoanCalculator.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-pi-purple mb-8">{{ t('nav.borrow') }}</h1>
    
    <div class="max-w-2xl mx-auto">
      <LoanCalculator />
    </div>
  </main>
</template>