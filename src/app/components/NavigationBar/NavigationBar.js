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

