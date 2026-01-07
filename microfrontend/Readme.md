This is a simple microfrontend project that uses React, TypeScript and Vite.
It is built using Vite and includes ESLint for code quality.

The project is structured with a host and a remote microfrontend.

The remote microfrontend is a simple React application that uses TypeScript and Vite.
The host microfrontend is a simple React application that uses TypeScript and Vite.

---

Steps:

1. remote

npm create vite@latest remote
npm i -D @originjs/vite-plugin-federation@latest

Update remote/vite.config.ts

```
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
```

2. host

npm create vite@latest host
npm i -D @originjs/vite-plugin-federation@latest

Update host/vite.config.ts as below

```
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        remote: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
```
