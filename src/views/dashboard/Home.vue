<template>
  <!-- Breadcrumb -->
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl font-semibold text-gray-700">Dashboard</h2>

    <div class="flex items-center space-x-1 text-xs text-gray-500">
      <a href="#" class="font-bold text-gray-800">Home</a>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span>Dashboard</span>
    </div>
  </div>

  <!-- Statistic Cards -->
  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-8">
    <!-- Card 1 -->
    <div class="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <div class="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Member</h3>
        <p class="text-3xl font-semibold text-gray-800">12,768</p>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <div class="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Post</h3>
        <p class="text-3xl font-semibold text-gray-800">39,265</p>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <div class="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Total Comment</h3>
        <p class="text-3xl font-semibold text-gray-800">142,334</p>
      </div>
    </div>

    <!-- Card 4 -->
    <div class="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
      <div class="p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>
      <div class="px-4 text-gray-700">
        <h3 class="text-sm tracking-wider">Server Load</h3>
        <p class="text-3xl font-semibold text-gray-800">34.12%</p>
      </div>
    </div>
  </div>

  <!-- Chart Section -->
  <div class="grid grid-cols-1 px-4 gap-4 mt-8 sm:grid-cols-3 sm:px-8">
    <!-- Area Chart -->
    <div class="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
      <h3 class="text-xl text-gray-700 mb-4">Page View</h3>
      <apexchart type="area" :height="300" :options="pageViewOptions" :series="pageViewSeries" />
    </div>

    <!-- Donut Chart -->
    <div class="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
      <h3 class="text-xl text-gray-700 mb-4">Sessions by Device</h3>
      <apexchart type="donut" :height="300" :options="sessionsOptions" :series="sessionsSeries" />
    </div>

    <!-- Right-side Tables -->
    <div class="grid grid-rows-2 gap-4">
      <!-- Popular Post -->
      <div class="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
        <h3 class="text-xl text-gray-700 mb-2">Popular Post</h3>
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-50 text-gray-600 uppercase">
            <tr>
              <th class="py-3 text-left font-medium tracking-wider">Post Title</th>
              <th class="py-3 text-left font-medium tracking-wider">Views</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50">
              <td class="py-2">Create an Admin Panel with Vue.js and Tailwind CSS</td>
              <td class="py-2 text-right">1,672</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-2">How To Center a Div</td>
              <td class="py-2 text-right">1,423</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-2">Let's Star This Project</td>
              <td class="py-2 text-right">926</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Top Contributor -->
      <div class="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md">
        <h3 class="text-xl text-gray-700 mb-2">Top Contributor</h3>
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-50 text-gray-600 uppercase">
            <tr>
              <th class="py-3 text-left font-medium tracking-wider">Name</th>
              <th class="py-3 text-right font-medium tracking-wider">Commit</th>
              <th class="py-3 text-right font-medium tracking-wider">Issue</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 text-gray-600">
            <tr class="hover:bg-gray-50">
              <td class="py-2">Seto Kuslaksono</td>
              <td class="py-2 text-right">41</td>
              <td class="py-2 text-right">12</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-2">Some Dude</td>
              <td class="py-2 text-right">22</td>
              <td class="py-2 text-right">15</td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="py-2">It Could Be You</td>
              <td class="py-2 text-right">12</td>
              <td class="py-2 text-right">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Bottom Section -->
  <div class="grid grid-cols-1 gap-4 px-4 mt-8 sm:grid-cols-5 sm:px-8">
    <TabGroup>
      <!-- Left: Top Author -->
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm sm:col-span-2">
        <div
          class="flex flex-col sm:flex-row sm:justify-between items-center px-4 py-3 border-b border-gray-200 text-gray-700"
        >
          <h3 class="tracking-wider font-semibold">Top Author</h3>
          <TabList class="flex space-x-1 mt-2 sm:mt-0">
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-1.5 text-xs rounded-md border border-gray-200"
                :class="selected ? 'bg-gray-700 text-white' : 'hover:bg-gray-100'"
              >
                Today
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-1.5 text-xs rounded-md border border-gray-200"
                :class="selected ? 'bg-gray-700 text-white' : 'hover:bg-gray-100'"
              >
                Yesterday
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button
                class="px-4 py-1.5 text-xs rounded-md border border-gray-200"
                :class="selected ? 'bg-gray-700 text-white' : 'hover:bg-gray-100'"
              >
                Last 7 Days
              </button>
            </Tab>
          </TabList>
        </div>

        <TabPanels class="px-4 py-2">
          <TabPanel v-for="topAuthor in topAuthors" :key="topAuthor">
            <table class="min-w-full text-gray-600 text-sm">
              <tbody>
                <tr v-for="author in topAuthor" :key="author.username" class="hover:bg-gray-50">
                  <td class="flex items-center py-2">
                    <img class="inline-block h-12 w-12 rounded-full ring-1 ring-gray-300" :src="author.avatar" alt="" />
                    <div class="px-4">
                      <div class="font-semibold text-gray-800">{{ author.name }}</div>
                      <div class="text-sm text-gray-500">@{{ author.username }}</div>
                    </div>
                  </td>
                  <td class="py-2 text-right">
                    <div class="text-xl font-medium text-gray-800">{{ author.postViews }}</div>
                    <div class="text-xs text-gray-400">Post Views</div>
                  </td>
                  <td class="hidden sm:table-cell py-2 text-right space-x-2">
                    <button class="p-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button class="p-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
        </TabPanels>
      </div>

      <!-- Right: Recent Sales -->
      <div class="bg-white border border-gray-200 rounded-lg shadow-sm sm:col-span-3">
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-200 text-gray-700">
          <h3 class="tracking-wider font-semibold">Recent Sales</h3>
          <button class="border rounded-sm bg-gray-100 px-3 py-1.5 text-xs hover:bg-gray-200">View All</button>
        </div>

        <div class="px-4 pb-4">
          <table class="min-w-full divide-y divide-gray-200 text-sm">
            <thead class="bg-gray-50 text-gray-600 uppercase">
              <tr>
                <th class="py-3 text-left font-medium tracking-wider">Order ID</th>
                <th class="py-3 text-left font-medium tracking-wider">Item</th>
                <th class="py-3 text-left font-medium tracking-wider">Amount</th>
                <th class="py-3 text-left font-medium tracking-wider">Status</th>
                <th class="py-3 text-left font-medium tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100 text-gray-600">
              <tr v-for="sales in recentSales" :key="sales.orderId" class="hover:bg-gray-50">
                <td class="py-3">{{ sales.orderId }}</td>
                <td>{{ sales.item }}</td>
                <td>${{ sales.amount }}</td>
                <td>
                  <span class="px-2 py-1 rounded text-xs text-white" :class="sales.labelClass">{{ sales.status }}</span>
                </td>
                <td class="text-blue-600"><a href="#">View Detail</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </TabGroup>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import topAuthors from '@/data/home/topAuthors.json'
import recentSales from '@/data/home/recentSales.json'

// Chart options
const pageViewOptions = {
  chart: { id: 'pageview-chart', toolbar: { show: false } },
  colors: ['#777'],
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  xaxis: { categories: ['Aug 1', 'Aug 2', 'Aug 3', 'Aug 4', 'Aug 5', 'Aug 6', 'Aug 7'] },
  yaxis: { labels: { style: { colors: '#888' } } },
  grid: { borderColor: '#eee' },
}

const pageViewSeries = [{ name: 'Page view', data: [3087, 4403, 3456, 2864, 4956, 6023, 7063] }]

const sessionsOptions = {
  chart: { id: 'sessions-chart' },
  labels: ['Desktop', 'Mobile', 'Tablet'],
  legend: { position: 'bottom' },
  colors: ['#999', '#ccc', '#eee'],
}

const sessionsSeries = [70.9, 27.2, 1.9]
</script>
