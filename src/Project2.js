import React, { Component } from "react";
import { MdLocationOn } from "react-icons/md";

class Project2 extends Component {
  render() {
    return (
      <div className="flex flex-col items-center w-full">
        <div className="flex w-full mt-32">
          <div
            className="flex flex-col pl-56 pr-20 pt-32 lg:pl-40"
            style={{ width: "43%" }}
          >
            <h3 className="text-base text-myColors-darkBlack">
              INTERNATIONAL <br />
              <span className="text-3xl font-bold text-myColors-darkBlack tracking-wider">
                {" "}
                COMMERCE CENTER
              </span>
            </h3>
            <p className="mt-6 w-full" style={{ width: "", color: "#7b818a" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <button
              className="w-48 h-12 border  mt-10 border-myColors-darkBlack text-myColors-darkBlack"
              style={{}}
            >
              MORE DETAILS
            </button>
            <div className="flex items-center mt-16">
              <MdLocationOn />
              <span className="text-myColors-darkBlack ml-2">
                Hong Kong - 1588 feet
              </span>
            </div>
          </div>

          <div className="flex" style={{ width: "57%" }}>
            <div
              style={{
                width: "100%",
                marginRight: "-370px",
                marginTop: "70px",
                position: "relative",
              }}
              className=""
            >
              <img
                className=""
                style={{ height: "470px" }}
                src={process.env.PUBLIC_URL + "/images/Project2.jpg"}
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "470px",
                backgroundColor: "#7e5aff",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Project2;
