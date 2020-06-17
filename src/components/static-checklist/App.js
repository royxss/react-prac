import React, { Component } from 'react';
import Items from './Items';
import Topic from './Topic';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // calculate counter from item list
            count: this.props.itemList.length,
            show: 'invisible' 
        };
        this.counterDown = this.counterDown.bind(this);
      }

    resetState() {
        console.log("Undone Complete...");
    }  

    counterDown() {

        // Counter down main
        this.props.mainCounterDown()

        let { count } = this.state; 
        count =  count - 1;

        if (count === 0) {
            this.setState({
                count : count,
                show: 'visible'           
            });
        }
        else {
            this.setState({
                count : count        
            });
        }
    }  

    render() {
        //console.log(this.state.count);
        //console.log(this.state.show);
        return (
            <div class="container">

                <Topic
                text = {this.props.topicName}
                show = {this.state.show} 
                resetState = {this.resetState}
                />
                
                <br/>

                {this.props.itemList.map(itm => <div key={itm}> 
                <Items 
                text = {itm}
                counterDown = {this.counterDown}
                /> 
                </div>)}
            </div>
        
        )
    }
}
