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
        <div className="container">
        <BorrowerNavBar />        
        <hr/>
        <div className="row">
        <div className="col-md-2">
          <label>Name :</label>
          <span>{this.props.LoginReducer.userDetails.firstName}</span>
        </div>
        <div className="col-md-2">
          <label>Balance :</label>
          <span>{this.props.LoginReducer.userDetails.balanceAmt}</span>
        </div>
        <div className="col-md-2">
        <label>Role :</label>
        <span>{this.props.LoginReducer.userDetails.role}</span>
        </div>
        </div>
        <br />
      </div>
      {this.props.children}
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
