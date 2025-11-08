<template>
  <!-- 手機 Overlay -->
  <div
    v-if="ui.mobileSidebarOpen"
    class="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
    @click="ui.closeMobileSidebar"
  ></div>

  <aside
    class="bg-white text-gray-700 transition-all duration-300 ease-in-out z-50 overflow-y-auto border-r border-gray-200"
    :class="[
      ui.sidebarOpen ? 'w-64' : 'w-16',
      ui.mobileSidebarOpen ? 'fixed inset-y-0 left-0 w-64' : 'hidden sm:block',
    ]"
  >
    <!-- 🔶 LOGO 區 -->
    <div
      class="flex justify-center items-center border-b border-gray-200 bg-white transition-all duration-300"
      :class="ui.sidebarOpen ? 'py-3' : 'py-2'"
    >
      <!-- 展開時：完整版 Logo -->
      <router-link
        to="/"
        class="flex items-center justify-center w-full px-3 transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md hover:scale-[1.02]"
        v-show="ui.sidebarOpen"
      >
        <img
          src="@/assets/images/sinopac_full.png"
          alt="Bank SinoPac"
          class="w-full h-auto max-h-16 object-contain transition duration-300"
        />
      </router-link>

      <!-- 收合時：小圖標 -->
      <router-link
        to="/"
        class="flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:brightness-110"
        v-show="!ui.sidebarOpen"
      >
        <img
          src="@/assets/images/siniopac_icon.svg"
          alt="Bank SinoPac Icon"
          class="h-9 w-9 object-contain transition duration-300"
        />
      </router-link>
    </div>

    <!-- 導覽 -->
    <nav class="text-sm">
      <ul class="flex flex-col">
        <!-- Section 標題 -->
        <li
          v-show="ui.sidebarOpen"
          class="px-4 py-2 text-xs uppercase tracking-wider font-bold"
          :class="ui.theme === 'light' ? 'text-gray-500' : 'text-gray-400'"
        >
          Section
        </li>

        <!-- Dashboard -->
        <router-link v-slot="{ isExactActive, href, navigate }" to="/" custom>
          <li
            class="relative group px-4 cursor-pointer"
            :class="[
              isExactActive
                ? ui.theme === 'light'
                  ? 'bg-gray-100 font-semibold'
                  : 'bg-gray-700 font-semibold'
                : ui.theme === 'light'
                ? 'hover:bg-gray-100'
                : 'hover:bg-gray-700',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3"
                />
              </svg>
              <span v-show="ui.sidebarOpen">Dashboard</span>
              <!-- Tooltip -->
              <span
                v-if="!ui.sidebarOpen"
                class="absolute left-full ml-2 px-2 py-1 text-xs rounded bg-gray-700 text-white opacity-0 group-hover:opacity-100 whitespace-nowrap z-50"
              >
                Dashboard
              </span>
            </a>
          </li>
        </router-link>

        <!-- 👥 User Management -->
        <li>
          <Disclosure v-slot="{ open }" :default-open="ui.expandedMenus.includes('users')">
            <DisclosureButton
              class="px-4 py-3 flex items-center w-full"
              :class="[
                open
                  ? ui.theme === 'light'
                    ? 'bg-gray-100'
                    : 'bg-gray-700'
                  : ui.theme === 'light'
                  ? 'hover:bg-gray-100'
                  : 'hover:bg-gray-700',
              ]"
              @click="ui.toggleMenu('users')"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span v-show="ui.sidebarOpen">User Management</span>
              <span v-show="ui.sidebarOpen" class="ml-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  :class="open ? 'transform rotate-90' : ''"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </DisclosureButton>

            <DisclosurePanel v-show="ui.sidebarOpen">
              <ul>
                <!-- 👤 Users -->
                <li>
                  <Disclosure v-slot="{ open }" :default-open="ui.expandedMenus.includes('user-sub')">
                    <DisclosureButton
                      class="pl-8 pr-4 py-3 flex items-center w-full"
                      :class="[
                        open
                          ? ui.theme === 'light'
                            ? 'bg-gray-100'
                            : 'bg-gray-700'
                          : ui.theme === 'light'
                          ? 'hover:bg-gray-100'
                          : 'hover:bg-gray-700',
                      ]"
                      @click="ui.toggleMenu('user-sub')"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                      </svg>
                      <span v-show="ui.sidebarOpen">Users</span>
                      <span v-show="ui.sidebarOpen" class="ml-auto">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          :class="open ? 'transform rotate-90' : ''"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </DisclosureButton>

                    <DisclosurePanel>
                      <ul>
                        <router-link v-slot="{ isExactActive, href, navigate }" to="/users" custom>
                          <li
                            class="pl-12"
                            :class="[
                              isExactActive
                                ? ui.theme === 'light'
                                  ? 'bg-gray-100 font-semibold'
                                  : 'bg-gray-700 font-semibold'
                                : ui.theme === 'light'
                                ? 'hover:bg-gray-100'
                                : 'hover:bg-gray-700',
                            ]"
                          >
                            <a class="py-3 flex items-center" :href="href" @click="navigate">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                              </svg>
                              <span v-show="ui.sidebarOpen">User List</span>
                            </a>
                          </li>
                        </router-link>

                        <li class="pl-12" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
                          <a href="#" class="py-3 flex items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5 mr-2"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                            </svg>
                            <span v-show="ui.sidebarOpen">User Detail</span>
                          </a>
                        </li>
                      </ul>
                    </DisclosurePanel>
                  </Disclosure>
                </li>

                <!-- 🔒 Roles -->
                <li class="px-8" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
                  <a href="#" class="py-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    <span v-show="ui.sidebarOpen">Roles</span>
                  </a>
                </li>

                <!-- ⚙ Permissions -->
                <li class="px-8" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
                  <a href="#" class="py-3 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg>
                    <span v-show="ui.sidebarOpen">Permissions</span>
                  </a>
                </li>
              </ul>
            </DisclosurePanel>
          </Disclosure>
        </li>

        <!-- 📊 Reports -->
        <li class="px-4" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
          <a href="#" class="py-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
            <span v-show="ui.sidebarOpen">Reports</span>
          </a>
        </li>

        <!-- Apps -->
        <li
          v-show="ui.sidebarOpen"
          class="px-4 py-2 mt-2 text-xs uppercase tracking-wider font-bold"
          :class="ui.theme === 'light' ? 'text-gray-500' : 'text-gray-400'"
        >
          Apps
        </li>
        <li class="px-4" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
          <a href="#" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span v-show="ui.sidebarOpen">Messages</span>
            <span
              v-show="ui.sidebarOpen"
              class="ml-auto text-xs rounded-sm px-2 py-1"
              :class="ui.theme === 'light' ? 'bg-blue-100 text-blue-700' : 'bg-gray-600 text-gray-100'"
            >
              16
            </span>
          </a>
        </li>

        <!-- 📅 Calendar -->
        <li class="px-4" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
          <a href="#" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span v-show="ui.sidebarOpen">Calendar</span>
          </a>
        </li>

        <!-- UI Elements -->
        <li
          v-show="ui.sidebarOpen"
          class="px-4 py-2 mt-2 text-xs uppercase tracking-wider font-bold"
          :class="ui.theme === 'light' ? 'text-gray-500' : 'text-gray-400'"
        >
          UI Elements
        </li>
        <li class="px-4" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
          <router-link :to="{ name: 'card' }" class="py-2 flex items-center">
            <svg class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 3C3.89543 3 3 3.89543 3 5V7C3 8.10457 3.89543 9 5 9H7C8.10457 9 9 8.10457 9 7V5C9 3.89543 8.10457 3 7 3H5Z"
                fill="currentColor"
              />
              <path
                d="M5 11C3.89543 11 3 11.8954 3 13V15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V13C9 11.8954 8.10457 11 7 11H5Z"
                fill="currentColor"
              />
              <path
                d="M11 5C11 3.89543 11.8954 3 13 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H13C11.8954 9 11 8.10457 11 7V5Z"
                fill="currentColor"
              />
              <path
                d="M11 13C11 11.8954 11.8954 11 13 11H15C16.1046 11 17 11.8954 17 13V15C17 16.1046 16.1046 17 15 17H13C11.8954 17 11 16.1046 11 15V13Z"
                fill="currentColor"
              />
            </svg>
            <span v-show="ui.sidebarOpen">Card</span>
          </router-link>
        </li>

        <!-- Pages -->
        <li
          v-show="ui.sidebarOpen"
          class="px-4 py-2 mt-2 text-xs uppercase tracking-wider font-bold"
          :class="ui.theme === 'light' ? 'text-gray-500' : 'text-gray-400'"
        >
          Pages
        </li>
        <li class="px-4" :class="ui.theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-gray-700'">
          <router-link :to="{ name: 'login' }" class="py-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <span v-show="ui.sidebarOpen">Login</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { useUiStore } from '@/stores/ui'

export default {
  components: { Disclosure, DisclosureButton, DisclosurePanel },
  setup() {
    const route = useRoute()
    const ui = useUiStore()
    ui.loadSidebarState()

    const isUserManagementActive = computed(() => {
      const names = ['user-list', 'user-detail', 'roles', 'permissions']
      return names.includes(route.name)
    })

    const isUserActive = computed(() => {
      const names = ['user-list', 'user-detail']
      return names.includes(route.name)
    })

    return { ui, route, isUserManagementActive, isUserActive }
  },
}
</script>
