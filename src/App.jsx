import { useState } from 'react'
import qr from './images/image-qr-code.png'
import QrImage from './components/QrImage'
import QrCard from './components/QrCard'
import './App.css'

function App() {
  return (
    <div className='App'>
      <QrImage qrImage = {qr} />
      <QrCard />
    </div>
  )
}

export default App
