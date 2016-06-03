import React, {
  Component,
  WebView,
} from 'react-native'
class NewGuider extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://www.guihua.com/help/investment_guide'
    }
  }

  render() {
    return (
      <WebView
        source={{uri: this.state.url}}
        startInLoadingState={true}        >
      </WebView>
    )
  }
}

export default NewGuider
