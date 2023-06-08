import { ReactNode } from 'react'
import { Container } from './styles'

interface IContent {
  children: ReactNode
}

const Content = ({ children }: IContent) => {
  return (
    <Container
      style={{
        elevation: 10,
        // sombra IOS
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.8,
      }}
    >
      {children}
    </Container>
  )
}

export default Content
