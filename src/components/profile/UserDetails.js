import React, { Component } from 'react';

export default class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        //const { nextStep, handleChange, values } = this.props;
        // console.log(this.props);
        return (
            <div class="container">
                    <div class="col-md-8 offset-md-2">
                        <nav class="navbar navbar-dark bg-secondary justify-content-between">
                            <a class="navbar-brand" href="!#">
                                Enter User Details:
                            </a>
                        </nav>
                        <br />
                        <form>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="name" class="form-control" placeholder="enter your name" />
                            </div>
                            <div class="form-group">
                                <label>E-Mail</label>
                                <input type="email" class="form-control" placeholder="enter your e-mail" />
                                <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label>City</label>
                                <input type="text" class="form-control" placeholder="enter your city" />
                            </div>
                            <br/>
                            <button type="button" class="btn btn-primary">Next</button>
                        </form>
                    </div>    
            </div>
        );
    }
}
