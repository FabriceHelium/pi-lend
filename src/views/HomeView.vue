<script setup lang="ts">
import { ref } from 'vue'

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
          <p class="text-purple-600 mb-4">Écosystème Pi Network</p>
          <h1 class="text-5xl font-bold mb-6">
            Microcrédit accessible<br>
            et <span class="text-purple-600">sécurisé</span> avec Pi
          </h1>
          <p class="text-gray-600 text-lg mb-8">
            Prêtez ou empruntez des tokens Pi avec des taux d'intérêt compétitifs. Une solution transparente et automatisée par la blockchain.
          </p>
          <div class="flex space-x-4">
            <button class="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold">
              Commencer maintenant
            </button>
            <button class="text-gray-700 px-6 py-3 rounded-full font-semibold">
              En savoir plus
            </button>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-8 mt-20">
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">0%</p>
            <p class="text-gray-600">Frais cachés</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">100%</p>
            <p class="text-gray-600">Transparence</p>
          </div>
          <div class="text-center">
            <p class="text-2xl font-bold mb-2">24/7</p>
            <p class="text-gray-600">Disponibilité</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">
          Une Plateforme <span class="text-purple-600">Innovante</span> pour l'Écosystème Pi
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Sécurité Maximale</h3>
            <p class="text-gray-600">Protection de vos actifs grâce à la technologie blockchain et aux contrats intelligents.</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Rapidité d'Exécution</h3>
            <p class="text-gray-600">Obtention de fonds rapide avec une validation automatisée des prêts via la blockchain.</p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow-sm">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Taux Compétitifs</h3>
            <p class="text-gray-600">Bénéficiez de taux d'intérêt bas pour les emprunteurs et attractifs pour les prêteurs.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Rejoignez la <span class="text-purple-600">Révolution</span> du Microcrédit</h2>
          <p class="text-gray-600">Découvrez une nouvelle façon d'emprunter et de prêter avec la communauté Pi Network</p>
        </div>

        <div class="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.totalUsers }}</p>
            <p class="text-gray-600">Utilisateurs</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.totalVolume }}</p>
            <p class="text-gray-600">Volume total</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.averageRate }}</p>
            <p class="text-gray-600">Taux moyen</p>
          </div>
          <div>
            <p class="text-3xl font-bold text-purple-600 mb-2">{{ stats.defaultRate }}</p>
            <p class="text-gray-600">Taux de défaut</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-16">
          Dernières Opportunités
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
                <p class="font-semibold">Offre de prêt</p>
              </div>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {{ opportunity.status }}
              </span>
            </div>

            <div class="space-y-4">
              <div class="flex justify-between">
                <p class="text-gray-600">Montant</p>
                <p class="font-semibold">{{ opportunity.amount }} π</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">Durée</p>
                <p class="font-semibold">{{ opportunity.duration }} jours</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">Taux d'intérêt</p>
                <p class="font-semibold">{{ opportunity.interestRate }}%</p>
              </div>
              <div class="flex justify-between">
                <p class="text-gray-600">Garantie</p>
                <p class="font-semibold">{{ opportunity.collateral }} π</p>
              </div>
            </div>

            <button class="w-full bg-purple-600 text-white mt-6 py-2 rounded-full">
              Prêter maintenant
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>