import React, {
  TouchableHighlight,
  AlertIOS,
  Component,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import AppStore from '../Store/AppStore'
import BankList from './BankList'

let callback

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
    this.state = {
      moneyNum: '',
      selectCardId: AppStore.getCardId()
    }
  }

  checkError() {
    if(!(/^\d+$/).test(this.state.moneyNum)){
      return true
    }
    if (this.state.moneyNum < orderData.productData.minAmount) {
      return true
    }
    return false
  }

  componentDidMount() {
    callback = ()=>{
      this.setState({
        selectCardId: AppStore.getCardId()
      })
    }
    AppStore.on('change',callback)
  }

  componentWillUnmount() {
    AppStore.removeListener('change', callback)
  }

  renderBank(){
    let selectCard = orderData.bankData.length ? orderData.bankData[0]: null

    for(let index in orderData.bankData){
      if(orderData.bankData[index].cardId===this.state.selectCardId){
        selectCard = orderData.bankData[index]
      }
    }

    let selectCardText = selectCard ? `${selectCard.bankName}(${selectCard.bankCard})` : ''
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
            {selectCardText}
          </Text>
          <Icon style={styles.angleRight} name='angle-right' size={20} color='#999'/>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    let btnText = this.checkError() ? '购买' : `实付${this.state.moneyNum}元`
    let bankBox = this.renderBank()

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
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.btn}
          onPress={
            ()=>{
              if(this.checkError()){
                return
              }
              AlertIOS.alert(
                '购买成功',
                null,
                [{text: '确定', onPress: () => this.props.navigator.popToTop()}]
              )
            }

          }
        >
          <Text style={[styles.btnText, this.checkError() ? styles.btnDisable : null]}>
            {btnText}
          </Text>
        </TouchableHighlight>
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
