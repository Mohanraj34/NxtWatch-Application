import styled from 'styled-components'

export const HeaderMainDiv = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  place-items: 0px;
  background-color: #ffffff;
  list-style-type: none;
  padding-left: 0px;
  background-color: ${props => props.bgColor};
  width: 100%;
  margin-bottom: 0px;
  padding-bottom: 0px;
`
