import { ArrowRight } from 'lucide-react'
import { Dispatch } from 'react'
import { apiData } from '../types'

interface SideBarProps {
  showModal: boolean
  setShowModal: Dispatch<boolean>
  data: apiData | undefined
}

export default function SideBar({
  showModal,
  setShowModal,
  data
}: SideBarProps) {
  return (
    <aside
      style={{
        pointerEvents: showModal ? 'auto' : 'none'
      }}
    >
      <div
        className='bg-overlay'
        style={{
          translate: showModal ? '0' : '100%'
        }}
        onClick={() => setShowModal(false)}
      ></div>
      <div
        className='sidebar-content'
        style={{
          translate: showModal ? '0' : '100%'
        }}
      >
        <div>
          <h2>{data?.title}</h2>
          <h3>{data?.date}</h3>
          <p>{data?.explanation}</p>
          <p className='copyright'>&copy; {data?.copyright}</p>
        </div>
        <button onClick={() => setShowModal(false)}>
          <ArrowRight />
        </button>
      </div>
    </aside>
  )
}
