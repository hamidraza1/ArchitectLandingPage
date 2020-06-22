import React, { Component } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";

class MainPage extends Component {
  render() {
    return (
      <div>
        <div>
          <img
            className="w-full h-200 absolute top-0 left-0 opacity-25 xl:h-200 lg:h-160"
            src={process.env.PUBLIC_URL + "/images/tu-tram-pham-202264.jpg"}
          />
          <div
            className="bg-opacity-75 h-200 gradient w-full  text-myColors-purple absolute top-0 left-0 xl:h-200 lg:h-160"
            alt=""
          ></div>
        </div>

        <div className="relative flex flex-col">
          <div className="flex w-full justify-between items-center">
            <nav className="flex  justify-between items-center mx-56 mt-16 w-3/4 lg:w-3/4  lg:mx-auto">
              <div className=" w-1/4 h-full mt-2 ">
                <img
                  src={process.env.PUBLIC_URL + "/images/Homepage-Logo.png"}
                />
              </div>
              <ul className="flex justify-between w-7/12 pr-10  pl-10">
                <li className=" text-xs text-white flex items-center ">
                  <div className="border rounded-full border-white w-2 h-2 mr-3 bg-white xl:mr-3 lg:mr-1"></div>
                  <a className="" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className=" text-xs text-white  flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-3 xl:mr-3 lg:mr-1"></div>

                  <a href="#">PROJECTS</a>
                </li>
                <li className=" text-xs text-white flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-3 xl:mr-3 lg:mr-1"></div>
                  <a href="#">NEWS</a>
                </li>
                <li className=" text-xs text-white flex items-center">
                  <div className="border rounded-full border-white w-2 h-2 mr-3 xl:mr-3 lg:mr-1"></div>
                  <a href="#">CONTACT</a>
                </li>
              </ul>
              <div className="flex items-center w-3/12">
                <div className="ml-4 mr-5 text-white px-4 py-4   border border-white rounded-full xl:px-4  xl:py-4  lg:px-3 lg:py-3  lg:mr-3">
                  <FaFacebookF />
                </div>
                <div className=" mr-5 text-white px-4 py-4  border border-white rounded-full xl:px-4  xl:py-4  lg:px-3 lg:py-3 lg:ml-2 lg:mr-3">
                  <FaTwitter />
                </div>
                <div className=" mr-5 text-white px-4 py-4 border border-white rounded-full xl:px-4 xl:py-4 lg:px-3 lg:py-3 lg:ml-2 ">
                  <FaInstagram />
                </div>
              </div>
            </nav>
          </div>

          <div className="flex flex-col items-center justify-center mt-32 w-ful lg:mt-24">
            <h1 className="inline-block font-bold text-white  text-6xl w- xl:tracking-widest lg:text-5xl">
              SIMPLE & MORDERN
            </h1>
            <p className="text  text-white text-center w-7/12 xl:tracking-extrawidest lg:text-sm ">
              WE MAKE THE WORLD'S BEAUTIFUL EVERYDAY
            </p>
          </div>
          <div className="m-auto mt-12 px-4 py-4 border border-white rounded-full lg:mt-8 lg:px-3 lg:py-3  ">
            <IoIosArrowDown className="text-white " />
          </div>

          <div className="flex justify-center  mt-40">
            <div className="w-5/12 relative  xl:w-1/3 lg:w-2/5">
              <div className="gradient1 absolute  z-0 flex flex-col justify-center  text-white pl-12 pr-32 pt-10 w-full h-100 xl:w-full xl:h-100 xl:pl-12 xl:pr-32 xl:pt-10 lg:h-80 lg:pl-10 lg:pr-24 lg:pt-6">
                <p className="h-9/12 xl:h-9/12 xl:w-75 lg:w-64">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has.
                </p>

                <div className="flex mt-4 ">
                  <div className=" px-5 py-5 border border-white rounded-full  ">
                    <BsPlayFill />
                  </div>

                  <p className="ml-5 mt-2">
                    WATCH <br />
                    <span className="font-bold">INTRO VIDEO</span>
                  </p>
                </div>
              </div>

              <img
                className=" z-10 text-white w-full h-100 xl:w-full xl:h-100 lg:w-full lg:h-80"
                style={{
                  opacity: "0.05",
                  filter:
                    "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
                }}
                src={process.env.PUBLIC_URL + "/images/intro1.png"}
              />
            </div>

            <div className="-ml-16 -mt-16  w-1/3 xl:w-1/3 lg:w-2/5  ">
              <img
                className="w-full h-100 z-50 relative xl:w-full xl:h-100 lg:h-80"
                src={process.env.PUBLIC_URL + "/images/intro.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
