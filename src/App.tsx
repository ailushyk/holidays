import React from 'react'
import { Block } from './ui'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/dashboard'

function App() {
  return (
    <Block>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
    </Block>
  )
}

export default App
