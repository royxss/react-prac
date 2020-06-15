import React, { Component } from 'react'

export default class Items extends Component {
    render() {
        return (
            <div class='row'>    
                <div class="col-md-8 offset-md-2"> 
                    <div class="alert alert-primary alert-dismissible fade show" role="alert">
                        {this.props.text}
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close" 
                        onClick={this.props.counterDown}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>    
            </div>
        )
    }
}
