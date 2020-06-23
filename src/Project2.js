import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";

class Project2 extends Component {
  render() {
    return (
      <div className="flex w-full  justify-end mt-32 lg:flex-row md:flex-col">
        <div className="flex flex-col  xl:pt-32 xl:pl-20 lg:pt-24 lg:pl-20 lg:bg-white lg:border-0 lg:py-0 md:border md:rounded-tr-md md:rounded-br-md md:bg-gray-300 md:py-4 md:pl-6 md:w-1/2">
          <h3 className="text-base text-myColors-darkBlack">
            INTERNATIONAL <br />
            <span className="text-3xl font-bold text-myColors-darkBlack xl:text-3xl lg:text-2xl">
              {" "}
              COMMERCE CENTER
            </span>
          </h3>
          <p
            className="mt-4 w-112.5 pr-10 xl:w-112.5 xl:pr-10 xl:mt-4 lg:w-90 lg:pr-8 lg:mt-3  md:w-75"
            style={{ color: "#7b818a" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <button
            className="w-48 h-12 border  mt-10 border-myColors-darkBlack text-myColors-darkBlack xl:w-48 xl:h-12 lg:w-40 lg:mt-8"
            style={{}}
          >
            MORE DETAILS
          </button>
          <div className="flex items-center mt-16 xl:mt-16 lg:mt-12">
            <MdLocationOn />
            <span className="text-myColors-darkBlack ml-2">
              Hong Kong - 1588 feet
            </span>
          </div>
        </div>

        <div className="lg:hidden w-full  md:flex justify-end">
          <img
            className="md:w-1/2 md:h-80 relative lg:hidden md:block"
            src={process.env.PUBLIC_URL + "/images/Project2.jpg"}
          />
        </div>

        <img
          className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94 relative lg:block md:hidden"
          style={{ marginRight: "-300px", marginTop: "100px" }}
          src={process.env.PUBLIC_URL + "/images/Project2.jpg"}
        />

        <div
          className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94 lg:block md:hidden "
          style={{
            backgroundColor: "#55b7ff",
          }}
        ></div>
      </div>
    );
  }
}
export default Project2;
