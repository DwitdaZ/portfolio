import React, { Component, Fragment } from 'react';
import './App.css';
import Nav from './Navigation';
import MainHeroContent from './components/MainHero';
import Subscribe from './components/Subscribe';
import Features from './components/Features';
import Footer from './components/Footer';

class App extends Component {
    render() {
        return (
            <Fragment>
                <div id="hero">
                    <div className="container">
                        <div className="row">
                            <Nav />
                        </div>
                        <MainHeroContent />
                    </div>
                </div>
                <Features />
                <Subscribe />
                <Footer />
            </Fragment>
        );
    }
  }

export default App;
