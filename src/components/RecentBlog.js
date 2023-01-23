import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Rectangle41 from '../images/Rectangle41.png';
import Rectangle40 from '../images/Rectangle40.png';

function RecentBlog() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="bg-light-blue h-full md:h-screen">
      <h1 className="text-5xl leading-10 uppercase pt-16 pb-24 pl-28 font-poppins">
        Recent BLOGs
      </h1>

      <div className="px-36 my-auto">
        <Carousel responsive={responsive}>
          <div className="relative">
            <h1 className="absolute text-white pt-3 pl-6 w-44 uppercase">
              Mental Health and Technology{' '}
            </h1>
            <img src={Rectangle40} alt="" />
          </div>
          <Link to="/Blog">
            <div>
              <img src={Rectangle41} alt="" />
              <div
                className="absolute text-white bottom-12 m-8 bg-text-background uppercase text-2xl 
        bg-opacity-50 leading-7 text-center align-middle	"
              >
                Heal from
              </div>
              <div
                className="absolute text-white bottom-4  m-8  bg-text-background uppercase  text-2xl
         font-normal bg-opacity-50 inline-block align-middle	leading-7"
              >
                trauma{' '}
              </div>
            </div>
          </Link>
          <Link to="/Blog">
            <div>
              <h1 className="absolute text-white pt-3 pl-6 w-44 uppercase">
                Mental Health and Technology{' '}
              </h1>
              <img src={Rectangle40} alt="" />
            </div>
          </Link>
          <div>
            <img src={Rectangle41} alt="" />
            <div
              className="absolute text-white bottom-12 m-8 bg-text-background uppercase text-2xl 
        bg-opacity-50 leading-7 text-center align-middle	"
            >
              Heal from
            </div>
            <div
              className="absolute text-white bottom-4  m-8  bg-text-background uppercase  text-2xl
         font-normal bg-opacity-50 inline-block align-middle	leading-7"
            >
              trauma{' '}
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default RecentBlog;
