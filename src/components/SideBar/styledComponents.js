import styled from 'styled-components'

export const SideBarMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 20vw;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  height: 90vh;
`
export const List = styled.li`
  color: ${props => props.color};
`
export const P = styled.p`
  color: ${props => props.color};
`
