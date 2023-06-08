import MyText from '../MyText'
import { Container } from './styles'

interface IGoals {
  title: string
  subTitle: string
}

const Goals = ({ title, subTitle }: IGoals) => {
  return (
    <Container>
      <MyText color="#fff" size={20} fontWeight={900}>
        {title}
      </MyText>
      <MyText color="#bababa" size={14} fontWeight={400}>
        {subTitle}
      </MyText>
    </Container>
  )
}

export default Goals
