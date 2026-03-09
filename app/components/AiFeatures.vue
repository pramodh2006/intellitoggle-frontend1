<script setup>
const aiBg = '/ai-bg.png'
const aiCards = [
  { icon: '/ai-icon-1.png', title: 'AutoFlag AI (LLM-Assisted Flag Creation)', body: 'Create new flags just by typing what you need. The AI names it, sets rules, and configures targeting for you.' },
  { icon: '/ai-icon-2.png', title: 'SmartRamp AI (AI-Driven Rollout Optimization)', body: 'Rollouts that adjust themselves. AI expands, pauses, or rolls back based on real-time metrics.' },
  { icon: '/ai-icon-3.png', title: 'ExplainFlags AI (LLM Root-Cause + Insights)', body: 'Understand issues instantly with AI-generated, plain-language insights tied to your flags.' },
  { icon: '/ai-icon-4.png', title: 'AutoSegment AI (Behavioral Segmentation)', body: 'Target the right users automatically. AI builds segments from live behavior—no manual rules.' },
]
</script>

<template>
  <!-- Pulled the whole section up with -mt-20 and adjusted internal padding -->
  <section class="pt-20 pb-28 -mt-20 relative overflow-hidden" :style="{ backgroundColor: 'var(--color-brand-dark)', backgroundImage: `url(${aiBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }">
    <div class="section-container text-center text-white relative z-10 max-w-5xl">
      <span class="btn btn--primary text-xs rounded-full mb-6 inline-block px-4 py-1.5">Coming Soon</span>
      <h2 class="text-3xl font-bold mb-16">DartCodeAI That Actually Changes Flagging</h2>
      
      <!-- Increased gap to spread the cards out more to match Figma -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div v-for="card in aiCards" :key="card.title" class="ai-glass-card">
          <div class="ai-glass-card__icon"><img :src="card.icon" :alt="card.title" class="w-6 h-6 object-contain" /></div>
          <div class="ai-glass-card__content">
            <h3 class="ai-glass-card__title">{{ card.title }}</h3>
            <p class="ai-glass-card__body">{{ card.body }}</p>
          </div>
        </div>
      </div>

      <p class="font-bold text-xl mb-10" style="color: var(--color-brand-orange);">Enterprise Only</p>
      
      <div class="ai-newsletter-bar max-w-4xl mx-auto">
        <p class="text-white font-medium text-sm">
          <span style="color: var(--color-brand-orange); font-weight: 700;">Be The First</span> To Try Out Our New AI Features.
        </p>
        <div class="flex w-full md:w-auto">
          <input type="email" placeholder="Enter email address" class="ai-newsletter-bar__input w-64" />
          <button class="btn btn--primary rounded-l-none text-xs px-6 py-3">Join AI Early Access</button>
        </div>
      </div>
    </div>
  </section>
</template>
