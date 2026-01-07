import './App.css'
import React from 'react'
const Remote = React.lazy(() => import('remote/App'))

function App() {
  return (
    <>
      <h1>Host</h1>

      <div className="card">
        <React.Suspense fallback={<div>Loading remote...</div>}>
          <Remote />
        </React.Suspense>
      </div>
    </>
  )
}

export default App
