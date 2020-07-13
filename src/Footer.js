import React, { Component } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div
        className="relative w-full lg:h-131.25 md:h-131.5 lg:block md:block sm:block sm:h-100 block h-100"
        style={{ zIndex: "-1" }}
      >
        <img
          className="w-full  lg:h-131.25 md:h-131.5 sm:h-100 h-100"
          style={{ marginTop: "-194px", opacity: "0.5" }}
          src={process.env.PUBLIC_URL + "/images/footer.jpg"}
        />
        <div className=" w-full absolute bottom-0 xl:h-131.25  lg:h-113 md:h-113 sm:h-113 h-113     gradient3 "></div>

        <div
          className="flex flex-col relative items-center  justify-center  w-full sm:hidden hidden lg:flex "
          style={{ marginTop: "-335px" }}
        >
          <ul className="flex justify-between w-7/12 py-10 ">
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

        <div
          className="flex flex-col relative items-center  justify-center  w-full sm:flex flex lg:hidden "
          style={{ marginTop: "-235px" }}
        >
          <ul className="flex justify-between  w-11/12 sm:w-7/12 pt-10 pb-4  ">
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

          <div className="flex sm:flex-row flex-col items-center w-11/12 justify-between   sm:w-3/4 sm:-mt-4  -mt-10 ">
            <img
              style={{ marginLeft: "px", marginTop: "15px", height: "100px" }}
              src={process.env.PUBLIC_URL + "/images/Homepage-Recovered.png"}
            />

            <div className="flex ml-8 md:ml-0 sm:-ml-10  sm:mt-0  -mt-6">
              <div className=" md:mr-3 text-white  px-2 py-2 h-8 w-8 md:border border-white rounded-full sm:border-0 sm:mr-1 border-0 mr-1  ">
                <FaFacebookF className="" />
              </div>
              <div className=" md:mr-3 text-white  px-2 py-2 h-8 w-8 md:border border-white rounded-full sm:border-0 sm:mr-1  border-0 mr-1">
                <FaTwitter />
              </div>
              <div className="  text-white  px-2 py-2 h-8 w-8 md:border border-white rounded-full sm:border-0  border-0 ">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="flex sm:items-start sm:w-1/2 w-full sm:items-center justify-center text-white text-xs sm:-mt-3 mt-4">
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
