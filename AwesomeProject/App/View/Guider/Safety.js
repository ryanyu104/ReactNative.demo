import React, {
  Component,
  Text,
  View
} from 'react-native'

class Safety extends Component {
  constructor() {
    super()
  }

  render() {
    return(
    <View style={styles.container}>
       <Text>
         安全保障
       </Text>
    </View>
    )
  }
}

var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  }
})

export default Safety
