import React, {
  TouchableHighlight,
  Component,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native'
import appDispatcher from '../dispatcher'
import Icon from 'react-native-vector-icons/FontAwesome'
import BankStore from '../Store/BankStore'

class BankList extends Component{
  constructor() {
    super()
  }

  renderItem(){
    let checkIcon=(<Icon style={styles.check} name='check' size={20} color='#31455C'/>)
    let selectCardId=BankStore.getCardId()

    return this.props.bankData.map(function(value,index){
            return(
              <TouchableHighlight
                key={index}
                underlayColor="transparent"
                onPress={
                  ()=>{
                    appDispatcher.dispatch({
                      actionType: 'select:bank',
                      cardId: value.cardId
                    })
                    this.props.navigator.pop()
                  }
                }
              >
                <View
                  style={styles.bankItem}
                >
                  <Text>
                    {value.bankName} {value.bankCard}
                  </Text>
                  <Text style={styles.limit}>
                    可用额度5万元
                  </Text>
                  {selectCardId===value.cardId ? checkIcon :  null}
                </View>
              </TouchableHighlight>
            )
          },this)
  }
  render(){
    let bankItem=this.renderItem()
    return(
      <View style={styles.container}>
          {bankItem}
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
  bankItem:{
    borderBottomWidth: 1,
    borderColor:'#b2b2b2',
    padding:10,
  },
  limit:{
    fontSize: 12,
    color:'#999',
    marginTop:5
  },
  check:{
    position: 'absolute',
    right:10,
    top: 15
  }
})

export default BankList
