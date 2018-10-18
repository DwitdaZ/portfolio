import React, { Component, Fragment } from 'react';
import './App.css';
import Nav from './Navigation';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div id="hero">
                    <div className="container">
                        <div className="row">
                            <Nav />
                        </div>

                        <div className="row hero-content pt-lg-5 pb-lg-5 pt-4">
                            <div className="col-md-6 col-sm-12">
                                <h3 className="text-uppercase text-center text-md-left">
                                    In a world not defined by limits
                                </h3>
                                <h1 className="text-uppercase text-center text-md-left">
                                    <em>Unleash the <span style={{color:"goldenrod", fontWeight:"bolder"}}>beast!!</span></em>
                                </h1>
                            </div>
                            <div className="col-md-6 col-sm-12 text-center">
                                {/* <img src="./src/assests/carSpeed.jpg" className="hero-img mt-5 mt-md-0"></img> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature-wrapper bg-dark pt-5 pb-5 mt-5 mt-lg-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                                <i class="fa fa-map-marked-alt fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>some catchy phrase should go here, but I can't think of anything</p>
                            </div>
                            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                                <i class="fa fa-tachometer-alt fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>some catchy phrase should go here, but I can't think of anything</p>
                            </div>
                            <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                                <i class="fa fa-car-battery fa-2x" aria-hidden="true"></i>
                            </div>
                            <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>some catchy phrase should go here, but I can't think of anything</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="join-container" className="pt-lg-5 pb-lg-5 pt-5">
                    <div className="container text-center pt-5">
                        <h2 className="text-uppercase">Enter your email</h2>
                        <h4 className="text-uppercase">Subscribe here for awesome kickbacks</h4>
                        <form>
                            <div className="form-group row pt-lg-5 pb-lg-5 pt-5">
                                <div className="col-sm-12 col-md-4 offset-md-2">
                                    <input 
                                        className="email" 
                                        className="form-control mb-4" 
                                        id="formInput" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter your email"
                                    ></input>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <button 
                                        type="button"
                                        className="btn btn-warning btn-block text-uppercase"
                                        style={{backgroundColor:"goldenrod"}}
                                    >Okay!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <footer className="bg-dark pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-4 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>
                                    Web-based player tracking system for keeping tally of your stats
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>
                                    Web-based player tracking system for keeping tally of your stats
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-4 text-center text-uppercase text-md-left mb-3 mb-md-0">
                                <p>
                                    Web-based player tracking system for keeping tally of your stats
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


            </Fragment>
        );
    }
  }

export default App;
