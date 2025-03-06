<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-white">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>