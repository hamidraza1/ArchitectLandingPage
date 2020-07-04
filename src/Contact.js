import React, { Component } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

import { TiLocationArrow } from "react-icons/ti";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center w-full xl:h-175 md:h-140 sm:h-113  h-113">
          <div
            className=" absolute flex justify-between xl:mt-24 lg:mt-20 md:mt-12 sm:mt-8  mt-8 "
            style={{ width: "39%" }}
          >
            <div style={{ width: "17%" }} className="flex items-center">
              <img
                style={{ width: "" }}
                className=""
                src={process.env.PUBLIC_URL + "/images/pin.png"}
              />
            </div>

            <div
              style={{ width: "79%" }}
              className="flex bg-white xl:h-32 lg:h-24 md:h-16 sm:h-12 h-12"
            >
              <img
                style={{ width: "30%" }}
                className=""
                src={process.env.PUBLIC_URL + "/images/contact.jpg"}
              />
              <div
                style={{ width: "70%" }}
                className="text-myColors-midBlack lg:font-bold flex flex-col justify-center xl:text-base xl:pl-8 lg:text-sm lg:pl-6 md:text-xs md:font-medium md:pl-2  sm:text-xs sm:font-thin sm:pl-1  text-xs font-thin pl-1"
              >
                MONTICELLO GROUP HQ <br />
                <span className="text-xs text-myColors-midBlue flex items-center md:text-base sm:text-xs text-xs">
                  <TiLocationArrow className="inline-block text-base lg:mr-1  md:mr-0  sm:mr-0 mr-0  " />
                  GET A DIRECTION
                </span>
              </div>
            </div>
          </div>

          <img
            className="w-full md:h-full h-64"
            src={process.env.PUBLIC_URL + "/images/Map.png"}
          />
        </div>

        <ContactForm />

        <Footer />
      </div>
    );
  }
}
export default Contact;
