import styled from 'styled-components'

export const MaxWidthWrapper = styled.div`
  /* position: relative; */
  max-width: 1100px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  @media (max-width: 563px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`
