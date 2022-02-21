import React from 'react';
import parse from "html-react-parser";

const QuestionCard = ({question,checkAnswer}) => {
  return (
    <div className='question-wrapper'>
        <h3 className='question'>{parse(question.question)}</h3>
        {question.options.map((option)=>(
          <div className='option-btn-wrapper' key={option}>
            <button className='btn option-btn' value={option} onClick={(e)=>checkAnswer(e)}>{parse(option)}</button>
          </div>
        ))}
    </div>
  )
}

export default QuestionCard