import Link from 'next/link'
import Paragraph from '@components/paragraph'
import styled from 'styled-components'

const ReadMoreStroke = styled(Paragraph)`
  color: var(--color-subtext);
  font-weight: 700;
`

export default function ContentPreview({ title, children, href }: any) {
  return (
    <Link href={href}>
      <a>
        <h2>{title}</h2>
        <Paragraph>{children}</Paragraph>
        <ReadMoreStroke>read more</ReadMoreStroke>
      </a>
    </Link>
  )
}
