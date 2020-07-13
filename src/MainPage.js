import React, { Component } from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";
import News from "./News";
import Gallery from "./Gallery";
import Contact from "./Contact";
import classes from "./MainPage.module.css";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            className="w-full h-128 absolute top-0 left-0 opacity-25 xl:h-200 lg:h-160 md:h-140 sm:h-128"
            src={process.env.PUBLIC_URL + "/images/tu-tram-pham-202264.jpg"}
          />
          <div
            className="bg-opacity-75 h-128 gradient w-full  text-myColors-purple absolute top-0 left-0 xl:h-200 lg:h-160 md:h-140 sm:h-128"
            alt=""
          ></div>
        </div>

        <div className="relative flex flex-col">
          <div className="flex w-full justify-between items-center">
            <nav className="flex  justify-between items-center w-full   lg:mx-56 lg:mt-16 lg:w-3/4 lg:w-3/4 lg:mx-auto   md:mx-0 md:pl-8 md:pr-4 md:w-full  sm:mx-0 sm:pl-8 sm:pr-4 sm:w-full mt-6">
              <div className=" w-1/4 h-full mt-2 ml-2 hidden sm:block">
                <img
                  src={process.env.PUBLIC_URL + "/images/Homepage-Logo.png"}
                />
              </div>
              <ul className="flex justify-between w-11/12  pr-1  pl-4  xl:w-7/12 lg:w-7/12 md:pl-8 md:pr-0  sm:w-1/2 sm:pl-8 sm:pr-0">
                <li className=" text-xs text-white flex items-center ">
                  <div className="border rounded-full border-white w-2 h-2 mr-1 bg-white xl:mr-3 lg:mr-1 lg:block  md:hidden sm:hidden hidden "></div>
                  <a className="" href="">
                    Homepage
                  </a>
                </li>
                <li className=" text-xs text-white  flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-1  xl:mr-3 lg:mr-1 lg:block  md:hidden sm:hidden hidden "></div>

                  <a href="#Project1">Projects</a>
                </li>
                <li className=" text-xs text-white flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-1 xl:mr-3 lg:mr-1 lg:block   md:hidden sm:hidden hidden "></div>
                  <a href="#News">News</a>
                </li>
                <li className=" text-xs text-white flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-1 xl:mr-3 lg:mr-1 lg:block   md:hidden sm:hidden hidden "></div>
                  <a href="#Gallery">Gallery</a>
                </li>
                <li className=" text-xs text-white flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-1 xl:mr-3 lg:mr-1 lg:block   md:hidden sm:hidden hidden "></div>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
              <div className="flex items-center xl:w-3/12 lg:w-3/12 md:w-1/4 md:pl-8 sm:w-1/4 sm:pl-4 sm:flex hidden ">
                <div className="xl:ml-4 xl:mr-5 text-white px-4 py-4 lg:border lg:border-white lg:rounded-full   xl:border xl:border-white xl:rounded-full xl:px-4  xl:py-4  lg:px-3 lg:py-3  lg:mr-3 md:border-0 sm:border-0 ">
                  <FaFacebookF />
                </div>
                <div className=" xl:mr-5 text-white px-4 py-4 lg:border lg:border-white lg:rounded-full  xl:border xl:border-white xl:rounded-full xl:px-4  xl:py-4  lg:px-3 lg:py-3 lg:ml-2 lg:mr-3 md:border-0 sm:border-0">
                  <FaTwitter />
                </div>
                <div className=" xl:mr-5 text-white px-4 py-4 lg:border lg:border-white lg:rounded-full xl:border xl:border-white xl:rounded-full xl:px-4 xl:py-4 lg:px-3 lg:py-3 lg:ml-2 md:border-0 sm:border-0">
                  <FaInstagram />
                </div>
              </div>
            </nav>
          </div>

          <div className="flex flex-col items-center justify-center mt-16  lg:mt-24 md:mt-16 sm:mt-16 mt-16">
            <div className=" w-1/2 h-full mt-2 ml-2 block sm:hidden">
              <img src={process.env.PUBLIC_URL + "/images/Homepage-Logo.png"} />
            </div>
            <h1 className="inline-block font-bold text-white text-xl  xl:text-6xl w- xl:tracking-widest lg:text-5xl md:text-4xl md:tracking-widest  sm:text-3xl sm:tracking-widest ">
              SIMPLE & MORDERN
            </h1>
            <p className="text  text-white text-center w-7/12 text-sm tracking-tighter xl:tracking-extrawidest lg:text-sm md:tracking-tight sm:tracking-tight md:text-base sm:text-sm ">
              WE MAKE THE WORLD'S BEAUTIFUL EVERYDAY
            </p>
          </div>
          <div className="m-auto xl:mt-12 xl:px-4 xl:py-4 border border-white rounded-full lg:mt-8 lg:px-3 lg:py-3 md:mt-6 md:px-2 md:py-2 sm:mt-6 sm:px-2 sm:py-2 mt-4 px-2 py-2 ">
            <IoIosArrowDown className="text-white " />
          </div>

          <div className="flex justify-center  xl:mt-40 lg:mt-40 md:mt-32 sm:mt-24 mt-24">
            <div className="w-full relative  xl:w-1/3 lg:w-2/5 md:w-3/4 sm:w-3/4  ">
              <div className="gradient1 absolute  z-0 flex xl:flex-col lg:flex-col  justify-center  text-white  w-full xl:w-full xl:h-100 xl:pl-12 xl:pr-32 xl:pt-10 lg:h-80 lg:pl-10 lg:pr-24 lg:pt-4 md:h-64 md:flex-row md:pr-10 md:pt-16    sm:h-64 sm:flex-row sm:pr-10 sm:pt-16  h-40 flex-col pr-1 pt-3 pl-1">
                <p className="md:text-lg  h-full sm:h-9/12 xl:w-75 lg:h-56 lg:w-64 md:w-90 sm:w-75 sm:text-sm text-sm">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to
                </p>

                <div className="flex mt-0 xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-center items-center ">
                  <div className=" xl:px-5 xl:py-5 lg:px-5 lg:py-5 xl:border xl:border-white xl:rounded-full lg:border border border-white rounded-full px-1 py-1 lg:border-white lg:rounded-full  md:border-0 sm:border-0 mb-1 sm:mb-0 ">
                    <BsPlayFill className="lg:w-4 lg:h-4 lg:pl-0 md:w-16 md:h-16 md:pl-6  sm:w-16 sm:h-16 sm:pl-6" />
                  </div>

                  <p className="ml-5 mt-2 md:font-bold font-bold sm:block hidden">
                    WATCH <br />
                    <span className="md:font-bold md:text-base sm:font-light sm:text-xs font-light text-xs">
                      INTRO VIDEO
                    </span>
                  </p>
                </div>
              </div>

              <img
                className=" z-10 text-white w-full  xl:w-full xl:h-100 lg:w-full lg:h-80 md:h-64 sm:h-64 h-40"
                style={{
                  opacity: "0.05",
                  filter:
                    "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
                }}
                src={process.env.PUBLIC_URL + "/images/intro1.png"}
              />
            </div>

            <div className="-ml-16 -mt-16  w-1/3 xl:w-1/3 lg:w-2/5 xl:block lg:block md:hidden sm:hidden hidden">
              <img
                className="w-full h-100 z-50 relative xl:w-full xl:h-100 lg:h-80 "
                src={process.env.PUBLIC_URL + "/images/intro.jpg"}
              />
            </div>
          </div>
        </div>

        {
          <span id="Project1">
            {" "}
            <Project1 />
            <Project2 />
          </span>
        }
        {
          <span id="News">
            {" "}
            <News />
          </span>
        }
        {
          <span id="Gallery">
            {" "}
            <Gallery />
          </span>
        }
        {
          <span id="Contact">
            {" "}
            <Contact />
          </span>
        }
      </div>
    );
  }
}

export default MainPage;
