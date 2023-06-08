import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  background: #fff;
  color: #fff;
`

export const BackMain = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: 400px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: auto;
  background: #131629;
  border-top-left-radius: 61px;
  border-top-right-radius: 61px;
  z-index: 1;
`
export const Money = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 119px;
  border-radius: 20px;
  padding: 14px;
  box-shadow: 0 0 10px red;
`

export const MoneyText = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  line-height: 23px;
  text-align: center;
`
export const Graphic = styled.View`
  width: 85px;
  height: 85px;
  background: #ccc;
  border-radius: 100px;
`
