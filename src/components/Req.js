import React from "react";
import Requirements from "../images/Requirements.png";

const Req = () => {
  return (
    <div className="w-4/5 flex flex-wrap justify-between mt-10 container mx-auto px-4 py-8 font-poppins">
        <div className="w-1/2">
            <h1 className="text-5xl font-normal mb-8">WHY WORK WITH HEALING?</h1>
            <div className="mb-8">
                <div className="w-3/4 mb-5">
                    <h2 className="text-xl font-medium mb-1">Reliable Income</h2>
                    <p className="mb-2 text-xl font-medium text-contact-us-gray">{`Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with life’s challenges. BetterHelp can be your main source of income ("full time") or a supplement to your current work.`}</p>
                </div>

                <div className="w-3/4 mb-5">
                    <h2 className="text-xl font-medium mb-1">Focus on Counseling</h2>
                    <p className="mb-2 text-xl font-medium text-contact-us-gray">No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
                </div>

                <div className="w-3/4 mb-5">
                    <h2 className="text-xl font-medium mb-1">Focus on Counseling</h2>
                    <p className="mb-2 text-xl font-medium text-contact-us-gray">No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
                </div>
            </div>

            <div className="mb-8">
                <h1 className="text-5xl font-normal mb-3">Requirements</h1>
                <ul className="list-disc">
                    <li className="ml-5 mb-2 text-xl font-medium text-contact-us-gray">Licensed by a State Board to provide counseling</li>
                    <li className="ml-5 mb-2 text-xl font-medium text-contact-us-gray">Experience in counseling for adults, couples, and/or teens</li>
                    <li className="ml-5 mb-2 text-xl font-medium text-contact-us-gray">Excellent writing skills</li>
                    <li className="ml-5 mb-2 text-xl font-medium text-contact-us-gray">Reliable Internet connection</li>
                    <li className="ml-5 mb-2 text-xl font-medium text-contact-us-gray">Currently residing in the US</li>
                </ul>
            </div>
            
            <button className="h-16 w-56 text-2xl font-normal bg-button-blue text-black py-2 px-4 rounded-md mb-10" type="button">
                Get started
            </button>
        </div>

        <div className="w-1/2 flex items-start justify-center">
            <img src={Requirements} alt="Requirements" />
        </div>
    </div>
  );
}
export default Req;