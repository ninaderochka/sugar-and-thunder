import React from 'react';
import imagee from './img/Rectangle.jpg';

export default function About() {
  return (
    <div className="font-poppins">
      <div className=" flex flex-col px-[8rem] py-[2rem] mb-32">
        <div className="py-[2rem]">
          <h1 className="text-xl sm:text-2xl md:text-5xl">HEALING!</h1>
          <h5 className="text-shadow-grey text-sm md:text-2xl sm:text-xl font-light">
            some cool one liner !
          </h5>
        </div>
        <p className="font-normal text-xs md:text-xl sm:text-xl text-second-font mt-4">
          At Healing, we believe there is a better way to do things. A more
          valuable way where customers are earned <br />
          rather than bought.We&lsquo;re obsessively passionate about it, and
          our mission is to help people achieve it. We <br />
          focus on search engine optimization. It&lsquo;s one of the least
          understood and least transparent aspects of great
          <br />
          marketing, and we see that as an opportunity. We&lsquo;re excited to
          simplify SEO for everyone through our
          <br />
          software, education, and community.&lsquo;
        </p>
      </div>

      <div className="bg-light-blue flex text-second-font">
        <div className="pl-[8rem] py-[2rem] pr-[3rem] flex flex-wrap">
          <img src={imagee} alt="#" className="w-[400px] h-[320px] rounded" />
        </div>

        <div className="pt-[2.5rem]">
          <h2 className="text-xl sm:text-5xl font-normal mb-2">Our Founding</h2>
          <p className="font-normal text-xs sm:text-xl ">
            Healing was founded by Payam Abubakr in 2021. It was called <br />
            Healing Online, and started as a blog and an online community
            <br />
            where some of the world&lsquo;s therapists shared their research and
            <br />
            ideas. We launched the Beginner&lsquo;s Guide to Therapy and our
            <br />
            first study, and that hub of industry expertise transformed into a
            <br />
            small consulting firm and led us to create the Online Therapist{' '}
            <br />
            of today!
          </p>
        </div>
      </div>
    </div>
  );
}
