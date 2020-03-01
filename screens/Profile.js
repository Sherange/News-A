import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {showMessage} from 'react-native-flash-message';
import {addUser, getUser} from '../actions/UserActions';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }
  componentDidMount() {
    this.props.getUser();
  }

  componentDidUpdate(prevProps) {
    const {authUser} = this.props;
    if (authUser && !prevProps.authUser) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        first_name: authUser.first_name,
        last_name: authUser.last_name,
        email: authUser.email,
        password: authUser.password,
      });
    }
  }

  handleSave() {
    const {first_name, last_name, email, password} = this.state;
    if (!first_name) {
      showMessage({
        message: 'First name required',
        icon: 'auto',
        type: 'danger',
      });
    } else if (!last_name) {
      showMessage({
        message: 'Last name required',
        icon: 'auto',
        type: 'danger',
      });
    } else if (!email) {
      showMessage({
        message: 'Email required',
        icon: 'auto',
        type: 'danger',
      });
    } else if (!password) {
      showMessage({
        message: 'Password required',
        icon: 'auto',
        type: 'danger',
      });
    } else {
      this.props.addUser({first_name, last_name, email, password});
    }
  }

  render() {
    return (
      <View style={styles.pageWarapper}>
        <Input
          label="First Name"
          placeholder="first name here"
          containerStyle={styles.containerStyle}
          value={this.state.first_name}
          onChangeText={first_name => this.setState({first_name})}
          returnKeyType="done"
        />

        <Input
          label="Last Name"
          placeholder="last name here"
          containerStyle={styles.containerStyle}
          value={this.state.last_name}
          onChangeText={last_name => this.setState({last_name})}
          returnKeyType="done"
        />

        <Input
          label="Email"
          placeholder="example@gmail.com"
          containerStyle={styles.containerStyle}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
          returnKeyType="done"
        />

        <Input
          label="Password"
          placeholder=""
          secureTextEntry={true}
          containerStyle={styles.containerStyle}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          returnKeyType="done"
        />

        <Button
          title="Save Profile"
          containerStyle={styles.containerStyle}
          onPress={() => this.handleSave()}
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
    margin: 16,
  },
  containerStyle: {
    margin: 10,
  },
});

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  authUser: state.user.authUser,
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
  getUser: () => dispatch(getUser()),
});
// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
