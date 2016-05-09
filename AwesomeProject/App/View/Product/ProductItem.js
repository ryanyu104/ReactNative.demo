import React, {
  TouchableHighlight,
  AlertIOS,
  Component,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import BankStore from '../Store/BankStore'
import Icon from 'react-native-vector-icons/FontAwesome'
import BankList from './BankList'

let cardId

function getSelectCardId(){
  cardId  = BankStore.getCardId()
}

const orderData = {
  productData: {
    minAmount: 100
  },
  bankData: [{
    bankName: '招商银行',
    bankCard: '8456',
    cardId: '0'
  }, {
    bankName: '建设银行',
    bankCard: '7234',
    cardId: '1'
  }]
}

class ProductItem extends Component {
  constructor() {
    super()
    getSelectCardId()
    this.state = {
      moneyNum: '',
      selectCard: ''
    }
  }

  checkError() {
    if (this.state.moneyNum < orderData.productData.minAmount) {
      return true
    }
    return false
  }

  componentDidMount() {
    BankStore.on('change', function () {
      this.forceUpdate(getSelectCardId())
    }.bind(this))
  }


  renderBank(){
    for(let v in orderData.bankData){
      if(orderData.bankData[v].cardId===cardId){
         console.log(orderData.bankData[v])
      }
    }
    return(
      <TouchableHighlight
        underlayColor="transparent"
        onPress={
          ()=>{
            if(!this.state.moneyNum){
              AlertIOS.alert(
                '请先填写金额',
              )
              return
            }
            this.props.navigator.push({
              title: '银行列表',
              component: BankList,
              passProps: {
                navigator: this.props.navigator,
                bankData: orderData.bankData,
              }
            })
          }
        }
      >
        <View style={styles.bankBox}>
          <Text style={styles.title}>
            付款银行
          </Text>
          <Text style={styles.bankDetail}>
            招商银行（8000）
          </Text>
          <Icon style={styles.angleRight} name='angle-right' size={20} color='#999'/>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    let btnText = this.checkError() ? '购买' : `实付${this.state.moneyNum}元`
    let bankBox=this.renderBank()

    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.moneyBox}>
            <Text style={styles.title}>
              购买金额
            </Text>
            <TextInput
              style={styles.moneyInput}
              onChangeText={(moneyNum) => this.setState({moneyNum})}
              value={this.state.moneyNum}
              keyboardType='numeric'
              placeholder='100元起投'
            />
          </View>
          {bankBox}
        </View>
        <View style={styles.btn}>
          <Text style={[styles.btnText, this.checkError() ? styles.btnDisable : null]}>
            {btnText}
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
  wrapper: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  moneyBox: {
    borderColor: '#F5F5F5',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  bankBox: {
    flexDirection: 'row',
    padding: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  bankDetail: {
    color: '#62BFCD'
  },
  title: {
    width: 70,
  },
  moneyInput: {
    flex: 1,
    height: 30
  },
  angleRight: {
    position: 'absolute',
    right: 10,
    top: 7
  },
  btn: {
    justifyContent: 'center',
    padding: 10,
    marginTop: 10
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#FDB657',
    padding: 10,
  },
  btnDisable: {
    backgroundColor: '#EDEEF2'
  }
})

export default ProductItem
