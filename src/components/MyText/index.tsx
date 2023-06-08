import { ReactNode } from 'react'
import { Text } from './styles'

interface IText {
  children: ReactNode
  color: string
  size: number
  fontWeight: number
}

const MyText = ({ children, color, size, fontWeight }: IText) => {
  return (
    <Text myColor={color} size={size} fontWeight={fontWeight}>
      {children}
    </Text>
  )
}

export default MyText
