import React from 'react';
import { connect } from 'react-redux';
import * as CommentsActions from '../../actions/commentsActions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    this.props.LoggedIn();
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Email address:</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" className="form-control" id="pwd" />
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
    CommentReducer: state.CommentReducer,
  };
};

const mapDispatchToProps = dispatch => ({
  LoggedIn: () => {
    dispatch(CommentsActions.UserLoggedIn());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
