import React, {
  Component,
  Navigator,
  View
} from 'react-native'
import MineView from '../Home/Mine'
import NavigationBar from 'react-native-navbar'

class MineNavigator extends Component {
  constructor() {
    super()
  }

  renderScene(route, navigator) {
    let SceneComponent = route.component
    return (
      <View>
        <SceneComponent navigator={navigator} route={route}/>
      </View>
    )
  }

  render() {
    return (
      <Navigator
        ref="mineNav"
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig
          }
          return Navigator.SceneConfigs.FloatFromBottom
        }}
        tintColor="#ED6063"
        initialRoute={{
          title: "",
          component: MineView
        }}
      />
    )
  }
}

export default MineNavigator

