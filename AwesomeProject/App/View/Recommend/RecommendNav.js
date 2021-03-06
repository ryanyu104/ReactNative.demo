import React, {
  TouchableHighlight,
  Component,
  Text,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import NewGuider from '../WebView/NewGuider'
import InviteFriends from '../WebView/InviteFriends'
import Safety from '../WebView/Safety'

const itemData = [
  {
    iconName: 'book',
    text: '新手指南',
    component: NewGuider
  },
  {
    iconName: 'user',
    text: '邀请好友',
    component: InviteFriends
  },
 {
    iconName: 'lock',
    text: '安全保障',
    component: Safety
  }
]

class RecommendNav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={styles.navContainer}>
        {itemData.map(function(value,index) {
          return (
            <TouchableHighlight
              style={styles.navItem}
              key={index}
              underlayColor="#fff"
              onPress={
                ()=>{
                  this.props.navigator.push({
                    title: value.text,
                    component: value.component,
                    passProps: {navigator: this.props.navigator}
                  })
                }
              }
            >
              <View style={styles.navBox}>
                <Icon name={value.iconName} size={30} color='#31455C' />
                <Text
                  style={styles.navText}
                >
                  {value.text}
                </Text>
              </View>
            </TouchableHighlight>
          )
        },this)}
      </View>
    )
  }
}

var styles = React.StyleSheet.create({

  navContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
  },
  navBox: {
    alignItems: 'center',
  },
  navText: {
    marginTop: 5
  }
})

export default RecommendNav
