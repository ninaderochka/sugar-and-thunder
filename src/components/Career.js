import React from 'react';
import Button from './Button';

export default function Career() {
  return (
    <div className="w-screen">
      <Heading />
      <Philosophy />
      <Joblisting />
    </div>
  );
}

function Heading() {
  return (
    <div className="font-poppins">
      <div className="flex flex-col justify-center items-center py-[2rem]">
        <div className="w-3/4 py-[2rem]">
          <h1 className="text-xl sm:text-2xl md:text-5xl">CAREERS AT HEALING!</h1>
          <h5 className="text-shadow-grey text-sm md:text-2xl sm:text-xl font-light">
          Be a part of making people feel better.
          </h5>
        </div>
        <p className="font-normal text-xs md:text-xl sm:text-xl text-second-font w-3/4 my-28">
        Our SEO software cuts through mountains of data to surface critical insights.We build and maintain<br />
        systems that process massive amounts of data (we&apos;re talking 36 trillion records per day and multiple<br />
        petabytes of storage.) We model transparent and empathetic marketing for the world. We educate<br />
        our community, making every effort to help them improve their skill. And we do it all by fostering a<br />
        culture that encourages accountability, empathy, and transparency<br />
        </p>
        <p className="font-normal text-xs md:text-xl sm:text-xl text-second-font w-3/4">
        What role will you play?
        </p>
        <div className="w-3/4 px-4 py-6">
          <Button value="SEE OUR OPEN LIST" onClick={() => {}} />
       </div>
      </div>
   </div>
  );
}

function Philosophy() {
  return (
    <div className="bg-light-yellow w-screen flex flex-col items-center py-4 text-dark-gray">
      <h1 className="md:text-4xl text-2xl w-3/4">OUR HIRING PHILOSOPHY</h1>
      <p className="w-3/4 md:text-xl text-sm">
        To build the very best SEO tools, we need a workforce that reflects the
        diversity of our communities and<br /> customers. We want Online Therapy to be
        a place where everyone feels welcome and engaged, bar<br /> none. It&apos;s
        our mission and promise to interview a diverse and representative slate
        of candidates before<br /> making an offer for our open roles.
      </p>
    </div>
  );
}
const positionsData = [
  {
    title: 'Senior Software Developer | Backend | Remote in the USA',
    describtion:
      'Moz is looking for a Senior Software Developer to join our Application Development team.',
    major: 'Engineering',
    position: 'Application Development',
  },
  {
    title:
      'Senior Software Developer | Rapid Prototyping | Remote in',
    describtion:
      'Moz is looking for a Senior Software Developer to join our Rapid Prototyping Team (RPT). This team is responsible for working closely with product managers to take ideas for new features and quickly validate their technical and business feasibility.',
    major: 'Engineering',
    position: 'Rapid Prototyping',
  },

  {
    title: 'Senior Product Analyst | Remote in Canada',
    describtion:
      'Moz is looking for a Product Analyst to define our suite of product metrics.',
    major: 'Engineering',
    position: 'Business Intelligence',
  },
  {
    title: 'Business Intelligence Manager | Remote in Canada',
    describtion:
      'Moz is hiring a Manager of Business Intelligence to lead our analytics and data warehousing efforts in a new phase of development.',
    major: 'Engineering',
    position: 'Business Intelligence',
  },
  {
    title: 'Engineering Manager | Remote in Canada',
    describtion:
      'Moz is seeking an Engineering Manager within our Application Development team.',
    major: 'Engineering',
    position: '',
  },
  {
    title: 'Sr. Data Engineer | Remote in Canada',
    describtion:
      'Moz is looking for a talented Senior Software Developer to join our Data Collection team.',
    major: 'Engineering',
    position: 'Data Collection',
  },
  {
    title: 'Sr. Data Engineer | Remote in Canada',
    describtion:
      'Moz is looking for a talented Senior Software Developer to join our Data Collection team.',
    major: 'Engineering',
    position: 'Data Collection',
  },
];

function Joblisting() {
  return (
    <section className="flex justify-center flex-col items-center">
      <div className="w-4/5 mt-10">
        <h1 className="md:text-4xl text-2xl text-dark-gray">
          CURRENT OPEN POSITIONS
        </h1>
        <p className="text-secondary text-shadow-grey">
          Please send us an email with the application title as the subject with
          an attached CV in PDF format!
        </p>
      </div>

      <div className="w-4/5 my-10">
        {positionsData.map((vacancy) => {
          return (
            <div className="md:flex justify-between border-b  border-black my-3 ">
              <div className="w-4/5 md:my-0 my-3 md:mb-2">
                <h1 className="text-blue-500 md:text-2xl text-xl">
                  {vacancy.title}
                </h1>
                <p className="text-dark-gray md:text-xl text-sm">
                  {vacancy.describtion}
                </p>
              </div>
              <div className="w-1/6 md:my-0 my-3 md:mb-2">
                <h1 className="text-blue-500 md:text-2xl text-xl">
                  {vacancy.major}
                </h1>
                <p className="text-dark-gray md:text-xl text-sm">
                  {vacancy.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}