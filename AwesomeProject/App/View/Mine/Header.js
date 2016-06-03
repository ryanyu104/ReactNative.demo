import React, {
  TouchableHighlight,
  Component,
  Navigator,
  StyleSheet,
  Animated,
  Text,
  Image,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import NavigationBar from 'react-native-navbar'
import AccountView from '../Account/Account'
import AppStore from '../Store/AppStore'

let callback

class MineHeader extends Component {
  constructor() {
    super()
    this.state = {
      scaleValue: new Animated.Value(0),
      loginStatus: AppStore.getLoginStatus()
    }
    this._renderAccount = this._renderAccount.bind(this)
  }

  componentDidMount() {
    this.state.scaleValue.setValue(1);

    Animated.timing(
      this.state.scaleValue, {
        toValue: 1.08,
        duration: 3000,
      }
    ).start()

    callback = () => {
      this.setState({
        loginStatus: AppStore.getLoginStatus()
      })
    }

    AppStore.on('change', callback)
  }

  componentWillUnmount() {
    AppStore.removeListener('change', callback)
  }

  _renderAccount() {
    this.props.navigator.push({
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom,
      navigationBar: <NavigationBar  hidePrev="true" />,
      component: AccountView,
    })
  }

  renderloginInfo() {
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={this._renderAccount}
      >
        <Text style={styles.user}>
          {this.state.loginStatus ? 'Jobs' : '登录/注册'}
        </Text>
      </TouchableHighlight>
    )
  }

  renderProfiles() {
    return (
      <View>
        <Text style={styles.money}>
          资产总额（元）
        </Text>
        <Text style={styles.amount}>
          128900.00
        </Text>
      </View>
    )
  }

  render() {
    const loginInfo = this.renderloginInfo()
    const profiles = this.renderProfiles()

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
          {loginInfo}
          {this.state.loginStatus?profiles:null}
          <Icon style={styles.gear} name='gear' size={20} color='#fff' />
       </View>
    )
  }
}

let styles = StyleSheet.create({
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
    marginTop: 60,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    backgroundColor: 'transparent',
    color: '#fff',
    marginBottom: 20
  },
  money: {
    color: 'rgba(255,255,255,.6)',
    backgroundColor: 'transparent',
    textAlign:'center'
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
