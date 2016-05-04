import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  RefreshControl,
  ScrollView,
  Text,
  Image,
  View
} from 'react-native'

import RecommendNav from '../Recommend/RecommendNav'
import RecommendPro from '../Recommend/RecommendPro'

class RecommendView extends Component {
  constructor() {
    super()
    this.state = {
      isRefreshing: false
    }
  }

  onRefresh() {
    this.state = {
      isRefreshing: true
    }
    setTimeout(() => {
      this.state = {
        isRefreshing: false
      }
    }, 5000)
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
              tintColor="#6392B1"
              title="刷新中..."
              progressBackgroundColor="#ffff00"
            />
          }
        >
          <Image
            style={styles.banner}
            source={require('../../img/banner.png')}
          />
          <Text style={styles.notice}>
            公告：5月31日起攒钱工具维护升级，暂停使用。
          </Text>
          <RecommendNav {...this.props}/>
          <View style={styles.grayContainer}>
            <RecommendPro />
          </View>
        </ScrollView>
      </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    alignSelf: 'stretch',
  },
  notice: {
    backgroundColor: '#FFFBE4',
    padding: 10,
    fontSize: 13,
    color: '#666',
  },
  nav: {
    flexDirection: 'row',
    padding: 10
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    marginTop: 5,
  },
  grayContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5'
  }
})

export default RecommendView
