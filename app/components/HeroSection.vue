<script setup>
const heroDash = '/hero-dashboard.png'
const partnerLogos = [
  { src: '/logo-google-full.png', alt: 'Google Cloud' },
  { src: '/logo-aws-full.png',    alt: 'AWS'          },
  { src: '/logo-azure-full.png',  alt: 'Azure'        },
  { src: '/logo-ocean-full.png',  alt: 'Digital Ocean'},
  { src: '/logo-ibm-full.png',    alt: 'IBM'          },
]
</script>

<template>
  <div>
    <!-- Reduced top padding significantly -->
    <section class="hero pt-2 pb-[14rem]">
      <div class="section-container relative z-10 mx-auto flex flex-col items-center">
        
        <!-- Shrunk the main header significantly (text-[32px]) and reduced bottom margin to match Figma -->
        <h1 class="text-[28px] md:text-[34px] font-bold mb-2 leading-[1.15] tracking-[-0.01em] w-full max-w-[650px]">
          The First
          <span class="hero__badge mx-0.5">Dart-Native</span>
          Feature Flag<br />With DartCodeAI
        </h1>
        
        <!-- Shrunk subtitle, reduced line height, and pulled it closer to the title -->
        <p class="hero__subtitle text-[13px] mb-2 font-medium leading-[1.6] max-w-[480px]">
          Feature flags built for Dart. Ship faster, roll back safely, and scale with AI-powered delivery.
        </p>
        
        <p class="hero__price text-[13px] font-bold mb-2">Starting at just $1/month</p>
        
        <!-- Pulled the date text up and made it smaller -->
        <p class="hero__validity text-[11px] mb-3">Valid till 15th September, 2025</p>
        
        <!-- Tightened button row -->
        <div class="flex flex-col sm:flex-row justify-center gap-3">
          <button class="btn btn--primary px-8 py-2.5 text-[13px]">Get Access</button>
          <button class="btn btn--outline-orange px-8 py-2.5 text-[13px]">Join AI Early Access</button>
        </div>
        
      </div>
    </section>

    <!-- Pulled the image up further to compensate for the smaller text above it -->
    <div class="section-container -mt-[175px] relative z-10 mb-10 max-w-5xl mx-auto">
      <img :src="heroDash" alt="Dashboard" class="rounded-xl shadow-2xl w-full border border-gray-200" />
    </div>

    <!-- Reduced padding here to keep it tight -->
    <section class="py-4 text-center">
      <div class="section-container max-w-4xl mx-auto">
        <p class="text-[10px] font-bold mb-5 text-gray-500 uppercase tracking-widest">
          Trusted by various engineering teams
        </p>
        <div class="flex flex-wrap justify-between items-center gap-4 opacity-70 px-8">
          <img v-for="logo in partnerLogos" :key="logo.alt" :src="logo.src" :alt="logo.alt" class="h-5 md:h-7 object-contain" />
        </div>
      </div>
    </section>
  </div>
</template>
