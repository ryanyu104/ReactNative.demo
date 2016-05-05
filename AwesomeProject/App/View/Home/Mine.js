import React, {
  TouchableHighlight,
  Component,
  StyleSheet,
  ListView,
  Text,
  Image,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MineHeader from '../Mine/Header'
import InviteFriends from '../MiddleNav/InviteFriends'

const userData = [{
  title: '攒钱工具',
  yesterday: '154.00',
  amount: '15400.00',
  titleColor: 'orange'
}, {
  title: '零钱包',
  yesterday: '254.00',
  amount: '25400.00',
  titleColor: '#62BFCD'
}, {
  title: '随心宝',
  yesterday: '254.00',
  amount: '25400.00',
  titleColor: '#F63A2C'
}]


class MineView extends Component {
  constructor() {
    super()
  }

  renderList() {
    return userData.map(function (value, index) {
      return (
        <View style={[styles.list,styles.shadow]} key={index}>
          <Text>
            <Icon name='check' size={20} color={value.titleColor}/>
            <Text style={{color:value.titleColor}}>{value.title}</Text>
          </Text>
          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.desc}>昨日收益（元）</Text>
              <Text style={[styles.moneyNum,styles.border]}>{value.yesterday}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.desc}>攒钱总数（元）</Text>
              <Text style={styles.moneyNum}>{value.amount}</Text>
            </View>
          </View>
          <Text style={styles.record}>
              交易记录
          </Text>
        </View>
      )
    }, this)
  }

  render() {
    let listView = this.renderList()
    return (
      <View style={styles.container}>
        <MineHeader/>
        <View style={styles.main}>
          {listView}
        </View>
       </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  shadow: {
    shadowColor: '#999',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
  },
  main: {
    padding: 10
  },
  list: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10
  },
  box: {
    width: 120
  },
  desc: {
    fontSize: 12,
    color: '#999',
    marginBottom: 10
  },
  row: {
    flexDirection: 'row',
    marginTop: 20
  },
  border: {
    borderColor: '#666',
    borderRightWidth: 1,

  },
  moneyNum: {
    fontSize: 20,
    color: '#666',
  },
  record: {
    position: 'absolute',
    right: 10,
    top: 15,
    borderWidth: 1,
    borderColor: '#999',
    padding: 3,
    fontSize: 12,
    color: '#999'
  },
  nav: {
    backgroundColor: '#fff',
    padding: 10
  },
  navList: {
    borderBottomWidth: 1,
    borderColor: '#F6F6F6',
    padding: 5
  },
  angleRight: {
    position: 'absolute',
    right: 10,
    top: 0
  },
  navTitle: {
    fontSize: 16,
    color: '#999'
  }
})

export default MineView
