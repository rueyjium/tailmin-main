<template>
  <header
    class="flex items-center justify-between bg-white text-gray-800 h-12 px-4 shadow-sm dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300"
  >
    <!-- 左側 LOGO + 開關 -->
    <div class="flex items-center space-x-2">
      <button
        @click="handleSidebarToggle"
        class="p-2 hover:bg-gray-100 rounded dark:hover:bg-gray-700"
        title="Toggle sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <span class="font-bold tracking-wide">Common Platform</span>
    </div>

    <!-- 右側操作列 -->
    <div class="flex items-center space-x-2">
      <!-- 主題切換 -->
      <button
        @click="ui.toggleTheme"
        class="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        :title="ui.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <svg
          v-if="ui.theme === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 4.222l.707.707M21 12h1M3 12H2m16.97 4.243l.707.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z"
          />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.64 13.65a9 9 0 01-11.29-11.3a1 1 0 00-1.37-1.37a11 11 0 1013.02 13.04a1 1 0 00-.36-.37z" />
        </svg>
      </button>

      <!-- 使用者選單 -->
      <Menu as="div" class="relative">
        <MenuButton
          class="flex items-center space-x-2 px-2 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded focus:outline-none"
        >
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="user"
          />
          <span>John Doe</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </MenuButton>

        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <MenuItems
            class="origin-top-right absolute right-0 w-48 shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none dark:bg-gray-800 dark:divide-gray-700"
          >
            <div>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 dark:bg-gray-700' : '',
                    'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                  ]"
                  >Your Profile</a
                >
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <a
                  href="#"
                  :class="[
                    active ? 'bg-gray-100 dark:bg-gray-700' : '',
                    'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                  ]"
                  >Settings</a
                >
              </MenuItem>
            </div>

            <MenuItem v-slot="{ active }">
              <router-link
                :to="{ name: 'login' }"
                :class="[
                  active ? 'bg-gray-100 dark:bg-gray-700' : '',
                  'block px-4 py-2 text-sm text-gray-700 dark:text-gray-200',
                ]"
                >Sign out</router-link
              >
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </header>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useUiStore } from '@/stores/ui'
import { onMounted, onBeforeUnmount } from 'vue'

const ui = useUiStore()
ui.loadSidebarState()

const handleSidebarToggle = () => {
  if (window.innerWidth < 768) ui.toggleMobileSidebar()
  else ui.toggleSidebar()
}

const handleResize = () => {
  if (window.innerWidth >= 768) ui.closeMobileSidebar()
}

onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped>
header {
  transition: background-color 0.3s ease;
}
</style>
