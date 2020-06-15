import React, { Component } from 'react'

export default class Success extends Component {
    render() {
        return (
            <div class="container alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>Thank you for cleaning up the resume. Now we can hold you accountable for everything!</p>
                <hr />
                <p class="mb-0">Encourage you to practice these steps...</p>
            </div>
        )
    }
}
