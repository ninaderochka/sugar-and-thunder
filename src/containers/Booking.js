import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../components/Questions';
import Button from '../components/Button';

function Booking() {
  const [finalAnswers, setFinalAnswers] = useState({});

  const [step, setStep] = useState(0);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { question, choices, type } = questions[currentQuestion];
 
  const [isChecked, setIsChecked] = useState('');
  const [text, setText] = useState('');
  
  const currentAnswer = finalAnswers[currentQuestion]
  
  // eslint-disable-next-line
  console.log(currentAnswer)
 
  const setFinal = (currentQuestion, answer) => {
    setFinalAnswers((prev) => {
      return { ...prev, [currentQuestion]: answer };
    });
  };



  function handleCheckedChange(answer) {
    setIsChecked(answer);
  }

  const handleNext = () => {
   
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1); 
     
    } 
    setStep((prev) => prev + 1);
  }
  const handlePrev = () => {
    if (currentQuestion !== 0) {
     
      setCurrentQuestion((prev) => prev - 1);
      setStep((prev) => prev - 1); 

    } 
  } 
  const isLastQuestion = step === questions.length - 1;
  const isFirstQuestion = step === 0;
  return (
    <div className=" MAIN CONTAINER  grow  flex flex-col">
      {/* HEADER SECTION */}
      {step < questions.length - 1 && (
        <div className="px-12 lg:px-16 py-12 font-normal">
          <h1 className="text-3xl lg:text-5xl uppercase mb-4">
            let&apos;s match you with the right therapist
          </h1>
          <p className="lg:text-3xl text-2xl text-black/50 w-11/12">
            Please fill out this short questionnaire to provide some general and
            anonymous background about you and the issues you&apos;d like to
            deal with in online therapy. It would help us match you with the
            most suitable therapist for you.
          </p>
        </div>
      )}

      {isLastQuestion && (
        <div className="px-12 lg:px-16 py-12 font-normal">
          <h1 className="text-3xl lg:text-5xl uppercase mb-4">{question}</h1>
          <p className="lg:text-3xl text-2xl text-black/50">
            Please specify (in a few sentences) why you’d like counseling.This
            will give your counselor a good understanding of where to start.
          </p>
        </div>
      )}
      {/* QEUSTIONS SECTION */}
      {step < questions.length && (
        <div
          id="QUESTIONS-CONTAINER"
          className="m-auto mb-20 flex flex-col space-y-1 bg-white border-border-grey shadow-shadow-grey drop-shadow-lg  p-8 border-2 rounded w-11/12 md:w-8/12 lg:w-3/6 h-[557px]"
        >
          <div className="h-[90%]">
            {currentQuestion !== questions.length - 1 && (
              <h3 className="font-poppins text-2xl lg:text-3xl font-normal mb-12">
                {question}
              </h3>
            )}

            {choices &&
              choices.map((answer, index) => {
                if (type === 'normal') {
                  return (
                    <input
                      type="button"
                      value={answer}
                      onClick={() => {
                     
                        setFinal(currentQuestion, answer);
                      }}
                      key={answer}
                      className={`h-fit mb-2 font-poppins text-base lg:text-2xl border-2 w-full space-y-4 p-4 rounded ${finalAnswers[currentQuestion] === answer && "bg-button-blue text-white"} 
                       `}
                    />
                  );
                }

                if (type === 'radio') {
                  return (
                    <div
                      key={`${answer}`}
                      className="flex items-center whitespace-nowrap font-poppins text-xl lg:text-2xl mb-5 gap-2"
                    >
                      <input
                        id={`${currentQuestion}-${index}`}
                        type="radio"
                        key={answer}
                        checked={isChecked === answer}
                        onChange={() => {
                          handleCheckedChange(answer);
                        
                          setFinal(currentQuestion, answer);
                        }}
                      />
                      <label htmlFor={`${currentQuestion}-${index}`}>
                        {answer}
                      </label>
                    </div>
                  );
                }
                return (
                  <textarea
                    key="textArea"
                    type="text"
                    className="w-full h-4/5 shadow-sm border border-input-border rounded p-2 text-xl"
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      setFinal(currentQuestion, e.target.value);
                    }}
                  />
                );
              })}
          </div>
          <div className="flex gap-6 mt-auto">
            {!isFirstQuestion && (
              <Button type="button" onClick={() => handlePrev() } 
                  value="Back" />
            )}
            <Button
              type="button"
              onClick={() => {
                if (currentAnswer) handleNext();
              }}
              value="Next"
            />
          </div>
        </div>
      )}
      {/* SUBMIT SECTION */}
      {step > questions.length - 1 && (
        <Submit step={step} setStep={setStep} finalAnswers={finalAnswers} />
      )}
    </div>
  );
}

export default Booking;

const Submit = ({ step, setStep, finalAnswers }) => {
    // eslint-disable-next-line
  console.log(finalAnswers)
  const navigate = useNavigate();
  return (
    <div
      id="HEADER"
      className=" grow flex flex-col font-poppins text-center h-full "
    >
      <div className="px-16 py-12 text-left mb-8">
        <h1 className="text-3xl lg:text-5xl uppercase mb-4">
          {step === 6
            ? 'Submit your appointment'
            : 'Your request has been submitted!'}
        </h1>
        <p className="lg:text-3xl text-2xl text-black/50">
          {step === 6
            ? 'Click Submit if you are sure of all your choices.'
            : 'You will receive an email guiding you to book a date and time soon.'}
        </p>
      </div>

      <div
        id="SUBMIT-CONTAINER"
        className="m-auto mb-20 flex flex-col space-y-10 bg-white border-border-grey shadow-shadow-grey drop-shadow-lg justify-center items-center p-8 border-2 rounded w-11/12 md:w-8/12 lg:w-3/6 h-[557px]"
      >
        <h3 className="text-3xl">
          {step === 6 ? 'Submit Appointment?' : 'Request Submitted'}
        </h3>
        <p className="w-[80%] text-2xl text-center text-[rgba(0, 0, 0, 0.87)]">
          {step === 6
            ? ' Please be aware that this action will cost you a ticket!'
            : 'You Will Receive a Confirmation Email Soon Please Keep an eye on Your Mail.'}
        </p>
        <Button
          type="button"
          value={step === 6 ? 'SUBMIT' : 'BACK TO HOME'}
          onClick={() => {
            if (step === 6) {
              setStep((prev) => prev + 1);
            } else {
              navigate('/');
            }
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};
