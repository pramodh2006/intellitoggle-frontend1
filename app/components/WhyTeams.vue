<script setup>
const whyItems = [
  { icon: '/icon-safer.png', title: 'Safer, faster rollouts', body: 'Control feature releases in minutes, not weeks without risking production stability.' },
  { icon: '/icon-confidence.png', title: 'Confidence to ship', body: '"Flip, target, and roll back. Engineers ship more often knowing they can undo mistakes."' },
  { icon: '/icon-future.png', title: 'Future-ready with AI delivery', body: 'Built for Dart workflows and already prepared for AI-powered rollout automation tomorrow.' },
]
</script>

<template>
  <section class="py-20">
    <div class="section-container">
      <h2 class="text-2xl font-bold text-center text-brand-dark mb-12">Why Teams Use IntelliToggle</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        <div v-for="item in whyItems" :key="item.title" class="flex flex-col items-start">
          <div class="why-icon-box">
            <img :src="item.icon" :alt="item.title" class="w-7 h-7 object-contain" />
          </div>
          <h3 class="font-bold text-sm text-brand-dark mb-2">{{ item.title }}</h3>
          <p class="text-xs text-gray-500 leading-relaxed">{{ item.body }}</p>
        </div>
      </div>
      <div class="case-note-banner">
        <p class="text-sm text-gray-700">
          <span class="font-bold text-brand-dark">Read a 2-min case note:</span> How a sample Flutter app shipped faster with IntelliToggle
        </p>
        <button class="btn btn--primary text-xs whitespace-nowrap">Read Now</button>
      </div>
    </div>
  </section>
</template>
