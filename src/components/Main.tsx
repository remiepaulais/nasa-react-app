import { useEffect, useState } from 'react'
import { apiData } from '../types'

interface MainProps {
  data: apiData | undefined
}

export default function Main({ data }: MainProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (1 - (e.clientX / window.innerWidth - 0.5)) * 20
      const y = (1 - (e.clientY / window.innerHeight - 0.5)) * 20
      setPosition({ x, y })
    }

    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0]
      const x = (1 - (touch.clientX / window.innerWidth - 0.5)) * 20
      const y = (1 - (touch.clientY / window.innerHeight - 0.5)) * 20
      setPosition({ x, y })
    }

    document.body.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('touchmove', handleTouchMove)

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  return (
    <section
      className='img-container'
      style={{
        transition: 'opacity 3s ease-in-out',
        transitionDelay: '1s',
        opacity: isLoaded ? '1' : '0'
      }}
    >
      <img
        src={data?.hdurl || '/mars.jpg'}
        alt={data?.title || 'bg-img'}
        className='bg-image'
        draggable={false}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.2s ease-out, opacity 3s ease-out'
        }}
      />
    </section>
  )
}
