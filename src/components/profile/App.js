import React, { Component } from 'react';
import UserDetails from './UserDetails';
import Success from './Success';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            name: '',
            email: '',
            dob: '',
            city: '',
            pic: ''
        };
        this.handleChange = this.handleChange.bind(this);
      }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    // proceed to the previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
      }    

    render() {
        const { step } = this.state;
        const { name, email, dob, city, pic} = this.state;

        // for passing variables to other components
        const values = { name, email, dob, city, pic};
        //alert("step: " + step)
        switch(step) {
            case 1:
                return (
                    <UserDetails>
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    </UserDetails>
                )
            case 2:
                return <h1> Hello Step 2: Personal Details </h1>  
            case 3:
                return <h1> Hello Step 3: Confirm </h1> 
            case 4:
                return <Success />  
            default:
                return <h1> Hello Default </h1> 

        }
    }
}

export default Profile;


