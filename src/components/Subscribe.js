import React, { Fragment } from 'react';

const Subscribe = () => {

    return (
        <Fragment>
            <div id="join-container" className="pt-lg-5 pb-lg-5 pt-5">
                <div className="container text-center">
                    <h2 className="text-uppercase">Enter your email</h2>
                    <h4 className="text-uppercase">Subscribe here for awesome kickbacks</h4>
                    <form>
                        <div className="row form-group m-0 pt-lg-5 pb-lg-5 pt-5">
                            <div className="col-sm-12 col-md-4 offset-md-2">
                                <input 
                                    type="email" 
                                    className="form-control mb-4" 
                                    id="formInput" 
                                    aria-describedby="emailHelp" 
                                    placeholder="Enter your email"
                                ></input>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <button 
                                    type="button"
                                    className="btn btn-warning btn-block text-uppercase mb-4"
                                    style={{backgroundColor:"goldenrod"}}
                                >Okay!</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}


export default Subscribe;