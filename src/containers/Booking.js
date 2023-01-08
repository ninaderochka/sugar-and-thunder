import React, { useState } from 'react';
import { Questions } from '../components/Questions';
import Button from '../components/Button';

function Booking() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions } = Questions;
  const { question, choices, type } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const onSelectedAnswer = (answer) => {
    if (answer === choices) {
      setSelectedAnswer(true);
    }
  };

  function handleNext() {
    setCurrentQuestion((prev) => prev + 1);
  }
  function handlePrev() {
    setCurrentQuestion((prev) => prev - 1);
  }
  return (
    <div>
      <div className="px-16 py-12 font-normal">
        <h1 className="text-[50px] uppercase mb-4">
          let&apos;s match you with the right therapist
        </h1>
        <p className="text-[28px] text-black/50">
          Please fill out this short questionnaire to provide some general and
          anonymous background <br />
          about you and the issues you&apos;d like to deal with in online
          therapy. It would help us match you
          <br />
          with the most suitable therapist for you.{' '}
        </p>
      </div>

      <div className="w-full flex flex-col p-2 sm:w-1/2 lg:w-full mb-10">
        <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded w-full md:w-full md:mx-auto lg:w-[800px] lg:h-[557px]">
          <div className="grid gap-y-4 m-auto">
            <h3 className="font-poppins text-3xl font-normal">{question}</h3>
            <div className="grid gap-y-4 pt-10">
              {choices.map((answer, index) => {
                if (type === 'normal') {
                  return (
                    <input
                      type="button"
                      value={answer}
                      onClick={() => onSelectedAnswer(answer)}
                      key={answer}
                      className={`font-poppins text-2xl border-2 w-full lg:w-[723px] p-4 rounded focus:bg-button-blue focus:text-white ${
                        selectedAnswer === index ? 'bg-button-blue' : ''
                      }`}
                    />
                  );
                }
                return (
                  <div className="flex whitespace-nowrap font-poppins text-2xl gap-5">
                    <input
                      id={`${currentQuestion}-${index}`}
                      type="radio"
                      value={answer}
                      onChange={() => onSelectedAnswer(answer)}
                      key={answer}
                    />
                    <label htmlFor={`${currentQuestion}-${index}`}>
                      {answer}
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="flex gap-6 mt-20 fixed py-[340px]">
              <Button type="button" onClick={() => handlePrev()} value="Back" />
              <Button type="button" onClick={() => handleNext()} value="Next" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
