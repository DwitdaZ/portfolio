import React, { Component, Fragment } from 'react';


const NavItem = props => {
    const pageURI = window.location.pathname + window.location.search
    const liClassName = ( props.path === pageURI ) ? "nav-item active" : "nav-item";
    return (
        <Fragment>
            <li className={liClassName}>
                <a className="nav-link" href={props.path}>
                    {props.name}
                    { (props.path === pageURI) ? (<span className="sr-only">(current)</span>) : '' }    
                </a>
            </li>
        </Fragment>
    );
}


class Nav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-md bg-faded">
                    <a href="/" className="navbar-brand" id="logo">SITELOGO</a>

                    <button 
                        className="navbar-toggler navbar-toggler-right" 
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    ><span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <NavItem path="/" name="OVERVIEW" />
                            <NavItem path="/specs" name="SPECS" />
                            <NavItem path="/faq" name="FAQ" />
                            <NavItem path="/purchase" name="PURCHASE" />
                        </ul>
                    </div>

                    
                </nav>
            </Fragment>

        );
    }
}

export default Nav;