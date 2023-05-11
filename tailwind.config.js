/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#d31239',
        samwha_textdarkgray: '#6b7280',
        samwha_textgray: '#b4bbc3',
        samwha_lightgray: '#e5e6eb',
        test_a: '#e8bd36',
        test_b: '#36aae8',
        test_c: '#9736e8',
      },
    },
  },
  plugins: [],
};
