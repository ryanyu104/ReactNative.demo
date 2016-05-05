import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native'

class SliderExample extends Component {
  constructor() {
    super()
    this.state={
      value: 0,
    }
  }

  render(){
   return(
     <View>
        <Text style={styles.text} >
          {this.state.value && +this.state.value.toFixed(3)}
        </Text>
        <Slider
          {...this.props}
          onValueChange={(value) => this.setState({value: value})} />
      </View>
    )
  }

  // methods
}
// var SliderExample = React.createClass({
//   getDefaultProps() {
//     return {
//       value: 0,
//     }
//   },

//   getInitialState() {
//     return {
//       value: this.props.value,
//     };
//   },

//   render() {
//     return (
//       <View>
//         <Text style={styles.text} >
//           {this.state.value && +this.state.value.toFixed(3)}
//         </Text>
//         <Slider
//           {...this.props}
//           onValueChange={(value) => this.setState({value: value})} />
//       </View>
//     );
//   }
// });

var SlidingCompleteExample = React.createClass({
  getInitialState() {
    return {
      slideCompletionValue: 0,
      slideCompletionCount: 0,
    };
  },

  render() {
    return (
      <View>
        <SliderExample
          {...this.props}
          onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
        <Text>
          Completions: {this.state.slideCompletionCount} Value: {this.state.slideCompletionValue}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  slider: {
    height: 10,
    margin: 10,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    margin: 10,
  },
});

exports.title = '<Slider>';
exports.displayName = 'SliderExample';
exports.description = 'Slider input for numeric values';
exports.examples = [
  {
    title: 'Default settings',
    render(): ReactElement {
      return <SliderExample />;
    }
  },
  {
    title: 'Initial value: 0.5',
    render(): ReactElement {
      return <SliderExample value={0.5} />;
    }
  },
  {
    title: 'minimumValue: -1, maximumValue: 2',
    render(): ReactElement {
      return (
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
      );
    }
  },
  {
    title: 'step: 0.25',
    render(): ReactElement {
      return <SliderExample step={0.25} />;
    }
  },
  {
    title: 'onSlidingComplete',
    render(): ReactElement {
      return (
        <SlidingCompleteExample />
      );
    }
  },
  {
    title: 'Custom min/max track tint color',
    platform: 'ios',
    render(): ReactElement {
      return (
        <SliderExample
          minimumTrackTintColor={'red'}
          maximumTrackTintColor={'green'}
        />
      );
    }
  },
  {
    title: 'Custom thumb image',
    platform: 'ios',
    render(): ReactElement {
      return <SliderExample thumbImage={require('./uie_thumb_big.png')} />;
    }
  },
  {
    title: 'Custom track image',
    platform: 'ios',
    render(): ReactElement {
      return <SliderExample trackImage={require('./slider.png')} />;
    }
  },
  {
    title: 'Custom min/max track image',
    platform: 'ios',
    render(): ReactElement {
      return (
        <SliderExample
          minimumTrackImage={require('./slider-left.png')}
          maximumTrackImage={require('./slider-right.png')}
        />
      );
    }
  },
];
