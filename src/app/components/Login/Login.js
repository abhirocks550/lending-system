import React from 'react';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/LoginActions';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
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
    this.props.LoggedIn();
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address:</label>
            <input type="email" name="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" className="form-control" id="pwd" />
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
  LoggedIn: () => {
    dispatch(LoginActions.UserLoggedIn());
  },

  UpdateInput: () => {
    dispatch(LoginActions.UpdateInput());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
