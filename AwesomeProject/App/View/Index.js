import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  StatusBar,
  TabBarIOS,
  Text,
  Image,
  View
} from 'react-native'
import RecommendView from './Home/Recommend'
import ProductView from './Home/Product'
import Icon from 'react-native-vector-icons/FontAwesome'

class IndexView extends Component {
  constructor() {
    super()
    this.state = {
      selectedBar: 'recommend'
    }
  }

  componentWillMount() {
    Icon.getImageSource('bell',20,'#fff').then((source) => this.setState({ bellIcon: source }))
  }

  renderContent(title, component){
     StatusBar.setBarStyle('light-content','true')
     return (
      <NavigatorIOS
        style = {styles.container}
        barTintColor ='#31455C'
        titleTextColor ='#fff'
        translucent= {false}
        tintColor='#fff'
        initialRoute = {{
          title: title,
          component: component,
          rightButtonIcon: this.state.bellIcon,
        }}
      />
    )
  }


  render() {
    if(!this.state.bellIcon) {
      return false
    }
    return (
      <TabBarIOS
      tintColor="#31455C"
      selectedTab={this.state.selectedBar}>
        <Icon.TabBarItemIOS
          title = '推荐'
          key = 'recommend'
          name = 'recommend'
          iconName='star'
          iconSize={20}
          selected = {this.state.selectedBar === 'recommend'}
          onPress = {() => this.setState({selectedBar: 'recommend'})}
        >
          {this.renderContent('产品推荐', RecommendView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '产品'
          key = 'product'
          name = 'product'
          iconName='tasks'
          iconSize={20}
          selected = {this.state.selectedBar === 'product'}
          onPress = {() => this.setState({selectedBar: 'product'})}
        >
          {this.renderContent('产品列表', ProductView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '我的'
          key = 'Home'
          name = 'Home'
          iconName='user'
          iconSize={20}
          selected = {this.state.selectedBar === 'Home'}
          onPress = {() => this.setState({selectedBar: 'Home'})}
        >
          {this.renderContent('我的', ProductView)}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default IndexView
