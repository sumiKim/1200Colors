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
        samwha_lightgray: '#b4bbc3',
        test_a: '#e8bd36',
        test_b: '#36aae8',
        test_c: '#9736e8',
        sh_text64: '#404040',
        sh_text89: '#595959',
        sh_text126: '#7E7E7E',
      },
    },
  },
  plugins: [],
};
