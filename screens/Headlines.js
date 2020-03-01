import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, FlatList, Linking} from 'react-native';
import {fetchHeadLines} from '../actions/NewsActions';
import ListItem from '../components/ListItem';

class Headlines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.fetchHeadLines();
  }

  handleLink(link) {
    Linking.canOpenURL(link)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + link);
        } else {
          return Linking.openURL(link);
        }
      })
      .catch(err => console.error('An error occurred', err));
  }

  render() {
    return (
      <View style={styles.pageWrapper}>
        <FlatList
          data={this.props.headlines}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <ListItem item={item} handleLink={this.handleLink.bind(this)} />
          )}
        />
      </View>
    );
  }
}

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

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  headlines: state.news.headlines,
});

const mapDispatchToProps = dispatch => ({
  fetchHeadLines: () => dispatch(fetchHeadLines()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Headlines);
