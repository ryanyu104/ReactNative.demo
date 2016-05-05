import React, {
  TouchableHighlight,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import ProductItem from '../Product/ProductItem'

const proData = {
  savingsData: [{
    title: '攒钱一号',
    yieldNum: 6.5,
    frozenDays: 90,
    sellTime: '11:00'
  }, {
    title: '攒钱二号',
    yieldNum: 7.0,
    frozenDays: 180,
    sellTime: '11:00'
  }, {
    title: '攒钱三号',
    yieldNum: 8.0,
    frozenDays: 365,
    sellTime: '11:00'
  }],
  walletData: [{
    title: '零钱包',
    yieldNum: 6.5,
    frozenDays: 3,
    sellTime: '11:00'
  }]
}

class ProductView extends Component {
  constructor() {
    super()
  }

  renderDeduction() {
    return (
      <View style={styles.deduction}>
        <Text style={styles.deductionText}>
           购买获得红包返现
        </Text>
      </View>
    )
  }

  renderRow(rowData) {
    return rowData.map(function (value, index) {
      return (
        <View style={styles.row} key={index}>
          <Text>
            {value.title}
          </Text>
          <View style={styles.columnBox}>
            <View style={styles.column}>
              <Text style={styles.sub}>
               <Text style={styles.bigText}>{value.yieldNum}</Text>
               %
              </Text>
              <Text style={styles.small}>
                年化收益率
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.sub}>
                <Text style={styles.bigText}>{value.frozenDays}</Text>
                天
              </Text>
              <Text style={styles.small}>
                产品期限
              </Text>
            </View>
            <View style={styles.column}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={
                  ()=>{
                    this.props.navigator.push({
                      title: value.title,
                      component: ProductItem,
                      passProps: {navigator: this.props.navigator}
                    })
                  }
                }
              >
                <View style={styles.btn}>
                  <Text style={styles.buy}>
                    购买
                  </Text>
                  <Text style={styles.time}>
                    (起售时间11:00)
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>
          {value.frozenDays===90 ? this.renderDeduction():null}
        </View>
      )
    }, this)
  }

  render() {
    let savingsList = this.renderRow(proData.savingsData)
    let walletList = this.renderRow(proData.walletData)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Icon name='check' size={15} color='#FDB657' />
          攒钱工具
        </Text>
        {savingsList}
        <Text style={styles.title}>
          <Icon name='check' size={15} color='#FDB657' />
          零钱包
        </Text>
        {walletList}
      </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10
  },
  row: {
    backgroundColor: '#fff',
    borderRadius: 2,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10
  },
  title: {
    paddingBottom: 10
  },
  columnBox: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  column: {
    flex: 1,
  },
  small: {
    fontSize: 10,
    color: '#444',
    marginTop: 5
  },
  btn: {
    width: 110,
    backgroundColor: '#FDB657',
    borderRadius: 5,
    padding: 5,
  },
  buy: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 16,
    textAlign: 'center',
  },
  time: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'center'
  },
  bigText: {
    color: '#FDB657',
    fontSize: 25,
    marginBottom: 5
  },
  sub: {
    fontSize: 10,
    color: '#FDB657'
  },
  deduction: {
    borderTopWidth: 1,
    borderColor: '#999',
  },
  deductionText: {
    width: 100,
    color: '#999',
    fontSize: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    textAlign: 'center',
    padding: 3,
    marginTop: 5
  }
})

export default ProductView
