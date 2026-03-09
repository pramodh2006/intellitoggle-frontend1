<script setup>
const logoFooter = '/logo-dark-text.png'
</script>

<template>
  <footer class="footer">
    <div class="section-container grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <img :src="logoFooter" alt="IntelliToggle" class="h-10 object-contain mb-4" />
        <p class="text-gray-600 text-xs leading-relaxed">
          IntelliToggle is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
        </p>
      </div>
      <div>
        <p class="footer__nav-title">Resources</p>
        <a class="footer__nav-link">Why IntelliToggle Is Different</a>
        <a class="footer__nav-link">Customer Support</a>
        <a class="footer__nav-link">Terms & Conditions</a>
        <a class="footer__nav-link">Privacy Policy</a>
      </div>
      <div>
        <p class="footer__nav-title">Company</p>
        <a class="footer__nav-link">Pricing</a>
        <a class="footer__nav-link">Documentation</a>
        <a class="footer__nav-link">About Us</a>
      </div>
      <div>
        <p class="footer__nav-title">Subscribe to Newsletter</p>
        <div class="flex">
          <input type="email" placeholder="Enter email address" class="footer__newsletter-input" />
          <button class="btn btn--primary rounded-l-none text-xs px-3">Subscribe</button>
        </div>
      </div>
    </div>
  </footer>
</template>
