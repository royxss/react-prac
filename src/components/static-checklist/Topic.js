import React, { Component } from 'react'

export default class Topic extends Component {

    undoResetTopic () {
        console.log('Undone')
    }

    render() {
        return (
            <div class='row'>
                <div class="col-md-10"> 
                    <nav class="navbar navbar-dark bg-secondary justify-content-between">
                        <a class="navbar-brand" href="!#">
                            {this.props.text}
                        </a>
                        <div class={this.props.show}>
                            <form class="form-inline">
                                <span ref='isComplete' class="badge badge-pill badge-success">Complete</span> &nbsp;&nbsp;
                                <span onClick={this.props.resetState}><i class="las la-undo-alt text-warning" style={styles.undoico}></i></span>
                            </form>
                        </div>
                    </nav>    
                </div>
            </div> 
        )
    }
}

// some styles which can be moved to style sheet later
const styles = {
    undoico: {
        fontSize: 15.0,
    }
}