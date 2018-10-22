import React, { Fragment } from 'react';

const Features = () => {
    return (
        <Fragment>
            <div className="feature-wrapper bg-dark pt-4 pb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                            <i className="fa fa-map-marked-alt fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                            <p>some catchy phrase should go here, but I can't think of anything</p>
                        </div>
                        <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                            <i className="fa fa-tachometer-alt fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                            <p>some catchy phrase should go here, but I can't think of anything</p>
                        </div>
                        <div className="col-sm-12 col-md-1 text-center mb-3 mb-md-0">
                            <i className="fa fa-car-battery fa-2x" aria-hidden="true"></i>
                        </div>
                        <div className="col-sm-12 col-md-3 text-center text-uppercase text-md-left mb-3 mb-md-0">
                            <p>some catchy phrase should go here, but I can't think of anything</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Features;