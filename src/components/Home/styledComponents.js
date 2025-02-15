import styled from 'styled-components'

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
`
export const HomeMainDiv = styled.div`
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  background-color: ${props => props.bgColor};
  margin-top: 0px;
  height: 100%;
`
