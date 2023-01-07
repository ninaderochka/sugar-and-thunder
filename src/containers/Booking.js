import React, { useState } from 'react'
import { Questions } from '../components/Questions'
import Button from '../components/Button'

function Booking() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const { questions } = Questions
    const { question , choices } = questions[currentQuestion]
    const [ selectedAnswer, setSelectedAnswer ] = useState('')

    const onSelectedAnswer = (answer) => { 
        if (answer === choices) {
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

    <div className='flex justify-center p-10 mx-auto'>
        <div className='bg-white border-border-grey shadow-shadow-grey drop-shadow-lg box-border p-8 border-2 rounded w-2/4 h-full mx-auto max-h-content aspect-sqaure'>

     <div className="grid gap-y-4 m-auto">
        <h3 className='font-poppins text-3xl font-normal'>{question}</h3>
        <div className='grid gap-y-4 align-middle'>
           {choices.map((answer,index) => {
            return (

                <input type="button" value={answer}
 onClick={() => onSelectedAnswer(answer)} key={answer} className={`font-poppins text-2xl border-2 w-full p-4 rounded focus:bg-button-blue focus:text-white ${selectedAnswer === index ? 'bg-button-blue' : ''}`} />
            )
           })}
        </div> 
    </div>
        <div className='flex gap-6 mt-20'>
        <Button type='button' onClick={() => handlePrev()} value='Back'/>
<Button type='button' onClick={() => handleNext()} value='Next'/>
        </div>
        </div>
    </div>
  </div>
  )
}

export default Booking