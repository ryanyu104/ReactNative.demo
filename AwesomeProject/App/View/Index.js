import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  StatusBar,
  TabBarIOS,
  AlertIOS,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import RecommendView from './Home/Recommend'
import ProductView from './Home/Product'
import MineView from './Home/Mine'
import Account from './Account/Account'
import Faq from './WebView/Faq'

class IndexView extends Component {
  constructor() {
    super()
    this.state = {
      selectedBar: 'recommend'
    }
    this._handleNextButtonPress=this._handleNextButtonPress.bind(this)
  }

  componentWillMount() {
    Icon.getImageSource('bell',20,'#fff').then((source) => this.setState({ bellIcon: source }))
    Icon.getImageSource('question-circle',20,'#fff').then((source) => this.setState({ questionIcon: source }))
  }

  _handleNextButtonPress() {
    this.refs.productNav.push({
      title: '常见问题',
      component: Faq
    })
  }

  renderRecommendCon(title, component){
     StatusBar.setBarStyle('light-content','true')
     return (
      <NavigatorIOS
        ref="recommendNav"
        style = {styles.container}
        barTintColor ='#31455C'
        titleTextColor ='#fff'
        translucent= {false}
        tintColor='#fff'
        initialRoute = {{
          title: title,
          component: component,
          rightButtonIcon: this.state.bellIcon,
          onRightButtonPress: () => {
            AlertIOS.alert(
              '我是通知',
            )
          }
        }}
      />
    )
  }

  renderProductCon(title, component){
     StatusBar.setBarStyle('light-content','true')
     return (
      <NavigatorIOS
        ref="productNav"
        style = {styles.container}
        barTintColor ='#31455C'
        titleTextColor ='#fff'
        translucent= {false}
        tintColor='#fff'
        initialRoute = {{
          title: title,
          component: component,
          rightButtonIcon: this.state.questionIcon,
          onRightButtonPress: this._handleNextButtonPress
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
          onPress = {() =>{
              this.setState({selectedBar: 'recommend'})
              this.refs.recommendNav.popToTop()
            }
          }
        >
          {this.renderRecommendCon('产品推荐', RecommendView)}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title = '产品'
          key = 'product'
          name = 'product'
          iconName='tasks'
          iconSize={20}
          selected = {this.state.selectedBar === 'product'}
          onPress = {() =>{
              this.setState({selectedBar: 'product'})
              this.refs.productNav.popToTop()
            }
          }
        >
          {this.renderProductCon('产品列表', ProductView)}
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
