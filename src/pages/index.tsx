import React from 'react'
// import AppRoutes from '../src/AppRoutes'
import NavMenu from '../components/NavMenu'
import Blog from '../containers/blog/Blog'
import Footer from '../containers/footer/Footer'

// It was App module in CRA
export default function HomePage() {
  return (
    <>
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
