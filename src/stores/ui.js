// 管理全域 UI 狀態（Sidebar 開合）

import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarOpen: true,
  }),
  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      localStorage.setItem('sidebarOpen', this.sidebarOpen)
    },
    loadSidebarState() {
      const saved = localStorage.getItem('sidebarOpen')
      if (saved !== null) this.sidebarOpen = saved === 'true'
    },
  },
})
