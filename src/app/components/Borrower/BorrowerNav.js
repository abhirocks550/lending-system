import React from 'react';
import '../NavigationBar/NavigationBar.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class BorrowerNavBar extends React.Component {
  render() {
    let navBarSection = (
            <section id="navBar-section">
                <nav className="navbar navbar-inverse" >
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                                <ul className="nav navbar-nav">
                                <li><Link to="/transactions" id="transaction"> Transactions</Link></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                 <li><Link to="/listLenders" id="lenderlist"> Lender's List</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                <li><Link to="/login"  id="logout"> Logout </Link></li>
                                </ul>
                             <ul className="nav navbar-nav navbar-right">
                                 <li><Link to="/Profile"  id="editprofile"> Edit Profile </Link></li>
                                </ul>
                    </div>
                </nav>
            </section>
            );

    return (
          <div>
              {navBarSection}
          </div>
      );
  }
};

const mapStateToProps = (state, ownState) => {
    return {
      LoginReducer: state.LoginReducer,
    };
  };

export default connect(mapStateToProps)(BorrowerNavBar);

