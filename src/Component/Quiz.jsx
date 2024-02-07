import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score,setScore]=useState(0)
  
  const handleNextQuestion = (para) => {
    if(para===true)setScore(score+1)
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('Quiz over');
    }
  };

  const quizQuestions = [
    {
      question: 'What is the capital of France?',
      options: [
        { text: 'Berlin', isCorrect: false },
        { text: 'Madrid', isCorrect: false },
        { text: 'Paris', isCorrect: true },
        { text: 'Rome', isCorrect: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: [
        { text: 'Venus', isCorrect: false },
        { text: 'Mars', isCorrect: true },
        { text: 'Jupiter', isCorrect: false },
        { text: 'Saturn', isCorrect: false }
      ]
    },
    {
      question: 'What is the largest mammal in the world?',
      options: [
        { text: 'Elephant', isCorrect: false },
        { text: 'Blue Whale', isCorrect: true },
        { text: 'Giraffe', isCorrect: false },
        { text: 'Hippopotamus', isCorrect: false }
      ]
    }
  ];

  const currentQuestionData = quizQuestions[currentQuestion];

  return (
    <div>
      <h1>Quiz App</h1>
      <h2>Question {currentQuestion + 1}: {currentQuestionData.question}</h2>
      {currentQuestionData.options.map((option, index) => (
        <button key={index} onClick={()=>handleNextQuestion(option.isCorrect)}>{option.text}</button>
      ))}
      <h3>your score:-{score}</h3>
    </div>
  );
};

export default Quiz;
