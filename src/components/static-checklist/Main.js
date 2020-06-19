// This is the starting point to parameterize the App. Might not be necessary for other cases;
import React, { Component } from 'react';
import App from './App';
import Success from './Success';

// Hardcoded template
const topicName1 = 'Step 1: Generic Checklist';
const itemList1 = [
  '1. Full name of the candidate should be present in the resume. If not, inform it to the Onsite Manager.',
  '2. Educational background should be mentioned in the resume. If not, inform it to the Onsite Manager.',
  '3. Project Responsibilities should be in chronological order.',
  '4. Project description should actually be the description of the project and not about the company.',
  '5. Fix Grammar Error (red and blue underlines) shown by MS Word. Fix the error with proper words/phrases. Do not "ignore" the errors.',
  '6. Skills mentioned in Summary section should be mentioned in Technical Skills (Skills Matrix) section.',
  '7. Skills mentioned in Summary section should be mentioned in Responsibilities sectoin.',
  '8. Skills mentioned in Technical Skills (Skills Matrix) section should be mentioned in Responsibilities section.',
  '9. Skills mentioned in Responsibilities section should be mentioned in respective Environment sections.'
]

const topicName2 = 'Step 2: RI pre-parsing Checklist (Resume Staging)';
const itemList2 = [
  '1. Maintain at least a line gap between different sections and one line within sections.',
  '2. "Work Experience" heading should not be more than one.',
  '3. For every work experience block, duration must be present in the first line.',
  '4. Every work experience block should have the heading "Responsibilities:"',
  "5. Date should not have '-' in between (e.g. Jan-2018 - Jan-2019 format is not acceptable)"
]

const topicName3 = 'Step 3: RI Parsing';
const itemList3 = [
'1. While parsing in RI, give a quick check if the information is correctly captured by the system.'
]

const topicName4 = 'Step 4: RI post-parsing Checklist';
const itemList4 = [
  'With the information in the Advanced Search, do the following:',
  '1. Fix non-technical misspelled words.',
  '2. Fix non-technical punctuation errors.',
  '3. Replace weak words with relevant keywords.',
  '4. Rephrase repeated work experience.',
  '5. If the flag, "Resume has grammar errors" is present, check if all the non-technical grammar errors are fixed.',
  '6. The Keyword Score should match with the role that the candidate is being submitted to.'
]

const topicName5 = 'Step 5: Additional Checklist for Onsite Recruiters';
const itemList5 = [
  '1. If the full name of the candidate is not present, call the candidate and get their full name.',
  '2. If the education background of the candidate is missing, call the candidate and get their education information.',
  '3. If the LinkedIn of the candidate is not found, get their LinkedIn profile.',
  '4. If the total project experience does not match with the years mentioned in the summary, check with the candidate.',
  '5. If the candidate is a student or a recent grad, check if the candidate is eligible for the role.',
  '6. If the candidate is currently unemployed, check with the candidate.',
  '7. If the candidate has gaps in their work experience, check with the candidate.',
  '8. If the candidate has projects less than 1 year, check with the candidate.'  

]

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mainCount: itemList1.length + itemList2.length + itemList3.length + itemList4.length + itemList5.length
    };
    this.mainCounterDown = this.mainCounterDown.bind(this);
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
            mainCounterDown = {this.mainCounterDown}
          />
  
          <App
            topicName = {topicName2}
            itemList = {itemList2}
            mainCounterDown = {this.mainCounterDown}
          />
  
          <App
            topicName = {topicName3}
            itemList = {itemList3}
            mainCounterDown = {this.mainCounterDown}
          /> 

          <App
            topicName = {topicName4}
            itemList = {itemList4}
            mainCounterDown = {this.mainCounterDown}
          /> 

          <App
            topicName = {topicName5}
            itemList = {itemList5}
            mainCounterDown = {this.mainCounterDown}
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

