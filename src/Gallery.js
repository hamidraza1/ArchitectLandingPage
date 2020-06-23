import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div
        style={{}}
        className="flex flex-col items-center w-full xl:h-250 lg:h-200 md:h-140"
      >
        <div className="mt-40 border-t border-myColors-darkBlack h-2 w-24 lg:mt-32 lg:w-20 md:mt-16"></div>
        <div className="text-myColors-darkBlack xl:text-3xl font-bold tracking-wider lg:text-2xl md:text-2xl ">
          GALLERY
        </div>
        <div className="flex justify-between  w-9/12 xl:h-110 xl:mt-24 lg:h-88 lg:mt-20 md:h-64 md:mt-16 ">
          <div
            style={{ width: "49%" }}
            className="bg-gray-300 flex items-center justify-center"
          >
            <img
              className=" absolute  xl:w-20 xl:h-20 lg:w-16 lg:h-16 md:w-12 md:h-12 "
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

        <div className="mt-16 border border-myColors-darkBlack xl:px-16 xl:py-5 xl:mt-16 lg:px-12 lg:py-3 lg:mt-12 md:mt-8 md:px-10 md:py-2 ">
          <button className="text-myColors-darkBlack">SEE MORE</button>
        </div>
      </div>
    );
  }
}

export default Gallery;
