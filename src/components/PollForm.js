import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import Question from './Question';

class PollForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poll: this.props.poll || this.defaultPoll()
    }
  }

  defaultPoll = () => ({
    title: '',
    questions: {
      [uuidv4()]: {
        question: '',
        answers: {
          [uuidv4()]: ''
        }
      }
    }
  });

  newTitleState = (poll, target) => {
    poll.title = target.value;
    return poll;
  };

  newQuestionState = (poll, target) => {
    poll.questions[target.dataset.question].question = target.value;
    return poll;
  }

  newAnswerState = (poll, target) => {
    poll.questions[target.dataset.question].answers[target.dataset.answer] = target.value;
    return poll;
  }

  handlePollInputChange = (e, newPollStateCreator) => {
    const target = e.target; 
    this.setState(prevState => ({
      poll: newPollStateCreator({ ...prevState.poll }, target)
    }));
  };

  render() {
    const questions = Object.entries(this.state.poll.questions)
      .map(([uuid, question], index) => (
        <Question 
          key={uuid}
          uuid={uuid}
          question={question}
          index={index}
          handleQuestionChange={e => this.handlePollInputChange(e, this.newQuestionState)}
          handleAnswerChange={e => this.handlePollInputChange(e, this.newAnswerState)}
        />
      )
    );

    return (
      <>
        <h1>PollForm</h1>
        <form>
          <label>
            Title
            <input
              type="text"
              value={this.state.poll.title}
              onChange={e => this.handlePollInputChange(e, this.newTitleState)} 
            />
          </label>
          {questions}
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default PollForm;