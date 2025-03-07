<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

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
    <h1 class="text-3xl font-bold text-pi-purple mb-8">{{ t('howItWorks.title') }}</h1>
    
    <div class="max-w-4xl mx-auto">
      <p class="text-xl text-gray-600 mb-12 text-center">{{ t('howItWorks.subtitle') }}</p>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ t('howItWorks.steps.connect.title') }}</h3>
          <p class="text-gray-600">{{ t('howItWorks.steps.connect.description') }}</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ t('howItWorks.steps.choose.title') }}</h3>
          <p class="text-gray-600">{{ t('howItWorks.steps.choose.description') }}</p>
        </div>
        
        <div class="text-center">
          <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold mb-2">{{ t('howItWorks.steps.validate.title') }}</h3>
          <p class="text-gray-600">{{ t('howItWorks.steps.validate.description') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>