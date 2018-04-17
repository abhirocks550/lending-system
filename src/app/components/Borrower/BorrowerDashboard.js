import React from 'react';
import { connect } from 'react-redux';
// import * as LoginActions from '../../actions/LoginActions';

class Borrower extends React.Component {
  constructor() {
    super();

    // this.handleClick = this.handleClick.bind(this);
  };

  render() {
    return (
      <div>Borrower Dashboard</div>
    );
  };
}

const mapStateToProps = (state, ownState) => {
    return {
    //   LoginReducer: state.LoginReducer,
    };
  };

const mapDispatchToProps = dispatch => ({
//   LoggedIn: () => {
//     dispatch(LoginActions.UserLoggedIn());
//   },
});

export default connect(mapStateToProps, mapDispatchToProps)(Borrower);
