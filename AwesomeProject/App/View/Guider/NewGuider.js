import React, {
  Component,
  Text,
  View
} from 'react-native'

class NewGuider extends Component {
  constructor() {
    super()
  }

  render() {
    return(
    <View style={styles.container}>
       <Text>
         新手指南
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

export default NewGuider
