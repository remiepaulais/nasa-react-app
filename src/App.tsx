import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Main from './components/Main'
import SideBar from './components/SideBar'
import { Aperture } from 'lucide-react'
import { apiData } from './types'

export default function App() {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [data, setData] = useState<apiData>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchApiData() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${
        import.meta.env.VITE_NASA_API_KEY
      }`

      // Create localStorage key
      const today = new Date().toDateString()
      const localKey = `NASA-${today}`

      // Check if data is already in localStorage
      // If yes, fetch it from localStorage and return
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey) as string)
        setData(apiData)
        setIsLoading(false)
        console.log('Data fetched from localStorage')
        return
      }
      localStorage.clear()

      // Fetch data from API
      setIsLoading(true)
      try {
        const response = await fetch(url)
        const apiData = await response.json()
        setData(apiData)
        setIsLoading(false)
        // Save data to localStorage
        localStorage.setItem(localKey, JSON.stringify(apiData))
        console.log('Data fetched from API')
      } catch (error) {
        console.error(error)
        setIsLoading(false)
      }
    }
    fetchApiData()
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='loader'>
          <Aperture
            style={{
              width: '50px',
              height: '50px'
            }}
          />
        </div>
      ) : (
        <>
          <Main data={data} />
          <SideBar
            data={data}
            showModal={showModal}
            setShowModal={setShowModal}
          />
          <Footer data={data} setShowModal={setShowModal} />
        </>
      )}
    </>
  )
}
