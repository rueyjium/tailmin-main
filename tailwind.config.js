// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  // ✅ 改成手動控制 Dark Mode（讓 Pinia 狀態控制 class）
  darkMode: 'class',

  safelist: ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans JP', 'Sans-serif'],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [require('@tailwindcss/forms')],
}
