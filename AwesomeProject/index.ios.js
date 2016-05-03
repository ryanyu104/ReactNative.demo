import React, {
  AppRegistry,
  Component,
  View
} from 'react-native'
import IndexView from './App/View/Index'

class GuiHuaProject extends Component {
  render() {
    return (
        <IndexView/>
    )
  }
}


AppRegistry.registerComponent('AwesomeProject', () => GuiHuaProject)
