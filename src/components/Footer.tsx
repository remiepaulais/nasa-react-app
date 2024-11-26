import { Info } from 'lucide-react'
import { Dispatch } from 'react'

export default function Footer({
  setShowModal
}: {
  setShowModal: Dispatch<boolean>
}) {
  return (
    <footer>
      <div className='bg-gradient'></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>Mars: 225 million miles away</h2>
      </div>
      <button onClick={() => setShowModal(true)}>
        <Info />
      </button>
    </footer>
  )
}
