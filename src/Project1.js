import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";

class Project1 extends Component {
  render() {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="mt-10 border-t border-myColors-darkBlack h-2 sm:w-24 lg:mt-32 lg:mt-24  w-16"></div>
        <div className="text-myColors-darkBlack xl:text-3xl font-bold tracking-wider lg:text-2xl md:text-2xl sm:text-2xl text-xl">
          WHAT WE DO
        </div>
        <div className="flex xl:mt-24 xl:w-4/6 justify-between lg:mt-20 md:mt-16 md:w-4/5 sm:mt-12 sm:w-4/5 mt-8 w-full">
          <div className="flex flex-col items-center">
            <img
              className="md:w-16 md:h-12 sm:w-12 sm:h-8 w-10 h-6"
              src={process.env.PUBLIC_URL + "/images/Appartment.png"}
            />
            <div className=" mt-4   border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack md:text-base sm:text-sm text-xs sm:uppercase tracking-tighter">
              APPARTMENT
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-16 md:h-12 sm:w-12 sm:h-8 w-10 h-6"
              src={process.env.PUBLIC_URL + "/images/Villas.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack md:text-base sm:text-sm text-xs sm:uppercase tracking-tighter">
              VILLAS
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-16 md:h-12 sm:w-12 sm:h-8 w-10 h-6"
              src={process.env.PUBLIC_URL + "/images/TradeCenter.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack md:text-base sm:text-sm text-xs sm:uppercase tracking-tighter">
              TRADECENTER
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-16 md:h-12 sm:w-12 sm:h-8 w-10 h-6"
              src={process.env.PUBLIC_URL + "/images/SkyScrappers.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack md:text-base sm:text-sm text-xs sm:uppercase tracking-tighter">
              SKYSCRAPPER
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="md:w-16 md:h-12 sm:w-12 sm:h-8 w-10 h-6"
              src={process.env.PUBLIC_URL + "/images/hut.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack md:text-base sm:text-sm text-xs sm:uppercase tracking-tighter">
              MANSION
            </p>
          </div>
        </div>

        <div className="flex  w-full mt-24 xl:flex-row lg:flex-row md:flex-col lg:7/12 md:w-full sm:flex-col sm:w-full ">
          <div className="sm:flex hidden" style={{ width: "" }}>
            <div
              className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94 xl:block lg:block md:hidden sm:hidden"
              style={{
                backgroundColor: "#55b7ff",
                zIndex: "-1",
              }}
            ></div>

            <div
              className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94  xl:block lg:block md:hidden sm:hidden "
              style={{
                marginLeft: "-300px",
                marginTop: "100px",
              }}
              className=""
            >
              <img
                className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94 md:w-75 md:h-56 sm:w-75 sm:h-56"
                src={process.env.PUBLIC_URL + "/images/Project1.jpg"}
              />
            </div>

            <div className=" md:w-1/2 md:h-80  xl:hidden lg:hidden md:block sm:w-1/2 sm:h-80 sm:block">
              <img
                className="md:w-full md:h-80 sm:w-full sm:h-80"
                src={process.env.PUBLIC_URL + "/images/Project1.jpg"}
              />
            </div>
          </div>

          <div className="flex flex-col lg:items-start md:items-end lg:pl-20 xl:pt-32 lg:pt-24 lg:w-4/12  md:w-full md:pl-0     sm:items-end sm:w-full sm:pl-0 w-9/12">
            <div className="lg:w-full lg:bg-white lg:py-0 lg:border-0 md:w-1/2 md:pl-6 md:bg-gray-300 md:py-4 md:border md:rounded-tl-md md:rounded-bl-md       sm:w-1/2 sm:pl-6 sm:bg-gray-300 sm:py-4 sm:border sm:rounded-tl-md sm:rounded-bl-md  bg-gray-300 py-4 pl-6">
              <h3 className="md:text-base text-myColors-darkBlack sm:text-sm ">
                ONE WORLD <br />
                <span className=" font-bold text-myColors-darkBlack xl:text-3xl lg:text-2xl md:text-2xl sm:text-xl">
                  {" "}
                  TRADE CENTER
                </span>
              </h3>
              <p
                className="mt-4 w-11/12 pr-10 xl:w-112.5 xl:pr-10 xl:mt-4 lg:w-90 lg:pr-8 lg:mt-3 md:pr-0 md:w-75   sm:pr-0 sm:w- "
                style={{ color: "#7b818a" }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
              <button
                className="w-48 h-12 border  mt-10 border-myColors-darkBlack text-myColors-darkBlack lg:w-40 lg:mt-8 md:w-40 md:mt-8 sm:w-32 sm:mt-4"
                style={{}}
              >
                MORE DETAILS
              </button>
              <div className="flex items-center mt-16 lg:mt-12 md:mt-12 sm:mt-8">
                <MdLocationOn />
                <span className="text-myColors-darkBlack ml-2 md:text-base sm:text-sm">
                  New York City, United States - 1776 feet
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project1;
