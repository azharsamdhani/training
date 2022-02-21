import { useEffect, useState } from "react";
import {fetchQuiz } from './API'
import QuestionCard from "./components/Questioncard";
import './App.css';
// import { SelectButtons } from "./components/SelectButtons";

const TOTAL_QUESTIONS  = 10
function App() {
  const [questions,setQuestions] = useState([]);
  const [currentQuestion,setCurrentQuestion] = useState(0);
  const [score,setScore] = useState(0);
  const [isStarted,setIsStarted] = useState(false);
  const [isFinished,setIsFinished] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [key] =useState(20)
  const names = [["animals",27],["mythology",20],["politics",24]]
  const initialize = () =>{
    setQuestions([]);
    setCurrentQuestion(0);
    setScore(0);
    setIsStarted(false);
    setIsFinished(false);
    setIsLoading(false);
  }
  const startQuiz = (key) => {    
    initialize()
    setIsLoading(true);
    fetchQuiz(TOTAL_QUESTIONS,'easy',key).then((res)=> {setQuestions(res); setIsLoading(false);});    
    setIsStarted(true);
  }

  const checkAnswer = (e) =>{
    const userOption = e.target.value;
    const correct = e.target.value == questions[currentQuestion].correct_answer;
    if(correct===true){
      setScore(score+1);
    }
    console.log(correct,score);
    questions[currentQuestion].userAnswer = userOption;
    questions[currentQuestion].correct = correct;
    nextQuestion();
  }

  const nextQuestion = () => {
    if(currentQuestion<TOTAL_QUESTIONS-1)
    setCurrentQuestion(n=>n+1);
    if(currentQuestion==TOTAL_QUESTIONS-1)
    setIsFinished(true);
  }
  console.log(key)
  return (
    <div>
      hi
    <div className="quiz-container">
      
       {
        isFinished===true ?
        <h1 className="title">You scored {score}</h1>
        : <h1 className="title">Quiz</h1>
      }
      
      
      {isStarted===true && isFinished==false || 
      <div className="start-btn-wrapper">
        <h3  className="title">Select category to start the Quiz</h3>
       {
            names.map((name)=><button key={name[0]} onClick={() =>startQuiz(name[1])}>{name[0]}</button>)

        }
      </div>
      }
       {isStarted===true && isFinished==false &&
      <p className="question-index">Question {currentQuestion+1} <small>/{TOTAL_QUESTIONS}</small></p>
       }
      {isStarted===true  && isFinished==false &&
      <p className="score">Score : {score}</p>
      }
      {questions.length > 0  && isFinished==false && 
        <QuestionCard question={questions[currentQuestion]} checkAnswer={checkAnswer}/>
      } 
      
    </div>
    </div>
  );
}

export default App;
