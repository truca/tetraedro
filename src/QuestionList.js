import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionList extends Component {
  render() {
    const { questions, selected } = this.props;
    return (
      <ul className="questionList">
        {questions.map((question, idx) => (
          <li
            className={
              selected && selected === question.id
                ? "questionItem selected"
                : "questionItem"
            }
            key={question + idx}
          >
            <div className="questionNumber">{idx + 1}</div>
            <div className="questionText">{question.text}</div>
          </li>
        ))}
      </ul>
    );
  }
}

export default connect(state => ({
  questions: state.questions,
  selected: state.id
}))(QuestionList);
