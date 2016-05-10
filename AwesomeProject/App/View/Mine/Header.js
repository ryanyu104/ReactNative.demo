import React, {
  Component,
  StyleSheet,
  Animated,
  Text,
  Image,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class MineHeader extends Component {
  constructor() {
    super()
    this.state = {
      scaleValue: new Animated.Value(0),
    }
  }

  componentDidMount() {
    this.state.scaleValue.setValue(1);
    Animated.timing(
      this.state.scaleValue,
      {
        toValue: 1.08,
        duration: 3000,
      }
    ).start()
  }

  render() {
    return (
      <View style={styles.container}>
         <Animated.Image
            style={[styles.bg,{
              transform: [
                {scale: this.state.scaleValue},
              ]
            }]}
            source={require('../../img/triangle_bg.png')}
          />
          <View style={styles.circle}>
            <Icon name='user' size={30} color='#fff' />
          </View>
          <Text style={styles.user}>
            用户名
          </Text>
          <Text style={styles.money}>
            资产总额（元）
          </Text>
          <Text style={styles.amount}>
            128900.00
          </Text>
          <Icon style={styles.gear} name='gear' size={20} color='#fff' />
       </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    height: 250,
    alignItems: 'center',
    overflow: 'hidden',
  },
  bg: {
    height: 250,
    position: 'absolute',
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    marginTop: 40,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 30
  },
  money: {
    color: 'rgba(255,255,255,.6)',
    backgroundColor: 'transparent',
  },
  amount: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 36,
    marginTop: 10
  },
  gear: {
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 15,
    top: 40
  }
})

export default MineHeader
