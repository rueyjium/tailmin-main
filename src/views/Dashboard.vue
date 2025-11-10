<!-- src\views\Dashboard.vue -->
<template>
  <div class="flex min-h-screen">
    <TheSidebar />

    <!-- 主內容 -->
    <div class="flex flex-col flex-grow bg-gray-200 transition-all duration-300">
      <TheHeader />

      <main class="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
        <!-- ✅ 限制主內容寬度，確保 sidebar 不外擴 -->
        <div class="max-w-6xl mx-auto w-full transition-all duration-300">
          <router-view />
        </div>
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
