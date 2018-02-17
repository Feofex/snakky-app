import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isShowingText: true};

  }
  onPressLearnMore(){

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>First App</Text>
        <Button
        onPress={()=>this.onPressLearnMore()}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
