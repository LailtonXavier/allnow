import styled from 'styled-components/native'

interface TypeColor {
  myColor: string
  size: number
  fontWeight: number
}

export const Text = styled.Text<TypeColor>`
  color: ${(props) => props.myColor || '#fff'};
  font-size: ${(props) => props.size || 14}px;
  font-weight: ${(props) => props.fontWeight || 200};
  line-height: 23px;
  text-align: center;
  width: 120px;
`
