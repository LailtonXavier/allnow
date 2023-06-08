import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../pages/Home'
// import Money from '../../pages/Money'

const Stack = createNativeStackNavigator()

const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Money" component={Money} /> */}
    </Stack.Navigator>
  )
}

export default StackRoutes
