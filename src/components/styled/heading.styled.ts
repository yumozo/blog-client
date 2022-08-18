import styled from 'styled-components'

type PropType = {
  h2?: any
}

export const H1 = styled.h2<PropType>`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 2.25rem;
  line-height: 2.5rem;
`
export const H2 = styled(H1)`

  margin-top: 42px;
  margin-bottom: 26px;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  color: var(--primary);
`
