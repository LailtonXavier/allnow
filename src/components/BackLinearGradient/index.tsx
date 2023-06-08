import { LinearGradient } from 'expo-linear-gradient'

const Background = () => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 1)', 'rgba(6, 40, 61, 1)', 'rgba(53,25,66, 1)']}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        height: '100%',
        borderRadius: 0,
        zIndex: -2,
        backgroundColor: 'transparent',
      }}
    />
  )
}

export default Background
