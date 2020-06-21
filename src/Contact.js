import React, { Component } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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

        <div className="flex justify-center relative w-full">
          <div
            className="bg-white relative   -mt-64"
            style={{ width: "48%", height: "450px" }}
          >
            hhhhhhhh
          </div>
        </div>

        <div
          className="relative w-full"
          style={{ height: "525px", zIndex: "-1" }}
        >
          <img
            className="w-full"
            style={{ height: "525px", marginTop: "-194px", opacity: "0.5" }}
            src={process.env.PUBLIC_URL + "/images/footer.jpg"}
          />
          <div
            className=" w-full absolute top-0     gradient3 "
            style={{ height: "525px", marginTop: "" }}
          ></div>

          <div
            className="flex flex-col relative items-center  justify-center  w-full "
            style={{ marginTop: "-335px" }}
          >
            <ul
              className="flex justify-between w-7/12 py-10  "
              style={{ width: "48%" }}
            >
              <li className="text-xs text-white flex items-center">
                <a className="" href="#">
                  HOME
                </a>
              </li>
              <li className=" text-xs text-white  flex items-center">
                <a href="#">PROJECT</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <a href="#">NEWS</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <a href="#">GALLERY</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <a href="#">ABOUTUS</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <a href="#">CONTACT</a>
              </li>
            </ul>
            <div className=" border-t border-white h-2 w-1/2 border-opacity-25"></div>

            <div className="flex items-center justify-between w-1/2">
              <img
                style={{ marginLeft: "-60px", marginTop: "15px" }}
                src={process.env.PUBLIC_URL + "/images/Homepage-Recovered.png"}
              />

              <div className="flex">
                <div className=" mr-5 text-white  px-4 py-4 h-12 w-12 border border-white rounded-full ">
                  <FaFacebookF className="" />
                </div>
                <div className=" mr-5 text-white  px-4 py-4 h-12 w-12 border border-white rounded-full">
                  <FaTwitter />
                </div>
                <div className="  text-white  px-4 py-4 h-12 w-12 border border-white rounded-full">
                  <FaInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
