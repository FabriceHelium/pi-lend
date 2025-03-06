<script setup lang="ts">
import { ref } from 'vue'
import LoanCalculator from '../components/LoanCalculator.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const stats = ref({
  totalUsers: '5,230+',
  totalVolume: '156,450 π',
  averageRate: '8.6%',
  defaultRate: '3.5%'
})

const lendingOpportunities = ref([
  {
    id: 1,
    amount: 2000,
    duration: 30,
    interestRate: 5,
    collateral: 500,
    status: 'active'
  },
  {
    id: 2,
    amount: 1000,
    duration: 60,
    interestRate: 4.5,
    collateral: 250,
    status: 'active'
  },
  {
    id: 3,
    amount: 500,
    duration: 90,
    interestRate: 4,
    collateral: 125,
    status: 'active'
  }
])
</script>

<template>
  <main>
    <section class="py-20 px-4">
      <div class="container mx-auto">
        <div class="max-w-3xl">
          <p class="text-purple-600 mb-4">{{ t('home.hero.subtitle') }}</p>
          <h1 class="text-5xl font-bold mb-6">
            {{ t('home.hero.title') }}
          </h1>
          <p class="text-gray-600 text-lg mb-8">
            {{ t('home.hero.subtitle') }}
          </p>
          <div class="flex space-x-4">
            <button class="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              {{ t('home.hero.startNow') }}
            </button>
            <button class="text-gray-700 px-6 py-3 rounded-full font-semibold">
              {{ t('home.hero.learnMore') }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-8 mt-20">
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">0%</p>
            <p class="text-gray-600">{{ t('home.stats.noHiddenFees') }}</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">100%</p>
            <p class="text-gray-600">{{ t('home.stats.transparency') }}</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">24/7</p>
            <p class="text-gray-600">{{ t('home.stats.availability') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">
          {{ t('home.features.title') }}
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.features.security.title') }}</h3>
            <p class="text-gray-600">{{ t('home.features.security.description') }}</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.features.speed.title') }}</h3>
            <p class="text-gray-600">{{ t('home.features.speed.description') }}</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ t('home.features.rates.title') }}</h3>
            <p class="text-gray-600">{{ t('home.features.rates.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">{{ t('home.community.title') }}</h2>
          <p class="text-gray-600">{{ t('home.community.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.totalUsers }}</p>
            <p class="text-gray-600">{{ t('home.community.users') }}</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.totalVolume }}</p>
            <p class="text-gray-600">{{ t('home.community.volume') }}</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.averageRate }}</p>
            <p class="text-gray-600">{{ t('home.community.avgRate') }}</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.defaultRate }}</p>
            <p class="text-gray-600">{{ t('home.community.defaultRate') }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-4">
          {{ t('home.calculator.title') }}
        </h2>
        <p class="text-center text-gray-600 mb-12">
          {{ t('home.calculator.subtitle') }}
        </p>
        
        <div class="max-w-3xl mx-auto">
          <LoanCalculator />
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">
          {{ t('home.opportunities.title') }}
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="opportunity in lendingOpportunities"
            :key="opportunity.id"
            class="bg-white rounded-xl shadow-sm p-6"
          >
            <div class="flex justify-between items-center mb-4">
              <div class="flex items-center space-x-2">
                <div class="w-8 h-8 bg-purple-100 rounded-full"></div>
                <p class="font-semibold">{{ t('home.opportunities.loanOffer') }}</p>
              </div>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {{ opportunity.status }}
              </span>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <p class="text-gray-600">{{ t('calculator.amount') }}</p>
                <p class="font-semibold">{{ opportunity.amount }} π</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">{{ t('calculator.duration') }}</p>
                <p class="font-semibold">{{ opportunity.duration }} {{ t('calculator.days') }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">{{ t('calculator.interestRate') }}</p>
                <p class="font-semibold">{{ opportunity.interestRate }}%</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">{{ t('calculator.collateral') }}</p>
                <p class="font-semibold">{{ opportunity.collateral }} π</p>
              </div>
            </div>

            <button class="w-full bg-purple-600 text-white mt-6 py-2 rounded-full">
              {{ t('home.opportunities.lendNow') }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>