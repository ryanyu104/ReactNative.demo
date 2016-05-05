import React, {
  TouchableHighlight,
  Component,
  StyleSheet,
  ListView,
  TextInput,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class ProductItem extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.moneyBox}>
            <Text style={styles.title}>
              购买金额
            </Text>
            <TextInput
              style={styles.moneyInput}
              placeholder='100元起投'
            />
          </View>
          <View style={styles.bankBox}>
            <Text style={styles.title}>
              付款银行
            </Text>
            <Text style={styles.bankDetail}>
              招商银行（8000）
            </Text>
            <Icon style={styles.angleRight} name='angle-right' size={20} color='#999'/>
          </View>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnText}>
            购买
          </Text>
        </View>
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
  wrapper:{
   backgroundColor:'#fff',
   paddingLeft: 10,
   paddingRight: 10,
  },
  moneyBox:{
    borderColor:'#F5F5F5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  bankBox:{
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bankDetail:{
    color:'#62BFCD'
  },
  title:{
    width: 70,
  },
  moneyInput:{
    flex:1,
    height: 30
  },
  angleRight:{
    position:'absolute',
    right: 10,
    top: 7
  },
  btn:{
    justifyContent:'center',
    padding: 10,
    marginTop: 10
  },
  btnText:{
    color: '#fff',
    textAlign:'center',
    borderRadius: 5,
    backgroundColor: '#FDB657',
    padding: 10,

  }
})

export default ProductItem
