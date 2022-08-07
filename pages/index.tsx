import React from 'react'
// import AppRoutes from '../src/AppRoutes'
import NavMenu from '../src/components/NavMenu/NavMenu'
import Blog from '../src/containers/blog/Blog'
import Footer from '../src/containers/footer/Footer'
import './App.css'

// It was App module in CRA
export default function HomePage() {
  return (
    <>
      <div>
        <NavMenu />
      </div>

      <div
        className="flex flex-col
      items-center"
      >
        <main>
          // Was AppRoutes
          <div className="text-center">
            <p>Hello!</p>
          </div>
        </main>

        <Blog />
      </div>

      <div>
        <Footer />
      </div>
    </>
  )
}

// export { getServerSideProps } from '../components/chakra'
