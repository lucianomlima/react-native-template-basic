//@flow

/**
 * React Native Basic App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Your App is ready and you already have:</Text>
        <View style={styles.featuresList}>
          <Text style={styles.feature}>{'\u2705 ESLint'}</Text>
          <Text style={styles.feature}>{'\u2705 Custom Scripts'}</Text>
          <Text style={styles.feature}>{'\u2705 Flow'}</Text>
        </View>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  instructions: {
    color: '#333333',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  featuresList: {
    marginVertical: 10,
  },
  feature: {
    fontSize: 16,
    marginVertical: 5,
  },
});

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu',
});

const App = (
  <View style={styles.container}>
    <Text style={styles.welcome}>Welcome to React Native!</Text>
    <Text style={styles.instructions}>Your App is ready and you already have:</Text>
    <View style={styles.featuresList}>
      <Text style={styles.feature}>{'\u2705 ESLint'}</Text>
      <Text style={styles.feature}>{'\u2705 Prettier'}</Text>
      <Text style={styles.feature}>{'\u2705 Lint Staged'}</Text>
      <Text style={styles.feature}>{'\u2705 Flow'}</Text>
      <Text style={styles.feature}>{'\u2705 Custom Scripts'}</Text>
    </View>
    <Text style={styles.instructions}>To get started, edit App.js</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
);

export default App;
