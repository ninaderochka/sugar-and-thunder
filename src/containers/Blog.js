import React from 'react';
import Rectangle45 from '../images/Rectangle45.png';
import button from '../images/SubmitButton.png';
import Rectangle41p from '../images/Rectangle41p.png';
import Rectangle42 from '../images/Rectangle42.png';

function Blog() {
  return (
    <div>
      <div className="flex justify-center	content-center	pt-16 ">
        <img
          src={Rectangle45}
          alt=""
          className=" top-[183px] rounded-3xl sm:w-[500px] lg:h-[500px] md:w-[700px] lg:w-[1116px] "
        />
      </div>
      <div className=" md:px-24  md:pt-10   sm:px-10 sm:pt-6    2xl:px-52  2xl:pt-20    lg:px-30 ">
        <h1 className="font-normal lg:text-5xl  md:text-2xl sm:text-xl  leading-[75px] uppercase ">
          Mental Health and Technology
        </h1>

        <p className="pt-6  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8">
          Technology and mental well-being might seem like profoundly
          antagonistic terms. However, there are excellent digital tools to help
          you reach mindfulness and to practice meditation. You can even use
          smartphone apps, virtual reality solutions and digital devices as a
          form of relieving stressing and achieving digital detox – as, after a
          while, you will be able to practice all types of anti-anxiety skills
          on your own. So, let The Medical Futurist show you how you can enhance
          your mental and emotional health with the help of technology.
        </p>

        <h4 className="leading-[48px] font-[400] uppercase lg:text-3xl  md:text-2xl sm:text-xl  pt-16">
          The need for taking care of our emotional health
        </h4>

        <p className="pt-4  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8">
          “Just as we observe physical hygiene to stay well, we need to
          cultivate a kind of emotional hygiene too,” wrote the Dalai Lama on
          his Twitter-feed. There are three crucial points around His Holiness’
          statement. First and foremost, the popularity of health-enhancing,
          physically active lifestyle is soaring worldwide. Nevertheless,
          there’s always room for improvement: the WHO says that globally, 23
          percent of adults and 81 percent of school-going adolescents are not
          active enough. According to the organization, adults aged 18-64 should
          do at least 150 minutes of moderately intense physical activity each
          week, which is not unaccomplishable. Moreover, the numerically and
          statistically driven 21st-century mind could take a great inspiration
          and power from the various fitness trackers and wearables.
        </p>
        <p className="pt-6  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8">
          Secondly, emotional hygiene seems to be thrown into the shade
          nowadays. Somehow, the culture of busyness prevents us from squeezing
          some time for mental health into our packed schedules. Information is
          pouring on us from millions of communication channels; we are
          connecting with hundreds of ‘friends’ on social media, we are obsessed
          with data due to the fear of missing out and time management slices up
          our days into meetings and to-do-lists.
        </p>
        <p className="pt-6  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8">
          The pressure to perform and the stress to achieve is the air every
          busy-bee is breathing. However, turbulent lifestyle comes with a
          price. No wonder so many people have mental health issues. In the US,
          that means one in five adults – more than 40 million Americans! On the
          old continent, 27 percent of the population has to cope with mental
          disorders, which means 83 million struggling Europeans. In Asia, the
          prevalence of depression is 20 percent in Thailand, 19.9 percent in
          Taiwan, 19.4 percent in Korea, 17.5 in Malaysia and 16.5 percent in
          China.
        </p>

        <h4 className="font-normal lg:text-[32px] leading-[75px] uppercase     pt-6 md:text-2xl    sm:text-xl">
          Sign up for The Healing blog
        </h4>

        <p className="leading-[30px] font-[400] uppercase lg:text-[20px] md:text-base    sm:text-sm">
          A weekly, ad-free Blog that helps you stay in the know.
        </p>

        <form className="mb-4 flex content-end pt-8 ">
          <input
            type="email"
            id="email"
            placeholder="Enter your e-mail"
            className="border-2 lg:w-[290px] md:w-[200px]  lg:h-14 md:h-10  px-2 rounded-md text-black border-footer-gray rounded-tr-none rounded-br-none text-xl leading-[30px] tracking-[0.01px]"
          />
          <button
            type="submit"
            className="bg-button-blue border-2 border-l-0 lg:w-[60px] md:w-[40px] sm:w-[40px] lg:h-14 md:h-10  lg:px-4 md:px-2 sm:px-2 rounded text-sm border-footer-gray rounded-tl-none rounded-bl-none"
          >
            <img src={button} alt="Button logo" />
          </button>
        </form>

        <h4 className="font-normal lg:text-[32px] leading-[75px] uppercase pt-20  md:text-2xl    sm:text-xl pb-8">
          Recommended for you
        </h4>
      </div>

      <div className="flex gap-4 pb-48 lg:flex-row  md:flex-col  sm:flex-col justify-center  items-center">
        <div className="rounded">
          <div
            className="absolute text-white ml-8 mt-44 bg-text-background uppercase text-[32px] 
            bg-opacity-50  text-center align-middle leading-[48px]"
          >
            Heal from
          </div>

          <div
            className="absolute text-white ml-8 mt-[230px] bg-text-background uppercase  text-[32px]
             font-normal bg-opacity-50 inline-block align-middle leading-[48px]"
          >
            {' '}
            trauma{' '}
          </div>
          <img src={Rectangle41p} alt="" />
        </div>

        <div>
          <div
            className="absolute w-56 ml-4 mt-6  uppercase text-2xl 
            leading-7 "
          >
            Tell Me All I Need to Know About Anxiety
          </div>

          <img src={Rectangle42} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
