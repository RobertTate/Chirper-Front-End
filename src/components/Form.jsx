import React, { Component, Fragment } from 'react';
import Chirp from './Chirp';
import kiwi from '../assets/kiwi.svg';


class Form extends Component {
    constructor(props) {
        super(props);
// Using state here to set up a starting value for property text, and an empy array for property array.
        this.state = {
            text: "",
            array: []
        };



    }
// using this method below for the text input. Each key set state to a new text value. 
    handleChange(text) {
        this.setState({ text });
    }

// When submit it clicked, the state of text is saved as an array value.
    handleClick(event) {
        event.preventDefault();
        let addValue = this.state.array;
        addValue.unshift(this.state.text);
        this.setState({ array: addValue });
    }



    render() {

        return (
            <Fragment>
                <div className="jumbotron jumbotron-fluid text-left justify-content-start p-3 mb-1 bg-info">
                        <h1 className="display-4">CHIRPER</h1>
                        <img src={kiwi} alt="kiwi" className="img-fluid custom"/>
                        <br /><br/>
                        <p className="lead">A place for you to share insignificant things about yourself.</p>
                </div>
                <form>
                    <div className="form-group col-sm-3 col-md-3">
                        <br/>
                        <label htmlFor="exampleInputEmail1">Enter Your CHIRP Below</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            onChange={(event) => this.handleChange(event.target.value)}
                            placeholder="CHIRP Away!"
                        />
                        <small id="emailHelp" className="form-text text-muted">140 characters or less, please.</small>
                        <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(event) => {
                            this.handleClick(event);
                        }}
                    >Submit</button>
                    </div>
                </form>
                <div className="col-md-auto col-sm-auto">
                    {this.state.array.map((chirp, index) =>
                        <Chirp key={index} value={chirp} />
                    )}
                </div>
            </Fragment>
        );
    }
}

export default Form;