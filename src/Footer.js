import React, { Component } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div className="relative w-full h-131.25" style={{ zIndex: "-1" }}>
        <img
          className="w-full"
          style={{ height: "525px", marginTop: "-194px", opacity: "0.5" }}
          src={process.env.PUBLIC_URL + "/images/footer.jpg"}
        />
        <div
          className=" w-full absolute top-0     gradient3 "
          style={{ height: "525px" }}
        ></div>

        <div
          className="flex flex-col relative items-center  justify-center  w-full "
          style={{ marginTop: "-335px" }}
        >
          <ul className="flex justify-between w-7/12 py-10 w-12/25 ">
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

          <div className="flex items-center justify-between w-1/2 -mt-4">
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
          <div className="flex items-start w-1/2 text-white text-xs -mt-3">
            <div className="">
              Copyrights © 2017 Monticello | Made with by{" "}
              <FaHeart className="inline-block mx-1" /> Gay Huy
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
