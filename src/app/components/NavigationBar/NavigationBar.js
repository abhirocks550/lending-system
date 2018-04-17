import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as LoginActions from '../../actions/LoginActions';

class NavBar extends React.Component {
  render() {
    let navBarSection = (
            <section id="navBar-section">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header" id="navBarHeading">
                            <span>Money Lending system</span>
                        </div>
                            {
                                this.props.LoginReducer.isLoggedIn &&
                                 <ul className="nav navbar-nav">
                                    <li>
                                        <Link to="/" activeClassName="active" >Transactions</Link>
                                    </li>
                                </ul>
                            }
                            {
                                this.props.LoginReducer.isLoggedIn &&
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                       <Link to="#"><span className="glyphicon glyphicon-log-in">
                                         </span> Logout</Link>
                                    </li>
                                </ul>
                            }
                                          
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

export default connect(mapStateToProps)(NavBar);

