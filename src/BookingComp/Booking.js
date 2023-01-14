import React from 'react';
// import { useState } from 'react';

export default function Booking(Start) {
  // const [currentQuestionIndex, setCurrentQuestionIndex]= useState(0);

  //  const questions=[
  //     {
  //         question:'What type of coumseling are you looking for?',
  //         options:['Individual counseling', 'Teen counseling (for my child)']
  //     },

  //     {
  //         question:'What is your relationship status?',
  //         options:['Single', 'Married', 'Divorced']
  //     },

  //     {
  //         question:'Have you ever been in therspy before?',
  //         options:['Yes', 'No']
  //     }

  export const Questions = {
    questions: [
      {
        question: 'What type of counseling are you looking for?',
        choices: ['Individual counseling', 'Teen counseling (for my child)'],
        type: 'normal',
      },
      {
        question: 'What is your relationship status?',
        choices: ['Single', 'Married', 'Divorced'],
        type: 'normal',
      },
      {
        question: 'Have you ever been in therapy before?',
        choices: ['Yes', 'No'],
        type: 'normal',
      },
      {
        question:
          'Are there any specific qualities that you’d like in a counselor?',
        choices: [
          'I prefer a male counselor',
          'I prefer a female counselor',
          'I prefer an older counselor (45+)',
          'I prefer a non-religious counselor',
        ],
        type: 'radio',
      },
      {
        question: 'Are there any issues you’d like to focus on?',
        choices: [
          'Depression',
          'Stress and Anxiety',
          'Relationship issues',
          'Family conflicts',
          'Trauma and abuse',
          'Eating disorders',
        ],
        type: 'radio',
      },
      {
        question: 'What brings you here?',
        choices: ['none'],
        type: 'input',
      },
    ],
  };

  // ]

  return (
    <div className="Booking font-poppins">
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

      <div className="rounded w-[803px] h-[557px] shadow-shadow mx-64 px-12 pt-8 pb-6">
        <button
          type="button"
          onClick={Start}
          className="bg-button-blue rounded flex items-center uppercase w-[122px] h-[60px] rounded-md text-center px-6 text-[28px]"
        >
          Next
        </button>
      </div>
    </div>

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
    //
  );
}

//NINA CODE

// import React, { useState } from 'react';
// import { Questions } from '../components/Questions';
// import Button from '../components/Button';

// function Booking() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const { questions } = Questions;
//   const { question, choices, type } = questions[currentQuestion];
//   const [selectedAnswer, setSelectedAnswer] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   // const [ radioSelect, setRadioSelect] = useState (true)

//   const onSelectedAnswer = (answer) => {
//     if (answer === choices) {
//       setSelectedAnswer(true);
//     }
//   };

//   // const onOptionChange = e => {
//   //   setRadioSelect(e.target.value)
//   // }

//   // function handleIsChecked() {
//   //   if(isChecked) {
//   //     setIsChecked(false)
//   //   } else {
//   //     setIsChecked(true)
//   //   }
//   // }

//   function handleCheckedChange() {
//     setIsChecked(!isChecked);
//   }

//   function handleNext() {
//     setCurrentQuestion((prev) => prev + 1);
//   }
//   function handlePrev() {
//     setCurrentQuestion((prev) => prev - 1);
//   }

//   return (
//     <div>
//       <div className="px-16 py-12 font-normal">
//         <h1 className="text-[50px] uppercase mb-4">
//           let&apos;s match you with the right therapist
//         </h1>
//         <p className="text-[28px] text-black/50">
//           Please fill out this short questionnaire to provide some general and
//           anonymous background <br />
//           about you and the issues you&apos;d like to deal with in online
//           therapy. It would help us match you
//           <br />
//           with the most suitable therapist for you.{' '}
//         </p>
//       </div>

//       <div className="w-full flex flex-col p-2 sm:w-1/2 lg:w-full mb-10">
//         <div className="bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded w-full md:w-full md:mx-auto lg:w-[800px] lg:h-[557px]">
//           <div className="grid gap-y-4 m-auto">
//             <h3 className="font-poppins text-3xl font-normal">{question}</h3>
//             <div className="grid gap-y-4 pt-10">
//               {/* {question.map((finalQuestion) => { if (choices === 'none') {
// return (
//   <div className="px-16 py-12 font-normal">
//   <h1 className="text-[50px] uppercase mb-4">
//   {finalQuestion}
// </h1>
// <p className="text-[28px] text-black/50">
// Please specify (in a few sentences) why you’d like counseling.This will give your counselor a good understanding of where to start.
// </p>
// <input type='text' className='w-full p-20 h-[360px]'/>
//   </div>
// )
//           } return (

//           <div className="grid gap-y-4 m-auto">
//             <h3 className="font-poppins text-3xl font-normal">{question}</h3>
//             </div>
//           )
//           }
//           )}  */}
//               {choices.map((answer, index) => {
//                 if (type === 'normal') {
//                   return (
//                     <input
//                       type="button"
//                       value={answer}
//                       onClick={() => onSelectedAnswer(answer)}
//                       key={answer.toString()}
//                       className={`font-poppins text-2xl border-2 w-full lg:w-[723px] p-4 rounded focus:bg-button-blue focus:text-white ${
//                         selectedAnswer === index ? 'bg-button-blue' : ''
//                       }`}
//                     />
//                   );
//                 }

//                 return (
//                   <div className="flex whitespace-nowrap font-poppins text-2xl gap-5">
//                     <input
//                       id={`${currentQuestion}-${index}`}
//                       type="radio"
//                       key={answer}
//                       // checked={isChecked}
//                       // onChange={() => handleIsChecked()}
//                       checked={isChecked}
//                       onChange={handleCheckedChange}
//                       // onChange={onOptionChange}
//                     />
//                     <label htmlFor={`${currentQuestion}-${index}`}>
//                       {answer}
//                     </label>
//                   </div>
//                 );
//               })}
//             </div>
//             <div className="flex gap-6 mt-20 fixed py-[340px]">
//               <Button type="button" onClick={() => handlePrev()} value="Back" />
//               <Button type="button" onClick={() => handleNext()} value="Next" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Booking;
