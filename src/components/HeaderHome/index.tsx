// import { TouchableOpacity, View } from 'react-native'
import { Btn, Container, PhotoUser } from './styles'
import allMenu from '../../assets/img/All-menu.png'
import { Image } from 'react-native'

interface IHeaderHome {
  photo: string
}

const HeaderHome = ({ photo }: IHeaderHome) => {
  return (
    <Container style={{ marginTop: 28 }}>
      <Btn>
        <Image source={allMenu} alt="icon-menu" />
      </Btn>
      <Btn>
        <PhotoUser
          source={{
            uri: photo,
          }}
        />
      </Btn>
    </Container>
  )
}

export default HeaderHome
