import styled from 'styled-components'

import { BREAKPOINTS } from '@constants/constants'

export default styled.p`
  font-size: 1.05rem;
  margin-bottom: 2rem;

  a {
    color: var(--color-link);
  }

  @media ${BREAKPOINTS.sm} {
    fontsize: 1rem;
    margin-bottom: 1.5rem;
  }
`
