import Article from '@components/Article'
import Image from 'next/image'

export default function Home() {
  return (
    <Article>
      <div className='flex justify-around'>
        <div>
          <Image className='rounded-full' src="/images/myPhoto.png" width="96" height="96" />
        </div>
        <div className='text-white max-w-xl'>
          <p>
            Yoh bitches! I'm a student from Siberia, interested in .NET &amp; web-dev stuff.
            Wanna became a full-stack developer or expert in this domain whatever.
            I don't really like it but u know.. I really love money!
          </p>
        </div>
      </div>

    </Article>
  )
}

// export { getServerSideProps } from '../components/chakra'
