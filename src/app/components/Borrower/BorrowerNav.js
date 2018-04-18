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
                        <div className="navbar-header" id="navBarHeading">
                            <span>Money Lending system</span>
                        </div>
                                <ul className="nav navbar-nav">
                                <li><Link to="/transactions" activeClassName="active" >Transactions</Link></li>
                                </ul>
                                <ul className="nav navbar-nav">
                                 <li><Link to="/listLenders" activeClassName="active"><span className=""></span> Lender's List</Link></li>
                                </ul>
                                <ul className="nav navbar-nav navbar-right">
                                 <li><Link to="/Profile"><span className=""></span> Edit Profile </Link></li>
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

