import { Info } from 'lucide-react'
import { Dispatch, useEffect, useState } from 'react'
import { apiData } from '../types'

interface FooterProps {
  setShowModal: Dispatch<boolean>
  data: apiData | undefined
}

export default function Footer({ setShowModal, data }: FooterProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <footer
      style={{
        opacity: isLoaded ? '1' : '0',
        transition: 'opacity 250ms ease-in-out'
      }}
    >
      <div className='bg-gradient'></div>
      <div className='content'>
        <h1>APOD PROJECT</h1>
        <h2
          style={{
            opacity: isLoaded ? '1' : '0',
            transition: 'opacity 1s ease-in-out',
            transitionDelay: '250ms'
          }}
        >
          {data?.title}
        </h2>
      </div>
      <div
        className='button-container'
        style={{
          opacity: isLoaded ? '1' : '0',
          transition: 'all 1s ease-in-out',
          transitionDelay: '3s'
        }}
      >
        <button onClick={() => setShowModal(true)}>
          <Info />
        </button>
      </div>
    </footer>
  )
}
