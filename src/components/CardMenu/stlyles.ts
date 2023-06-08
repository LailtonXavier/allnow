import styled from 'styled-components/native'

export const ContainerCard = styled.View`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`
export const ItemsCard = styled.TouchableOpacity`
  width: 48%;
  border-radius: 20px;
  height: 145.57px;
  background-color: rgba(19, 99, 223, 0.28);
  flex-direction: column;
  align-items: center;
`
export const IconCard = styled.View`
  width: 57px;
  height: 57px;
  border-radius: 100px;
  background: #1363df;
  align-items: center;
  justify-content: center;
  margin: auto;
`
export const ResumeCard = styled.View`
  /* padding: 6px; */
  width: 90%;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  padding: 2px 8px;
  background: #1363df;
  border-radius: 10px;
`

export const TextCard = styled.Text`
  color: #fff;
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
`
