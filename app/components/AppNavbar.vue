<script setup>
import { ref } from 'vue'
const logoHeader = '/logo-white-text.png'
const isMobileMenuOpen = ref(false)
</script>

<template>
  <div>
    <header class="navbar">
      <img :src="logoHeader" alt="IntelliToggle" class="navbar__logo" />
      <nav class="navbar__links">
        <a href="#" class="navbar__link">Home</a>
        <a href="#" class="navbar__link">About</a>
        <a href="#" class="navbar__link">Pricing</a>
      </nav>
      <button class="btn btn--primary hidden md:inline-flex">Start Sandbox</button>
      <button class="navbar__mobile-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </header>
    
    <div v-show="isMobileMenuOpen" class="navbar__mobile-menu">
      <a href="#" class="navbar__link">Home</a>
      <a href="#" class="navbar__link">About</a>
      <a href="#" class="navbar__link">Pricing</a>
      <button class="btn btn--primary">Start Sandbox</button>
    </div>
  </div>
</template>
