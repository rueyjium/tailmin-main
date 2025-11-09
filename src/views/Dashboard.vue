<template>
  <div class="flex min-h-screen">
    <TheSidebar />

    <div class="flex flex-col flex-grow bg-gray-200">
      <TheHeader />

      <main class="flex-1 overflow-y-auto bg-gray-50 p-4">
        <router-view />
      </main>

      <TheFooter />
    </div>
  </div>
</template>

<script setup>
import TheSidebar from '@/components/layouts/TheSidebar.vue'
import TheHeader from '@/components/layouts/TheHeader.vue'
import TheFooter from '@/components/layouts/TheFooter.vue'
</script>
