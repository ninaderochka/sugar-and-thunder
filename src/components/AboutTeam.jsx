import React from "react";
import Team1 from '../images/Team1.png';
import Team2 from '../images/Team2.png';
import Team3 from '../images/Team3.png';
import Team4 from '../images/Team4.png';
import Team5 from '../images/Team5.png';
import Team6 from '../images/Team6.png';
function AboutTeam(){

    return (
        <div className="pb-20 lg:w-4/5 xl:w-4/5  mx-auto font-poppins ">
            <h1 className="font-normal lg:text-5xl  md:text-2xl sm:text-xl  leading-[75px] uppercase  xl:ml-4  md:ml-14 sm:ml-11 mt-20">WE ARE HEALING, NICE TO MEET YOU!</h1>

            <p className="xl:text-[29px] lg:text-[29px]  sm:text-lg  leading-[39px] font-normal text-meet-color xl:ml-4  md:ml-14 sm:ml-11 xl:pt-28 lg:pt-16 md:pt-12  sm:pt-8  pb-10">
            Meet the Team!
            </p>

            <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4   md:grid-cols-3   sm:grid-cols-2 justify-center mb-10  text-xl ">
                <div className="w-[176.41px]  mx-auto">
                    <img src={Team1} alt="" />
                    <div className="h-1 bg-shade-green   object-left	m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl ">
                       
                    <h1 className="pt-4 pb-6 font-normal">Allan Saleh</h1>
                    <p className="pb-14 text-meet-color text-base">Lead Engineer <br/>& Web Developer</p>
                    </div>
                </div>


                <div className="w-[176.41px] mx-auto">
                    <img src={Team2} alt="" />
                    <div className="h-1 bg-shade-green   object-left	m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl ">
                       
                    <h1 className="pt-4 pb-6 ">Payam Abubakr</h1>
                    <p className="pb-14 text-meet-color text-base">Junior Designer <br/>& FE Developer </p>
                    </div>
                </div>


                <div className="w-[176.41px] mx-auto">
                    <img src={Team3} alt="" />
                    <div className="h-1 bg-shade-green m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl px-6">
                    
                    <h1 className="pb-4">Ahmed Mohammed</h1>
                    <p className="pb-14 text-meet-color text-base">Junior Designer <br/>& FE Developer </p>
                    </div>
                </div>


                <div className="w-[176.41px] mx-auto">
                    <img src={Team4} alt="" />
                    <div className="h-1 bg-shade-green   object-left	m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl px-6">
                       
                    <h1 className="pb-4">Abdulmajeed Jaafer</h1>
                    <p className="pb-14 text-meet-color text-base">Junior Designer <br/>& FE Developer </p>
                    </div>
                </div>


                <div className="w-[176.41px] mx-auto">
                    <img src={Team5} alt="" />
                    <div className="h-1 bg-shade-green   object-left	m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl px-6">
                       
                    <h1 className="pt-4 pb-6">Snoor Madih</h1>
                    <p className="pb-14 text-meet-color text-base">Junior Designer <br/>& FE Developer </p>
                    </div>
                </div>


                <div className="w-[176.41px] mx-auto">
                    <img src={Team6} alt="" />
                    <div className="h-1 bg-shade-green   object-left	m-0 p-0"> </div>
                    <div className="bg-light-shade-cyan text-center rounded-b-3xl px-6">
                       
                    <h1 className="pt-4 pb-6">Avraz Zebary</h1>
                    <p className="pb-14 text-meet-color  text-base">Junior Designer <br/>& FE Developer </p>
                    </div>
                </div>
            </div>
           
        </div>
    )


}

export default AboutTeam;