// src/stores/ui.js
// 全域 UI 狀態管理：Sidebar、主題、展開狀態、RWD Overlay
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    sidebarOpen: true, // 桌機 sidebar
    mobileSidebarOpen: false, // 手機 overlay sidebar
    theme: localStorage.getItem('theme') || 'light',
    expandedMenus: JSON.parse(localStorage.getItem('expandedMenus') || '[]'),
  }),

  actions: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
      localStorage.setItem('sidebarOpen', this.sidebarOpen)
    },
    toggleMobileSidebar() {
      this.mobileSidebarOpen = !this.mobileSidebarOpen
    },
    closeMobileSidebar() {
      this.mobileSidebarOpen = false
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
      document.documentElement.classList.toggle('dark', this.theme === 'dark')
      localStorage.setItem('theme', this.theme)
    },
    toggleMenu(name) {
      if (this.expandedMenus.includes(name)) {
        this.expandedMenus = this.expandedMenus.filter((n) => n !== name)
      } else {
        this.expandedMenus.push(name)
      }
      localStorage.setItem('expandedMenus', JSON.stringify(this.expandedMenus))
    },
    loadSidebarState() {
      const saved = localStorage.getItem('sidebarOpen')
      if (saved !== null) this.sidebarOpen = saved === 'true'
      document.documentElement.classList.toggle('dark', this.theme === 'dark')
    },
  },
})
