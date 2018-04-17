import React from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/LoginActions';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.updateInput = this.updateInput.bind(this);
  };

  componentWillReceiveProps(nextState) {
    if (nextState.LoginReducer.isLoggedIn !== this.props.LoginReducer.isLoggedIn) {
      this.props.router.push('/borrowerPage');
    }
  }

  updateInput(event) {
    this.props.UpdateInput(event);
  }

  handleClick() {
    let user = {
      username: this.props.LoginReducer.username,
      password: this.props.LoginReducer.password,
    };
    this.props.LoggedIn(user);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>User name:</label>
            <input type="text" onChange={this.updateInput} name="username"
            className="form-control" id="username" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" onChange={this.updateInput} name="password"
            className="form-control" id="pwd" />
          </div>
          <button type="button"
            onClick={this.handleClick}
            className="btn btn-default">Submit</button>
        </form>

      </div>
    );
  }
};

const mapStateToProps = (state, ownState) => {
  return {
    LoginReducer: state.LoginReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  LoggedIn: (user) => {
    dispatch(LoginActions.UserLoggedIn(user));
  },

  UpdateInput: (event) => {
    dispatch(LoginActions.UpdateInput(event));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
