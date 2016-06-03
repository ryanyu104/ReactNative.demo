import React, {
  TouchableHighlight,
  Component,
  TextInput,
  Text,
  Image,
  View
} from 'react-native'

class Account extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Image
          style={styles.bg}
          source={require('../../img/triangle_bg.png')}
        />
        <View style={styles.inputWrapper}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.textInput}
              keyboardType='numeric'
              placeholder='手机号'
            />
            <TextInput
              style={styles.textInput}
              placeholder='密码'
            />
            <View style={styles.btn}>
              <Text style={styles.btnText}>
                登录
              </Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

let styles = React.StyleSheet.create({
  wrapper:{
    flex:1,
  },
  bg: {
    flex: 1,
    position: 'absolute',
  },
  textInput:{
    height: 30,
    backgroundColor: 'rgba(255,255,255,.5)',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    marginTop: 15
  },
  inputWapper:{
    flexDirection: 'row',
  },
  inputBox:{
    flex: 1,
    marginTop: 150,
    paddingLeft: 20,
    paddingRight: 20,
  },
  btn:{
    backgroundColor:'#2E67B7',
    marginTop: 25,
    padding: 8
  },
  btnText:{
    color: 'white',
    textAlign: 'center'
  }
})
export default Account
