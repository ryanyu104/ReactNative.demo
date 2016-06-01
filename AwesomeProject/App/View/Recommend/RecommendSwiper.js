import React, {
  StyleSheet,
  Component,
  Text,
  Image,
  View
} from 'react-native'
import Swiper from 'react-native-swiper'

class RecommendSwiper extends Component {
  render() {
    return (
      <Swiper
        height={155}
        autoplay={true}
        paginationStyle={styles.pagination}
      >
        <View style={styles.slide}>
          <Image
            style={styles.banner}
            source={require('../../img/banner.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.banner}
            source={require('../../img/banner.png')}
          />
        </View>
        <View style={styles.slide}>
          <Image
            style={styles.banner}
            source={require('../../img/banner.png')}
          />
        </View>
      </Swiper>
    )
  }
}

var styles = StyleSheet.create({
  pagination: {
    bottom: 10,
  },
  banner: {
    alignSelf: 'stretch',
  },
})

export default RecommendSwiper
