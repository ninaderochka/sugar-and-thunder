import React from 'react';
// import { useState } from 'react';

export default function Booking(Start){
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

    // ]

 

    return(
        
        <div className="Booking ">
            <div className="px-16 py-12 font-normal">
               <h1 className="text-[50px] uppercase mb-4">let&apos;s match you with the right therapist</h1>
               <p className="text-[28px] text-black/50">Please fill out this short questionnaire to provide some general and anonymous background <br/> 
                about you and the issues you&apos;d like to deal with in online therapy. It would help us match you<br/>
                with the most suitable therapist for you. </p>
            </div>


            <div className="rounded w-[803px] h-[557px] shadow-shadow mx-64 px-12 pt-8 pb-6" >

                <button type='button' onClick={Start} className="bg-button-blue rounded flex items-center uppercase w-[122px] h-[60px] rounded-md text-center px-7">Next</button>
            
            </div>

        </div>
   
    );

}