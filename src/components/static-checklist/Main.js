// This is the starting point to parameterize the App. Might not be necessary for other cases;
import React, { Component } from 'react';
import App from './App';
import Success from './Success';

// Hardcoded template
const topicName1 = 'Step 1: Format resume';
const itemList1 = ['1. Fix Resposibilities', 
'2. Separate Date Elements']

const topicName2 = 'Step 2: Fix MS Word Grammer Error';
const itemList2 = ['1. Check your MS word setting.', 
'2. Click on Editor to fix']

const topicName3 = 'Step 3: Validate comprehension';
const itemList3 = ['1. Check if the project description makes sense', 
'2. Environment section has missing skills',
'3. Summary has missing skills']

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mainCount: itemList1.length + itemList2.length + itemList3.length
    };
  }

  mainCounterDown() {
    let { mainCount } = this.state; 
    this.setState({
      mainCount : mainCount - 1         
        });
} 

  render() {
    //console.log('Rendering: ' + this.state.mainCount)
    let { mainCount } = this.state;

    if (mainCount !== 0){
      return (
        <div>
          <App
            topicName = {topicName1}
            itemList = {itemList1}
          />
  
          <App
            topicName = {topicName2}
            itemList = {itemList2}
          />
  
          <App
            topicName = {topicName3}
            itemList = {itemList3}
          /> 
        </div>
      )}
      else{
        return (
          <Success />
        )

      }
    }
  }

