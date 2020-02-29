import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {fetchNews} from '../actions/NewsActions';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.fetchNews();
  }

  render() {
    console.log('headlines', this.props.headlines);
    return (
      <View style={styles.pageWrapper}>
        <FlatList
          data={this.props.headlines}
          keyExtractor={item => item.title}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={styles.itemContainer}>
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
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageWrapper: {
    flex: 1,
  },
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

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  headlines: state.news.headlines,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
