import React, { useState } from 'react'
import { Questions } from '../components/Questions'

function Booking() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { questions } = Questions
    const { question , choices } = questions[currentQuestion]
    const [ selectedAnswer, setSelectedAnswer ] = useState('')

    const onSelectedAnswer = (answer,index) => {
        setSelectedAnswer(index) 
        if (answer) {
            setSelectedAnswer(true)
        }
    }

    function handleNext() {
        setCurrentQuestion((prev) => prev + 1)
    }
    function handlePrev() {
        setCurrentQuestion((prev) => prev -1 )
    }
  return (<div>
    <div className="px-16 py-12 font-normal">
               <h1 className="text-[50px] uppercase mb-4">let&apos;s match you with the right therapist</h1>
               <p className="text-[28px] text-black/50">Please fill out this short questionnaire to provide some general and anonymous background <br/> 
                about you and the issues you&apos;d like to deal with in online therapy. It would help us match you<br/>
                with the most suitable therapist for you. </p>
            </div>

    <div className='h-screen w-screen flex justify-center p-10 mx-auto mt-10'>
        <div className='bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded w-2/4 mx-auto absolute'>

     <div className="grid gap-y-4 mx-auto relative">
        <h3 className='font-poppins text-3xl font-normal'>{question}</h3>
        <ul className='grid gap-y-4 align-middle'>
           {choices.map((answer,index) => {
            return (

                <li className={`font-poppins text-2xl border-2 w-full p-4 rounded focus:bg-button-blue ${selectedAnswer === index ? 'bg-button-blue' : ''}`}>{answer}</li>
            )
           })}
        </ul> 
        <div className='flex gap-6'>
        <button type='button' onClick={handlePrev} className='bg-button-blue flex items-center uppercase w-[122px] h-[50px] rounded-md text-center px-6 text-[28px]'>Back</button>
<button type='button' onClick={handleNext} className='bg-button-blue flex items-center uppercase w-[122px] h-[50px] rounded-md text-center px-6 text-[28px]'>Next</button>
        </div>
    </div>
        </div>
    </div>
  </div>
  )
}

export default Booking