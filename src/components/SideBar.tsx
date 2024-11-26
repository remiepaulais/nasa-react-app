import { ArrowRight } from 'lucide-react'
import { Dispatch } from 'react'

export default function SideBar({
  showModal,
  setShowModal
}: {
  showModal: boolean
  setShowModal: Dispatch<boolean>
}) {
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
      ></div>
      <div
        className='sidebar-content'
        style={{
          translate: showModal ? '0' : '100%'
        }}
      >
        <div>
          <h2>Mars: 225 million miles away</h2>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            fuga expedita excepturi cumque, neque quis consectetur officiis
            molestias error. Nobis vitae corrupti non optio sequi mollitia
            provident assumenda consequatur laboriosam.
          </p>
        </div>
        <button onClick={() => setShowModal(false)}>
          <ArrowRight />
        </button>
      </div>
    </aside>
  )
}
