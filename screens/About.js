import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <View style={styles.pageWarapper}>
        <Text style={styles.textColor}>News App - About</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageWarapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'red',
  },
});

export default About;
