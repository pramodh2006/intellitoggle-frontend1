<script setup>
const tableRows = [
  'Dart-native SDK & server',
  'End-to-end type safety',
  'AI-assisted roll-outs & cleanup',
  'A/B testing built-in',
  'Dart-Powered SDKs',
]
</script>

<template>
  <!-- FIX: Changed pt-10 to pt-2 to pull the title up higher -->
  <section class="pb-20 pt-2 text-center">
    <!-- FIX: Changed max-w-4xl to max-w-5xl so the table spans wider like in Figma -->
    <div class="section-container max-w-5xl">
      <h2 class="text-3xl font-bold text-brand-dark mb-4">Dart-Powered Feature Flag</h2>
      <h3 class="text-xl font-bold mb-3 text-brand-dark">Not Another Generic Feature Flag Tool</h3>
      <p class="text-sm text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
        Most tools are built for every language, which means extra layers and slower toggles.
        IntelliToggle is built in Dart, for Dart — so it's faster, safer, and built for your stack.
      </p>
      <div class="rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <table class="comparison-table">
          <thead>
            <tr>
              <th class="w-1/2">Features</th>
              <th class="text-center w-1/4">IntelliToggle</th>
              <th class="text-center w-1/4">Other Feature Flag</th>
            </tr>
          </thead>
          <tbody style="background-color: var(--color-bg-light);">
            <tr v-for="row in tableRows" :key="row">
              <td>{{ row }}</td>
              <td class="text-center text-green-500 font-bold">✓</td>
              <td class="text-center text-gray-400">✕</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
