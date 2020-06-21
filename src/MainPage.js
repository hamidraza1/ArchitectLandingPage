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
            style={{ height: "800px" }}
            className="w-full absolute top-0 left-0 opacity-25"
            src={process.env.PUBLIC_URL + "/images/tu-tram-pham-202264.jpg"}
          />
          <div
            style={{ height: "800px" }}
            className="bg-opacity-75 gradient w-full  text-myColors-purple absolute top-0 left-0"
            alt=""
          ></div>
        </div>

        <div className="relative flex flex-col">
          <nav className="flex  justify-between items-center mx-56 mt-16   w-3/4 ">
            <div className=" w-1/4 h-full mt-2 ">
              <img
                src={process.env.PUBLIC_URL + "/images/Homepage-Recovered.png"}
              />
            </div>
            <ul className="flex justify-between w-7/12 pr-20 pl-10">
              <li className=" text-xs text-white flex items-center ">
                <div className="border rounded-full border-white w-2 h-2 mr-3 bg-white"></div>
                <a className="" href="#">
                  ABOUTUS
                </a>
              </li>
              <li className=" text-xs text-white  flex items-center">
                <div className="border rounded-full border-white w-2 h-2 mr-3"></div>

                <a href="#">PROJECTS</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <div className="border rounded-full border-white w-2 h-2 mr-3"></div>
                <a href="#">NEWS</a>
              </li>
              <li className=" text-xs text-white flex items-center">
                <div className="border rounded-full border-white w-2 h-2 mr-3"></div>
                <a href="#">CONTACT</a>
              </li>
            </ul>
            <div className="flex items-center w-1/6">
              <div className="ml-4 mr-5 text-white  px-4 py-4 border border-white rounded-full ">
                <FaFacebookF />
              </div>
              <div className=" mr-5 text-white  px-4 py-4 border border-white rounded-full">
                <FaTwitter />
              </div>
              <div className=" mr-5 text-white  px-4 py-4 border border-white rounded-full">
                <FaInstagram />
              </div>
            </div>
          </nav>

          <div className="m-auto mt-32">
            <h1
              className=" font-bold text-white ml-16 text-6xl"
              style={{ letterSpacing: "8px" }}
            >
              SIMPLE & MORDERN
            </h1>
            <p
              className="text  text-white text-center ml-16"
              style={{ letterSpacing: "8px" }}
            >
              WE MAKE THE WORLD'S BEAUTIFUL EVERYDAY
            </p>
          </div>
          <div className="m-auto mt-12 px-4 py-4 border border-white rounded-full  ">
            <IoIosArrowDown className="text-white " />
          </div>

          <div className="flex justify-center mt-40">
            <div>
              <img
                className=" text-white"
                style={{
                  width: "570px",
                  height: "400px",
                  opacity: "0.05",
                  filter:
                    "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
                }}
                src={process.env.PUBLIC_URL + "/images/intro1.png"}
              />
              <div
                className="gradient1 flex flex-col justify-center  text-white pl-12 pr-32 pt-16"
                style={{ width: "570px", height: "400px", marginTop: "-400px" }}
              >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <div className="flex mt-10 ">
                  <div className=" px-6 py-6 border border-white rounded-full  ">
                    <BsPlayFill />
                  </div>

                  <p className="ml-5 mt-2">
                    WATCH <br />
                    <span className="font-bold">INTRO VIDEO</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="-ml-16 -mt-16 relative ">
              <img
                style={{ width: "570px", height: "400px" }}
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
