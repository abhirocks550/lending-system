import React from 'react';
import './NavigationBar.css';
import { Link } from 'react-router';

const NavBar = (props) => {
    let navBarSection =
        <section id="navBar-section">
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header" id="navBarHeading">
                        <span>JSONPlaceholder App</span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/" activeClassName="active" >Get Posts</Link></li>
                        <li><Link to="/posts" activeClassName="active" >Add Posts</Link></li>
                        <li>
                            <Link to="/comments" activeClassName="active">
                            Get Comments</Link>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="#"><span className="glyphicon glyphicon-log-in"></span> Logout</Link></li>
                    </ul>
                </div>
            </nav>
        </section>;

    return navBarSection;
  };

export default NavBar;
