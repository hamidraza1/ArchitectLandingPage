import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div
        style={{ height: "1000px" }}
        className="flex flex-col items-center w-full"
      >
        <div className="mt-40 border-t border-myColors-darkBlack h-2 w-24"></div>
        <div className="text-myColors-darkBlack text-3xl font-bold tracking-wider">
          GALLERY
        </div>
        <div
          className="flex justify-between  w-9/12"
          style={{ height: "440px", marginTop: "104px" }}
        >
          <div
            style={{ width: "49%" }}
            className="bg-gray-300 flex items-center justify-center"
          >
            <img
              className=" absolute  w-20 h-20 "
              src={process.env.PUBLIC_URL + "/images/360deg.png"}
            />
            <img
              className="h-full"
              src={process.env.PUBLIC_URL + "/images/gallery1.jpg"}
            />
          </div>

          <div style={{ width: "49%" }} className="flex justify-between ">
            <div
              style={{ width: "49%" }}
              className="flex flex-col justify-between "
            >
              <div style={{ height: "49%" }} className="bg-gray-300">
                <img
                  className="h-full"
                  src={process.env.PUBLIC_URL + "/images/gallery2.jpg"}
                />
              </div>
              <div style={{ height: "49%" }} className="bg-gray-300">
                <img
                  className="h-full"
                  src={process.env.PUBLIC_URL + "/images/gallery4.jpg"}
                />
              </div>
            </div>
            <div
              style={{ width: "49%" }}
              className="flex flex-col justify-between"
            >
              <div style={{ height: "49%" }} className="bg-gray-300">
                <img
                  className="h-full"
                  src={process.env.PUBLIC_URL + "/images/gallery3.jpg"}
                />
              </div>
              <div style={{ height: "49%" }} className="bg-gray-300">
                <img
                  className="h-full"
                  src={process.env.PUBLIC_URL + "/images/gallery5.jpg"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border border-myColors-darkBlack px-16 py-5">
          <button className="text-myColors-darkBlack">SEE MORE</button>
        </div>
      </div>
    );
  }
}

export default Gallery;
