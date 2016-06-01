import React, {
  Component,
  WebView,
} from 'react-native'
class Faq extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://www.guihua.com/help/faq'
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

export default Faq
