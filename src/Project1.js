import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";

class Project1 extends Component {
  render() {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="mt-40 border-t border-myColors-darkBlack h-2 w-24 lg:mt-32"></div>
        <div className="text-myColors-darkBlack text-3xl font-bold tracking-wider lg:text-2xl">
          WHAT WE DO
        </div>
        <div className="flex mt-24 w-4/6 justify-between ">
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-12"
              src={process.env.PUBLIC_URL + "/images/Appartment.png"}
            />
            <div className=" mt-4   border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack">APARTMENT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-12"
              src={process.env.PUBLIC_URL + "/images/Villas.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack">VILLAS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-12"
              src={process.env.PUBLIC_URL + "/images/TradeCenter.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack">TRADECENTER</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-12"
              src={process.env.PUBLIC_URL + "/images/SkyScrappers.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack">SKYSCRAPPER</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="w-16 h-12"
              src={process.env.PUBLIC_URL + "/images/hut.png"}
            />
            <div className="m-auto mt-4  border-t border-myColors-darkBlack h-2 w-8 border-myColors-darkBlack "></div>
            <p className="text-myColors-darkBlack">MANSION</p>
          </div>
        </div>

        <div className="flex  w-full mt-24">
          <div className="flex" style={{ width: "57%" }}>
            <div
              className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94"
              style={{
                backgroundColor: "#55b7ff",
                zIndex: "-1",
              }}
            ></div>

            <div
              className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94"
              style={{
                marginLeft: "-300px",
                marginTop: "100px",
              }}
              className=""
            >
              <img
                className="xl:w-125 xl:h-117.5 lg:w-100 lg:h-94"
                src={process.env.PUBLIC_URL + "/images/Project1.jpg"}
              />
            </div>
          </div>

          <div
            className="flex flex-col pl-20 pt-32 lg:pt-24 "
            style={{ width: "43%" }}
          >
            <h3 className="text-base text-myColors-darkBlack">
              ONE WORLD <br />
              <span className="text-2xl font-bold text-myColors-darkBlack">
                {" "}
                TRADE CENTER
              </span>
            </h3>
            <p
              className="mt-4 w-112.5 xl:w-112.5 xl:pr-10 lg:w-90 lg:pr-8 "
              style={{ color: "#7b818a" }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button
              className="w-48 h-12 border  mt-10 border-myColors-darkBlack text-myColors-darkBlack lg:w-40 lg:mt-8"
              style={{}}
            >
              MORE DETAILS
            </button>
            <div className="flex items-center mt-16 lg:mt-12">
              <MdLocationOn />
              <span className="text-myColors-darkBlack ml-2">
                New York City, United States - 1776 feet
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project1;
