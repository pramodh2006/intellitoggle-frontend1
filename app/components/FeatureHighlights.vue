<script setup>
const whatIsDash = '/what-is-dashboard.png'
const openFeature = '/openfeature.png'
const screen1 = '/screen-1.png'
const screen2 = '/screen-2.png'
const screen3 = '/screen-3.png'
</script>

<template>
  <div>
    <!-- Increased top padding to push the title down slightly -->
    <section class="py-20 mt-12">
      <div class="section-container">
        <h2 class="text-3xl font-bold text-center mb-20 text-brand-dark">What Is IntelliToggle</h2>
        <!-- Increased gap massively to pull the image to the right -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
          <div class="pr-0 md:pr-8">
            <h3 class="text-2xl font-bold mb-4 text-brand-dark">Your AI Dart App's Control Panel For Feature Releases</h3>
            <p class="text-gray-600 mb-6 text-sm leading-relaxed">
              IntelliToggle is a "Dart-Powered" feature flag that lets you turn features on/off instantly in your application without redeploying code. It allows you control roll-outs, run experiments, and fix bugs faster.
            </p>
            <h4 class="font-bold mb-3 text-brand-dark text-base">Benefits</h4>
            <ul class="list-disc pl-5 text-gray-600 space-y-2 text-sm">
              <li>Toggle new features without app updates</li>
              <li>Roll out to specific users or regions</li>
              <li>Instantly rollback when needed</li>
            </ul>
          </div>
          <div class="rounded-xl p-2 bg-[#F8F9FA] w-full">
            <img :src="whatIsDash" class="rounded-lg shadow-sm w-full" alt="Dashboard preview" />
          </div>
        </div>
      </div>
    </section>

    <!-- Increased top and bottom padding significantly to match the large grey gap in Figma -->
    <section class="py-32 mt-12" style="background-color: var(--color-bg-light);">
      <div class="section-container grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
        <!-- Made the OpenFeature box shorter but wider -->
        <div class="bg-white border border-gray-200 rounded-xl shadow-sm flex justify-center items-center py-10 px-20">
          <img :src="openFeature" alt="OpenFeature" class="w-full max-w-[180px] object-contain" />
        </div>
        <div class="pl-0 md:pl-8">
          <h2 class="text-2xl md:text-3xl font-bold mb-4 text-brand-dark leading-tight">
            Seamless Feature Management with OpenFeature
          </h2>
          <p class="text-gray-600 text-sm mb-8 leading-relaxed">
            Aortem now integrates with OpenFeature to provide developers with a powerful, standardized approach to feature flagging and dynamic configuration. Ship features faster, test safely, and optimize user experiences effortlessly.
          </p>
          <button class="btn btn--primary">Learn More →</button>
        </div>
      </div>
    </section>

    <section class="py-24 text-center mt-8">
      <div class="section-container max-w-6xl">
        <h2 class="text-2xl font-bold text-brand-dark mb-16">Control & Power-focused</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          <div v-for="(screen, i) in [screen1, screen2, screen3]" :key="i">
            <img :src="screen" class="rounded border mb-5 w-full shadow-sm" :alt="`Screen ${i + 1}`" />
            <h3 class="font-bold mb-2 text-sm">{{ ['Connect', 'Create Flags', 'Ship & Control'][i] }}</h3>
            <p class="text-xs text-gray-600 mb-4 leading-relaxed">{{ ['Install SDK in your Dart project in 2 mins.', 'Define features in IntelliToggle dashboard.', 'Flip switches anytime, see instant results.'][i] }}</p>
            <button class="text-brand-orange text-xs font-bold hover:underline">View Documentation</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
