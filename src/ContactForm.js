import React, { Component } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

class ContactForm extends Component {
  render() {
    return (
      <div className="flex justify-center relative w-full md:flex sm:flex ">
        <div className="flex flex-col  items-center  bg-white relative md:w-12/25 lg:-mt-64 xl:h-112.5 xl:px-16 lg:h-94 md:h-48 md:-mt-48    sm:h-48 h-48 sm:-mt-56 -mt-56 sm:w-full w-full ">
          <div className=" xl:mt-16 lg:mt-12 md:mt-8 border-t border-myColors-darkBlack h-2 w-20 xl:w-24 lg:w-20 lg:block md:hidden  sm:mt-8  sm:hidden  mt-6 hidden"></div>
          <div className="xl:mt-3 lg:mt-0 md:mt-2 text-myColors-darkBlack xl:text-3xl md:text-2xl ms:text-lg font-bold xl:tracking-wider lg:tracking-normal md:tracking-tight  sm:mt-2 sm:tracking-tight text-xl  mt-1 tracking-tight text-lg ">
            GET IN TOUCH
          </div>
          <div className="flex justify-between w-full  xl:mt-10 lg:mt-6 md:mt-4 lg:px-4 sm:mt-2  mt-1 ">
            <div className="flex flex-col h-40 xl:h-48 lg:h-48 md:h-32 xl:justify-between  lg:justify-between md:ml-2 sm:h-32 sm:ml-6 h-24 ml-6 ">
              <div className="text- flex items-center">
                <MdLocationOn className="inline-block  xl:mr-2 lg:mr-0 md:mr-1 text-myColors-purple xl:mt-0 lg:w-5 lg:h-5 lg:mt-0 md:-mt-4 md:w-3 md:h-3  sm:mr-3 sm:-mt-4 sm:w-3 sm:h-3     mr-3 -mt-4 w-3 h-3" />
                <span className="xl:text-base lg:text-sm md:text-xs xl:mb-0 lg:mb-0 md:mb-4 md:font-light  sm:text-s sm:mb-4 sm:font-light   text-sm mb-3 font-light">
                  91 Nolan Extension Suit 670
                </span>
              </div>
              <div className="text- flex items-center">
                <FaPhoneAlt className="inline-block mr-0 xl:mr-2 lg:mr-0 md:mr-1 text-myColors-purple xl:mt-0 lg:w-5 lg:h-5 lg:mt-0 md:-mt-3 md:w-3 md:h-3   sm:mr-3 sm:-mt-4 sm:w-3 sm:h-3  mr-3 -mt-4 w-3 h-3" />
                <span className="xl:text-base lg:text-sm md:text-xs  xl:mb-0 lg:mb-0 md:mb-4 md:font-light  sm:text-s sm:mb-4 sm:font-light   text-sm mb-3 font-light">
                  +001 356-868-2454
                </span>
              </div>
              <div className="text- flex items-center">
                <MdEmail className="inline-block mr-0 xl:mr-2 lg:mr-0 md:mr-1 text-myColors-purple xl:mt-0 lg:w-5 lg:h-5 lg:mt-0 md:-mt-3 md:w-3 md:h-3  sm:mr-3 sm:-mt-4 sm:w-3 sm:h-3    mr-3 -mt-4 w-3 h-3" />
                <span className="xl:text-base lg:text-sm md:text-xs  xl:mb-0 lg:mb-0 md:mb-4 md:font-light   sm:text-s sm:mb-4 sm:font-light   text-sm mb-3 font-light">
                  gahuy93@gmail.com
                </span>
              </div>
              <div className="text- flex items-center">
                <WiTime9 className="inline-block  xl:mr-2 lg:mr-0 md:mr-1 text-myColors-purple xl:mt-0 lg:w-5 lg:h-5 lg:mt-0 md:-mt-0 md:w-3 md:h-3  sm:mr-3 sm:-mt-4 sm:w-3 h-3   mr-3 -mt-2 w-3 h-3" />
                <span className="xl:text-base lg:text-sm md:text-xs md:font-light   sm:text-s sm:mb-4 sm:font-light  text-sm mb-3 font-light ">
                  Form 7:05AM to 19:30PM
                </span>
              </div>
            </div>
            <div className="flex flex-col xl:h-48 lg:48 md:h-32 justify-between w-12/25 md:mr-2 h-32 mr-4">
              <input
                className="outline-none  xl:border-b-2  xl:pb-3 xl:text-lg lg:border-b-2  lg:pb-1 lg:text-base md:border-b-2 md:pb-1 md:text-sm sm:border-b-2 sm:pb-1  border-b-2 pb-1 focus:border-myColors-darkBlack"
                type="input"
                placeholder="Name"
              />
              <input
                className="outline-none  xl:border-b-2  xl:pb-3 xl:text-lg lg:border-b-2  lg:pb-1 lg:text-base md:border-b-2 md:pb-1 md:text-sm  sm:border-b-2 sm:pb-1  border-b-2 pb-1  focus:border-myColors-darkBlack"
                type="input"
                placeholder="Email"
              />
              <div className="flex flex-col items-end ">
                <button className="w-1/2 border border-myColors-darkBlack text-myColors-darkBlack xl:py-3 lg:py-1 md:py-0 md:text-sm">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactForm;
