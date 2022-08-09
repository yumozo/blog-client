import Image from 'next/image'
import Link from 'next/link'
import styled from '@emotion/styled'

export default function Logo() {
  return (
    <Link href="/">
      <a>
        <span className='text-white inline-flex w-xl justify-between items-center'>
          <Image
            className="cursor-pointer"
            src="/assets/logo192.png"
            width={32}
            height={32}
            alt="logo"
          />
          <p className='ml-2 text-lg'>Jegor Zyrjanow</p>
        </span>
      </a>
    </Link>
  )
}
