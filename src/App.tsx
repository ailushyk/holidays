import React from 'react'
import { Button } from './ui'

function App() {
  return (
    <div className="text-center">
      <p className="mb-4">Hello Alex</p>
      <div className="flex justify-center items-center">
        <Button onClick={() => 'test click'}>ok</Button>
      </div>
    </div>
  )
}

export default App
