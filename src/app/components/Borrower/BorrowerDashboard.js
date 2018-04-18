import React from 'react';
import { connect } from 'react-redux';
import BorrowerNavBar from './BorrowerNav.js';

class Borrower extends React.Component {
  constructor() {
    super();
  };

  render() {
    return (
      <div>
        {/* { this.props.LoginReducer.isLoggedIn && */}
        <div>
        <div className="container">
        <BorrowerNavBar />        
        <div>
          <span className="welcm-Header">Welcome, {this.props.LoginReducer.userDetails.firstName} {this.props.LoginReducer.userDetails.lastName}</span>
        </div>
        <div className="row">
        <div className="col-md-2">
          <label>Balance :</label>
          <span>{this.props.LoginReducer.userDetails.balanceAmt}</span>
        </div>
        <div className="col-md-2">
        <label>Role :</label>
        <span>{this.props.LoginReducer.userDetails.role}</span>
        </div>
        </div>
        <hr/>
      </div>
      {this.props.children}
      </div>
       {/* } */}
      </div>
    );
  };
}

const mapStateToProps = (state, ownState) => {
      return {
        LoginReducer: state.LoginReducer,
      };
    };

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Borrower);
