import Article from '@components/Article'
import Image from 'next/image'

export default function Home() {
  return (
    <Article>
      <div className="flex justify-around">
        <div className="text-white max-w-xl">
          <h2
            className="py-4 text-center font-medium leading-tight text-4xl mt-0 mb-2"
          >
            Jegor Zyrjanow
          </h2>
          <p>
            I'm a student from Siberia, interested in .NET &amp;
            web-dev stuff. Wanna became a full-stack developer or expert in this
            domain whatever. I don't really like it but u know.. I really love
            money!
          </p>
        </div>
      </div>
    </Article>
  )
}

// export { getServerSideProps } from '../components/chakra'
