import React, { Component } from "react";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { WiTime9 } from "react-icons/wi";

class ContactForm extends Component {
  render() {
    return (
      <div className="flex justify-center relative w-full">
        <div className="flex flex-col  items-center  bg-white relative px-16   -mt-64 h-112.5 w-12/25">
          <div className="mt-16 border-t border-myColors-darkBlack h-2 w-24"></div>
          <div className="mt-3 text-myColors-darkBlack text-3xl font-bold tracking-wider">
            GET IN TOUCH
          </div>
          <div className="flex justify-between w-full mt-10 ">
            <div className="flex flex-col h-48 justify-between">
              <div className="text- flex items-center">
                <MdLocationOn className="inline-block mr-2 text-myColors-purple" />
                <span>91 Nolan Extension Suit 670</span>
              </div>
              <div className="text- flex items-center">
                <FaPhoneAlt className="inline-block mr-2 text-myColors-purple " />
                +001 356-868-2454
              </div>
              <div className="text- flex items-center">
                <MdEmail className="inline-block mr-2 text-myColors-purple " />
                gahuy93@gmail.com
              </div>
              <div className="text- flex items-center">
                <WiTime9 className="inline-block mr-2 text-myColors-purple " />
                Form 7:05AM to 19:30PM
              </div>
            </div>
            <div className="flex flex-col h-48 justify-between w-12/25">
              <input
                className="outline-none  border-b-2 borde pb-3 text-lg focus:border-myColors-darkBlack"
                type="input"
                placeholder="Name"
              />
              <input
                className="outline-none  border-b-2 borde pb-3 text-lg focus:border-myColors-darkBlack"
                type="input"
                placeholder="Email"
              />
              <div className="flex flex-col items-end ">
                <button className="w-1/2 border border-myColors-darkBlack text-myColors-darkBlack py-3">
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
