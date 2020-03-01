import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NewsItem = ({item, handleLink}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleLink(item.url)}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>{item.name}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#3498DB',
    paddingLeft: 8,
    paddingVertical: 5,
    marginVertical: 8,
    borderTopEndRadius: 8,
  },
  titleText: {
    color: '#FFFFFF',
  },
  descriptionContainer: {
    flexDirection: 'row',
  },
  descriptionText: {
    color: '#000000',
  },
});

export default NewsItem;
