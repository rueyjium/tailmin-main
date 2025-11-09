import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // ---- state ----
  const sidebarOpen = ref(localStorage.getItem('sidebarOpen') === 'true' || true)
  const mobileSidebarOpen = ref(false)
  const theme = ref(localStorage.getItem('theme') || 'light')
  const expandedMenus = ref(JSON.parse(localStorage.getItem('expandedMenus') || '[]'))

  // ---- actions ----
  const toggleSidebar = () => {
    sidebarOpen.value = !sidebarOpen.value
    localStorage.setItem('sidebarOpen', sidebarOpen.value)
  }

  const toggleMobileSidebar = () => {
    mobileSidebarOpen.value = !mobileSidebarOpen.value
  }

  const closeMobileSidebar = () => {
    mobileSidebarOpen.value = false
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
    localStorage.setItem('theme', theme.value)
  }

  const toggleMenu = (name) => {
    if (expandedMenus.value.includes(name)) {
      expandedMenus.value = expandedMenus.value.filter((n) => n !== name)
    } else {
      expandedMenus.value.push(name)
    }
    localStorage.setItem('expandedMenus', JSON.stringify(expandedMenus.value))
  }

  const loadSidebarState = () => {
    const saved = localStorage.getItem('sidebarOpen')
    if (saved !== null) sidebarOpen.value = saved === 'true'
    document.documentElement.classList.toggle('dark', theme.value === 'dark')
  }

  // ---- expose ----
  return {
    sidebarOpen,
    mobileSidebarOpen,
    theme,
    expandedMenus,
    toggleSidebar,
    toggleMobileSidebar,
    closeMobileSidebar,
    toggleTheme,
    toggleMenu,
    loadSidebarState,
  }
})
