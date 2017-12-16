import { global_box_shadow } from 'constants/styled'
import styled from 'styled-components'

const WideSection = styled.div`
  width: 100%;
  height: 350px;
  box-shadow: ${global_box_shadow};
  display: flex;
  margin: 12px 0 0;
  @media screen and (max-width: 500px) {
    width: 98%;
    margin: 12px auto;
    height: auto;
  }
`

export default WideSection
