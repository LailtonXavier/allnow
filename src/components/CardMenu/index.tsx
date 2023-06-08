import uuid from 'react-native-uuid'
import { MaterialIcons } from '@expo/vector-icons'
import {
  ItemsCard,
  ContainerCard,
  IconCard,
  ResumeCard,
  TextCard,
} from './stlyles'
import MyText from '../MyText'

interface IDataMenu {
  icon: any
  name: string
  totalMoney: number
  porcent: number
}

const datasMoke: IDataMenu[] = [
  { icon: 'attach-money', name: 'Money', totalMoney: 90, porcent: 20 },
  { icon: 'attach-money', name: 'Money', totalMoney: 90, porcent: 20 },
  { icon: 'attach-money', name: 'Money', totalMoney: 90, porcent: 20 },
  { icon: 'attach-money', name: 'Money', totalMoney: 90, porcent: 20 },
]

const CardMenu = () => {
  return (
    <ContainerCard>
      {datasMoke.map((items) => (
        <ItemsCard key={String(uuid.v4())}>
          <IconCard>
            <MaterialIcons name={items.icon} size={34} color="#EEE0FF" />
          </IconCard>
          <MyText color="#fff" fontWeight={600} size={14}>
            {items.name}
          </MyText>
          <ResumeCard>
            <TextCard>{`R$ ${items.totalMoney}`}</TextCard>
            <TextCard>{`${items.porcent}%`}</TextCard>
          </ResumeCard>
        </ItemsCard>
      ))}
    </ContainerCard>
  )
}

export default CardMenu
