import { Component, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BREAKPOINTS } from '@constants/constants'

function slugify(str = '') {
  str
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '')
}

Heading.defaultProps = {
  size: 2
}

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired
}

export default function Heading(props: any) {
  const { size, children, ...delegated } = props

  function getDerivedAnchorId() {
    props.anchorId || slugify(children)
  }

  useEffect(() => {
    const anchorId = getDerivedAnchorId()
    const numOfAnchorsWithThisId = document.querySelectorAll(
      `#${anchorId}`
    ).length

    if (numOfAnchorsWithThisId > 1) {
      console.error(
        'Found multiple anchors on the page with this ID',
        anchorId,
        '\n',
        'Please add an explicit unique "anchorId" to this Heading'
      )
    }
  }, [])

  let selfNode: HTMLElement | null

  const Self = [H1, H2, H3, H4, H5, H6][size - 1]

  const anchorId = getDerivedAnchorId()

  return (
    <Self {...delegated} ref={node => (selfNode = node)}>
      {/* <A name={anchorId} id={anchorId} href={`#${anchorId}`}> */}
      {/* <IconBase size="0.75em" icon={linkIcon} /> */}
      {/* </A> */}
    </Self>
  )
}

const Base = styled.div`
  position: relative;
  font-weight: 700;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  margin-bottom: 8px;
`

const H1 = styled(Base)`
  font-size: 72px;
  letter-spacing: -2px;
`

const H2 = styled(Base)`
  font-size: 48px;
  letter-spacing: -0.5px;
  padding-top: 65px;
`

const H3 = styled(Base)`
  font-size: 40px;
  padding-top: 65px;
`

const H4 = styled(Base)`
  font-size: 32px;
  padding-top: 30px;
`

const H5 = styled(Base)`
  font-size: 28px;
`

const H6 = styled(Base)`
  font-size: 16px;
`

const A = styled.a`
  display: none;
  @media ${BREAKPOINTS.mdMin} {
    display: block;
    position: absolute;
    left: 0;
    transform: translateX(-125%);
    transition: opacity 250ms;
    opacity: 0;
    margin-top: -80px;
    padding-top: 80px;
    ${Base}:hover &,
    &:focus {
      opacity: 0.75;
    }
  }
`
