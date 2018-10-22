import React, { Fragment } from 'react';

const MainHeroContent = () => {
    return (
        <Fragment>
            <div className="row hero-content pt-5 pb-5">
                <div className="col-md-6 col-sm-12 mt-md-5 mb-md-5">
                    <h3 className="text-uppercase text-center text-md-left">
                        In a world not defined by limits
                    </h3>
                    <h1 className="text-uppercase text-center text-md-left">
                        <em>Unleash the <span style={{color:"goldenrod", fontWeight:"bolder"}}>beast!!</span></em>
                    </h1>
                </div>
                <div className="col-md-6 col-sm-12 text-center mt-md-5 mb-md-5">
                    {/* <img src="./src/assests/carSpeed.jpg" className="hero-img mt-5 mt-md-0"></img> */}
                </div>
            </div>
        </Fragment>
    );
}

export default MainHeroContent;