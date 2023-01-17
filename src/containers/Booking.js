import React, { useState } from 'react';
import { Questions } from '../components/Questions';
import Button from '../components/Button';

function Booking() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { questions } = Questions;
  const { question, choices, type } = questions[currentQuestion];
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isChecked, setIsChecked] = useState('');

  const onSelectedAnswer = (answer) => {
    if (answer === choices) {
      setSelectedAnswer(true);
    }
  };

  // const isLastQuestion = currentQuestion === questions.length -1

  function handleCheckedChange(answer) {
    setIsChecked(answer);
  }

  function handleNext() {
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  }
  function handlePrev() {
    if (currentQuestion !== 0) setCurrentQuestion((prev) => prev - 1);
  }

  return (
    <div>
      {currentQuestion !== questions.length - 1 ? (
        <div className="px-16 py-12 font-normal">
          <h1 className="text-[50px] uppercase mb-4">
            {/* let&apos;s match you with the right therapist */}
            {question}
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
      ) : (
        <div className="px-16 py-12 font-normal">
          <h1 className="text-[50px] uppercase mb-4">{question}</h1>
          <p className="text-[28px] text-black/50">
            Please specify (in a few sentences) why you’d like counseling.This
            will give your counselor a good understanding of where to start.
          </p>
        </div>
      )}

      <div className="w-full flex flex-col p-2">
        <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded w-full md:mx-auto lg:w-2/4 lg:h-[557px] mb-20">
          <div className="grid gap-y-4 m-auto">
            <h3 className="font-poppins text-3xl font-normal">{question}</h3>
            <div className="grid gap-y-4 pt-10">
              {choices &&
                choices.map((answer, index) => {
                  if (type === 'normal') {
                    return (
                      <input
                        type="button"
                        value={answer}
                        onClick={() => onSelectedAnswer(answer)}
                        key={answer}
                        className={`font-poppins text-2xl border-2 w-full lg:w-11/12 p-4 rounded focus:bg-button-blue focus:text-white ${
                          selectedAnswer === index ? 'bg-button-blue' : ''
                        }`}
                      />
                    );
                  }

                  if (type === 'radio')
                    return (
                      <div className="flex whitespace-nowrap font-poppins text-2xl gap-2">
                        <input
                          id={`${currentQuestion}-${index}`}
                          type="radio"
                          key={answer}
                          checked={isChecked === answer}
                          onChange={() => handleCheckedChange(answer)}
                        />
                        <label htmlFor={`${currentQuestion}-${index}`}>
                          {answer}
                        </label>
                      </div>
                    );
                  return (
                    <input
                      type="text"
                      placeholder='hi'
                      className="w-2/4 h-screen bg-slate-50 shadow-sm"
                    />
                  );
                })}
            </div>
          </div>
          <div className="flex gap-6 fixed bottom-11">
            {/* <div className="flex gap-6 mt-20 fixed py-[340px]"> */}
            {currentQuestion !== 0 && (
              <Button type="button" onClick={() => handlePrev()} value="Back" />
            )}
            <Button type="button" onClick={() => handleNext()} value="Next" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
/* {question.map((finalQuestion) => { if (currentQuestion === questions.length - 1) {
return (

)
          } return (

          <div className="grid gap-y-4 m-auto">
            <h3 className="font-poppins text-3xl font-normal">{question}</h3>
            </div>
          )
          } 
          )} */

//      SUBMMIT PAGE

//  <div className="Booking font-poppins">

// <div className="px-16 py-12 font-normal">
//     <h1 className="text-[50px] uppercase mb-0">your request has been submitted!</h1>
//     <p className="text-[28px] text-black/50">You will receive an email guiding you to book a date and time soon.</p>
// </div>

// <div className="w-[803px] h-[557px] rounded shadow-shadow mx-72 pt-20 space-y-14 font-normal tracking-[-1px]" >
//    <h3 className="text-[32px] ml-56">Request Submitted</h3>
//    <p className="text-[24px] text-center text-[rgba(0, 0, 0, 0.87)]">You Will Receive a Confirmation Email Soon <br/>Please Keep an eye on Your Mail.</p>
//    <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center w-[300px] h-[60px] px-10 text-[24px] mt-16 ml-48">BACK TO HOME</button>
// </div>

// <div className="px-16 py-12 font-normal">
//      <h1 className="text-[50px] uppercase mb-0">Submit your appointment</h1>
//      <p className="text-[28px] text-black/50">Click Submit if you are sure of all your choices. </p>
//  </div>

//  <div className="w-[803px] h-[557px] rounded shadow-shadow mx-72 pt-20 space-y-16 font-normal tracking-[-1px]" >
//     <h3 className="text-[32px] ml-48">Submit Appointment?</h3>
//     <p className="text-[24px] text-center text-[rgba(0, 0, 0, 0.87)]">Please be aware that this action will cost you a ticket!</p>
//     <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center w-[300px] h-[60px] px-20 text-[24px] mt-16 ml-48">SUBMIT</button>

// </div>

// </div>
