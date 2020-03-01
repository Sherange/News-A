import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, FlatList, Linking} from 'react-native';
import {fetchNews} from '../actions/NewsActions';
import NewsItem from '../components/NewsItem';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.fetchNews();
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
          data={this.props.news}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <NewsItem item={item} handleLink={this.handleLink.bind(this)} />
          )}
        />
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

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  news: state.news.news,
});

const mapDispatchToProps = dispatch => ({
  fetchNews: () => dispatch(fetchNews()),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
