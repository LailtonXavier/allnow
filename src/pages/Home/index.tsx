import { BackMain, Container, Graphic, Money } from './styles'
import HeaderHome from '../../components/HeaderHome'
import Goals from '../../components/Goals'
import { StatusBar } from 'expo-status-bar'
import Content from '../../components/Content'
import Background from '../../components/BackLinearGradient'
import { LinearGradient } from 'expo-linear-gradient'
import MyText from '../../components/MyText'
import { ScrollView } from 'react-native'
import CardMenu from '../../components/CardMenu'

const userPhto =
  'https://res.cloudinary.com/dup3eggmc/image/upload/v1683160481/photo_ppzlbv.jpg'

const alert = `don't spend more`

export default function Home() {
  return (
    <>
      <ScrollView style={{ backgroundColor: '#131629' }}>
        <Container>
          <Background />
          <HeaderHome photo={userPhto} />
          <Goals title="To the top" subTitle="Node-Js" />
          <Content>
            <Money>
              <LinearGradient
                colors={['rgba(43, 76, 182, 0)', 'rgba(43, 76, 182, 0.8)']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  top: 0,
                  height: 117,
                  borderRadius: 20,
                  zIndex: -2,
                  backgroundColor: 'transparent',
                }}
              />
              <MyText color="#fff" size={18} fontWeight={600}>
                {`${alert} R$: ${150}`}
              </MyText>
              <Graphic></Graphic>
            </Money>
            <CardMenu />
          </Content>
          <StatusBar style="light" />
          <BackMain />
        </Container>
      </ScrollView>
    </>
  )
}
