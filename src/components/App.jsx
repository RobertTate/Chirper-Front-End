import React, { Component, Fragment } from 'react';
import Form from './Form';

const styles = {
    width: "18rem",
};

class App extends Component {
    render() {
        return (
            <Fragment>
                <Form />
                <div className="col-md-auto col-sm-auto">
                <div className="card card-text-center" style={styles}>
                    <div className="card-body">
                        <h5 className="card-title">This site is providing some good laughs this morning here at the Twitter office.</h5>
                    </div>
                </div>
                <div className="card card-text-center" style={styles}>
                    <div className="card-body">
                        <h5 className="card-title">Dreamlike. Semi-sensical. Sort of terrifying. The site is less a Twitter toy than a disturbing peer into my subconscious.</h5>      
                    </div>
                </div>
                <div className="card card-text-center" style={styles}>
                    <div className="card-body">
                        <h5 className="card-title">Add this to the pile of brilliant Twitter-related time-wasters.</h5>
                    </div>
                </div>
                </div>
            </Fragment>
        );
    }
}

export default App;
