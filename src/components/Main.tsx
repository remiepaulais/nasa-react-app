import { useEffect, useState } from 'react'

export default function Main() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position as a percentage of window size
      const x = (e.clientX / window.innerWidth - 0.5) * 20 // multiply by 20 to amplify the effect
      const y = (e.clientY / window.innerHeight - 0.5) * 20

      setPosition({ x, y })
    }

    document.body.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className='img-container'>
      <img
        src='/mars.jpg'
        alt='Mars'
        className='bg-image'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      />
    </section>
  )
}
