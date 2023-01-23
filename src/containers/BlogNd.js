import React from 'react';
import Rectangle45 from '../images/Rectangle45.png';
import button from '../images/SubmitButton.png';
import Rectangle41p from '../images/Rectangle41p.png';
import Rectangle42 from '../images/Rectangle42.png';
import { collection,  getDocs} from "firebase/firestore";
import { db } from '../firebase';
import { useState, useEffect } from "react";

function  BlogNd()   {
const [posts, setPosts] = useState([]);

useEffect(() => {
const postsCollectionRef = collection(db, "blog")
const getPosts = async () => {
const data = await getDocs(postsCollectionRef);
setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
}
getPosts()
}, [])

  return (
    <div>
    {posts.map((post) => {
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
          {post.blog2h1}
        </h1>

        <p className="pt-6  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8" >
          {post.blog2p1}
          <p></p>
        </p>

        <p className="mt-4 p-8 rounded-lg  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8 bg-slate-200">
          {post.blog2p5}

          <p className="mt-4  uppercase   lg:text-lg    md:text-base    sm:text-sm leading-8 bg-slate-200">
          {post.blog2cot}
        </p>
        </p>

        <p className="pt-4  uppercase   lg:text-xl    md:text-base    sm:text-sm leading-8">
          {post.blog2p2}
        </p>
        
        <ul className='list-disc ml-16 mb-10 mt-6 font-[400] uppercase lg:text-[18px] md:text-base    sm:text-sm'>
          <li className='mt-1'>{post.blog2Li1}</li>
          <li className='mt-1'>{post.li2}</li>
          <li className='mt-1'>{post.li3}</li>
          <li className='mt-1'>{post.li4}</li>
          <li className='mt-1'>{post.li5}</li>
          <li className='mt-1'>{post.li6}</li>
        </ul>
       
        <p className="leading-[30px] font-[400] uppercase lg:text-[20px] md:text-base    sm:text-sm">
          {post.blog2P3}
        </p>

        <h4 className="font-normal lg:text-[32px] leading-[75px] uppercase mt-10 md:text-2xl    sm:text-xl">
          {post.header3}
        </h4>

        <p className="leading-[30px] font-[400] uppercase lg:text-[20px] md:text-base    sm:text-sm">
          {post.paragraph6}
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
          {post.header7}
        </h4>
      </div>

      <div className="flex gap-4 pb-48 lg:flex-row  md:flex-col  sm:flex-col justify-center  items-center">
        <div className="rounded">
          <div
            className="absolute text-white ml-8 mt-44 bg-text-background uppercase text-[32px] 
            bg-opacity-50  text-center align-middle leading-[48px]"
          >
           {post.photoP1}
          </div>

          <div
            className="absolute text-white ml-8 mt-[230px] bg-text-background uppercase  text-[32px]
             font-normal bg-opacity-50 inline-block align-middle leading-[48px]"
          >
            {' '}
            {post.photoP2}{' '}
          </div>
          <img src={Rectangle41p} alt="" />
        </div>

        <div>
          <div
            className="absolute w-56 ml-4 mt-6  uppercase text-2xl 
            leading-7 "
          >
            {post.photo2}
          </div>

          <img src={Rectangle42} alt="" />
        </div>
      </div>
      </div>
      )

})}

    </div>

  );
}

export default BlogNd;
