import React, { Component } from "react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import { TiLocationArrow } from "react-icons/ti";

class Contact extends Component {
  render() {
    return (
      <div>
        <div style={{ height: "700px" }} className="flex justify-center w-full">
          <div
            className=" absolute flex justify-between mt-24 ml-48"
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
              style={{ width: "79%", height: "130px" }}
              className="flex bg-white"
            >
              <img
                style={{ width: "30%" }}
                className=""
                src={process.env.PUBLIC_URL + "/images/contact.jpg"}
              />
              <div
                style={{ width: "70%" }}
                className="text-base text-myColors-midBlack font-bold flex flex-col justify-center pl-8"
              >
                MONTICELLO GROUP HQ <br />
                <span className="text-xs text-myColors-midBlue flex items-center ">
                  <TiLocationArrow className="inline-block text-base mr-1" />
                  GET A DIRECTION
                </span>
              </div>
            </div>
          </div>

          <img
            className="w-full"
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
