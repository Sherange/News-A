import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const ListItem = ({item, handleLink}) => {
  return (
    <TouchableOpacity
      onPress={() => handleLink(item.url)}
      style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : 'https://x.kinja-static.com/assets/images/logos/placeholders/default.png',
          }}
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.subTitle}>
          {item.source.name}
          {item.author ? ` - ${item.author}` : null}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  imageContainer: {
    flex: 1,
  },
  imageStyle: {
    width: 120,
    height: 60,
  },
  textContainer: {
    flex: 2,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
    // marginVertical: 10,
  },
  subTitle: {
    fontSize: 12,
    margin: 2,
  },
  textColor: {
    color: 'red',
  },
});

export default ListItem;
