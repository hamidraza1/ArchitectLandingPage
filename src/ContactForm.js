import React, { Component } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

class ContactForm extends Component {
  render() {
    return (
      <div className="flex justify-center relative w-full lg:flex md:hidden ">
        <div className="flex flex-col  items-center  bg-white relative w-12/25 -mt-64 xl:h-112.5 xl:px-16 lg:h-94 ">
          <div className=" xl:mt-16 lg:mt-12 border-t border-myColors-darkBlack h-2 w-20 xl:w-24 lg:w-20"></div>
          <div className="xl:mt-3 lg:mt-0 text-myColors-darkBlack xl:text-3xl lg:text-2xl font-bold xl:tracking-wider lg:tracking-normal  ">
            GET IN TOUCH
          </div>
          <div className="flex justify-between w-full mt-6 xl:mt-10 lg:mt-6 lg:px-4 ">
            <div className="flex flex-col h-40 xl:h-48 lg:h-48 justify-between">
              <div className="text- flex items-center">
                <MdLocationOn className="inline-block mr-0 xl:mr-2 lg:mr-0 text-myColors-purple" />
                <span className="xl:text-base lg:text-sm">
                  91 Nolan Extension Suit 670
                </span>
              </div>
              <div className="text- flex items-center">
                <FaPhoneAlt className="inline-block mr-0 xl:mr-2 lg:mr-0 text-myColors-purple " />
                <span className="xl:text-base lg:text-sm">
                  +001 356-868-2454
                </span>
              </div>
              <div className="text- flex items-center">
                <MdEmail className="inline-block mr-0 xl:mr-2 lg:mr-0 text-myColors-purple " />
                <span className="xl:text-base lg:text-sm">
                  gahuy93@gmail.com
                </span>
              </div>
              <div className="text- flex items-center">
                <WiTime9 className="inline-block mr-0 xl:mr-2 lg:mr-0 text-myColors-purple " />
                <span className="xl:text-base lg:text-sm">
                  Form 7:05AM to 19:30PM
                </span>
              </div>
            </div>
            <div className="flex flex-col xl:h-48 lg:48 justify-between w-12/25">
              <input
                className="outline-none  xl:border-b-2  xl:pb-3 xl:text-lg lg:border-b-2  lg:pb-1 lg:text-base focus:border-myColors-darkBlack"
                type="input"
                placeholder="Name"
              />
              <input
                className="outline-none  xl:border-b-2  xl:pb-3 xl:text-lg lg:border-b-2  lg:pb-1 lg:text-base focus:border-myColors-darkBlack"
                type="input"
                placeholder="Email"
              />
              <div className="flex flex-col items-end ">
                <button className="w-1/2 border border-myColors-darkBlack text-myColors-darkBlack xl:py-3 lg:py-1">
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
