import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import StackRoutes from './StackRoutes'
import Home from '../pages/Home'
import Home2 from '../pages/Home2'
import CustomTabBar from '../components/CustomTabBar'
import Home3 from '../pages/Home3'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#121212',

        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: 'attach-money',
        }}
      />
      <Tab.Screen
        name="HomeTab2"
        component={Home2}
        options={{
          tabBarIcon: 'analytics',
        }}
      />
      <Tab.Screen
        name="HomeTab3"
        component={Home3}
        options={{
          tabBarIcon: 'money',
        }}
      />
      {/* <Tab.Screen name="MoneyTab" component={Money} options={{}} /> */}
    </Tab.Navigator>
  )
}

export default Routes
