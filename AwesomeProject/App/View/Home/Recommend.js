import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
  RefreshControl,
  ScrollView,
  Text,
  View
} from 'react-native'

import RecommendNav from '../Recommend/RecommendNav'
import RecommendPro from '../Recommend/RecommendPro'
import RecommendSwiper from '../Recommend/RecommendSwiper'

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
          <RecommendSwiper/>
          <Text style={styles.notice}>
            公告：5月31日起攒钱工具维护升级，暂停使用。
          </Text>
          <RecommendNav {...this.props}/>
          <RecommendPro {...this.props}/>
        </ScrollView>
      </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: '#F5F5F5',
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
})

export default RecommendView
