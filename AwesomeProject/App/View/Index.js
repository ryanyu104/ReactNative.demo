import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  StatusBar,
  TabBarIOS,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RecommendView from './Home/Recommend'
import ProductView from './Home/Product'
import MineView from './Home/Mine'

class IndexView extends Component {
  constructor() {
    super()
    this.state = {
      selectedBar: 'mine'
    }
  }

  componentWillMount() {
    Icon.getImageSource('bell',20,'#fff').then((source) => this.setState({ bellIcon: source }))
    Icon.getImageSource('question-circle',20,'#fff').then((source) => this.setState({ questionIcon: source }))
  }

  renderCon(title, component){
     StatusBar.setBarStyle('light-content','true')
     let rightButtonIcon = component === ProductView ? this.state.questionIcon : this.state.bellIcon
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
          rightButtonIcon: rightButtonIcon,
        }}
      />
    )
  }

  renderMineCon(title, component){
     StatusBar.setBarStyle('light-content','true')
     return (
      <NavigatorIOS
        style = {styles.container}
        navigationBarHidden={true}
        initialRoute = {{
          title: '',
          component: component,
        }}
      />
    )
  }


  render() {
    if(!this.state.bellIcon||!this.state.questionIcon) {
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
          {this.renderCon('产品推荐', RecommendView)}
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
          {this.renderCon('产品列表', ProductView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '我的'
          key = 'mine'
          name = 'mine'
          iconName='user'
          iconSize={20}
          selected = {this.state.selectedBar === 'mine'}
          onPress = {() => this.setState({selectedBar: 'mine'})}
        >
          {this.renderMineCon('我的', MineView)}
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
