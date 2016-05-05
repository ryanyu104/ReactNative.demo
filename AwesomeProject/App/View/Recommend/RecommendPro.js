import React, {
  TouchableHighlight,
  Component,
  Text,
  View
} from 'react-native'
import ProductItem from '../Product/ProductItem'

class RecommendPro extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          随心宝
        </Text>
        <View  style={styles.subtitleBox}>
          <Text style={styles.subtitle}>
            购买获得红包返现
          </Text>
        </View>
        <Text style={styles.yieldBox}>
          <Text style={styles.yieldNum}>6.3</Text>
          %
        </Text>
        <View style={styles.detailBox}>
          <Text style={styles.detail}>活期理财</Text>
          <Text style={styles.detail}>100元起购</Text>
          <Text style={styles.detail}>剩余份额2000.00</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableHighlight
            underlayColor="transparent"
            onPress={
              ()=>{
                this.props.navigator.push({
                  title: '随心宝',
                  component: ProductItem,
                  passProps: {navigator: this.props.navigator}
                })
              }
            }
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>
                立刻购买
              </Text>
              <Text style={styles.btnTimeText}>
                (起售时间11:00)
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#FFF',
    padding: 15,
  },
  title: {
    fontSize: 15,
    textAlign: 'center',
    paddingBottom: 10
  },
  subtitleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subtitle: {
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 10,
    fontSize: 12,
    color: '#666'
  },
  yieldBox: {
    fontSize: 14,
    color: '#6392B1',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  yieldNum: {
    fontSize: 50
  },
  detailBox: {
    flexDirection: 'row',
  },
  detail: {
    flex: 1,
    fontSize: 11,
    alignItems: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    borderRightWidth: 1,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  btn: {
    width: 180,
    padding: 5,
    backgroundColor: '#6392B2',
    borderRadius: 5,
  },
  btnText:{
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5
  },
  btnTimeText:{
    color: '#fff',
    fontSize: 10,
    textAlign: 'center',
  }
})

export default RecommendPro
