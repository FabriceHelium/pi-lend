<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()

const changeLocale = (newLocale: string) => {
  locale.value = newLocale
}
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
          <RouterLink to="/" class="text-gray-600 hover:text-gray-900">{{ t('nav.home') }}</RouterLink>
          <RouterLink to="/loans" class="text-gray-600 hover:text-gray-900">{{ t('nav.borrow') }}</RouterLink>
          <RouterLink to="/lending" class="text-gray-600 hover:text-gray-900">{{ t('nav.lend') }}</RouterLink>
          <RouterLink to="/dashboard" class="text-gray-600 hover:text-gray-900">{{ t('nav.howItWorks') }}</RouterLink>
          
          <div class="flex items-center space-x-4">
            <select 
              class="bg-transparent text-gray-600"
              :value="locale"
              @change="changeLocale($event.target.value)"
            >
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
            
            <button class="text-gray-600">{{ t('nav.loginWithPi') }}</button>
            <button class="bg-purple-600 text-white px-4 py-2 rounded-full">{{ t('nav.register') }}</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>