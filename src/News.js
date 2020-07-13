import React, { Component } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class News extends Component {
  render() {
    return (
      <div
        className=" xl:h-258 lg:h-205 md:h-205 sm:h-175 h-160"
        style={{ marginTop: "140px" }}
      >
        <div
          className="gradient2 flex flex-col items-center w-full  xl:h-258 lg:h-205 md:h-205 sm:h-175 h-160"
          style={{}}
        >
          <div className=" border-t border-white h-2 w-24 xl:mt-40 lg:mt-32 md:mt-20 sm:mt-16 mt-16"></div>
          <div className="text-white  font-bold tracking-wider  xl:mt-4 xl:text-3xl lg:mt-3  lg:text-2xl md:text-2xl md:mt-1 sm:text-xl sm:mt-1 text-xl mt-1">
            LATEST NEWS
          </div>

          <div
            className="flex  lg:w-9/12  justify-between xl:mt-24 xl:h-128 lg:mt-20 lg:h-102 lg:flex-row  md:h-128 md:mt-12 md:w-full md:flex-col   sm:h-117.5 sm:mt-8 sm:w-full sm:flex-col h-117.5 mt-8 w-full flex-col"
            style={{}}
          >
            <div className="bg-white flex lg:flex-col xl:h-128 lg:h-102 lg:w-31/100 md:h-32 md:flex-row md:w-11/12  sm:h-32 sm:flex-row sm:w-11/12  h-32 flex-row w-11/12">
              <img
                src={process.env.PUBLIC_URL + "/images/news1.jpg"}
                style={{ height: "47%" }}
                className="lg:block md:hidden  sm:hidden hidden"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/news1.jpg"}
                className="md:h-full lg:hidden md:block sm:h-full sm:block h-full block hidden"
              />

              <div className="flex lg:flex-col md:flex-col sm:flex-col flex-col ">
                <h2 className=" font-bold text-myColor-darkBlack  xl:text-lg xl:pl-6 xl:pt-5 md:text-base md:pl-6 md:pt-5   sm:text-sm sm:pl-6 sm:pt-5 text-sm pl-2 pt-1">
                  SEE THE UNMATCHED BEAUTY OF THE GREAT.
                </h2>
                <div className="flex lg:flex-col md:flex-row md:justify-between    sm:flex-row  sm:justify-between flex-row justify-between">
                  <p className="pl-2 mr-4 text-myColors-lightBlack pt-2 xl:pl-6 xl:pt-2  xl:mr-4  lg:pl-6 lg:pt-1 lg:mr-4 lg:w-full md:w-8/12 md:mr-2 md:pt-0 md:text-base   sm:w-8/12 sm:mr-2 sm:pt-0 sm:pl-6 sm:text-xs  w-8/12 mr-2 pt-0 text-xs ">
                    Free directories: directories are perfect for customers that
                    are... searching for
                  </p>
                  <div className="flex sm:flex-row flex-col  items-center xl:mt-10 xl:pl-6 lg:pl-6 lg:mt-2  md:mt-0 md:pl-2 md:pr-2    sm:mt-2 sm:pl-0 sm:pr-2  mt-0 pl-0 pr-2 ">
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/profileNews1.jpg"
                        }
                        style={{}}
                        className="rounded-full  xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-10 sm:h-10 w-10 h-10"
                      />
                    </div>
                    <div className=" xl:ml-5 md:ml-3 sm:ml-2 ml-1  ">
                      <span className="font-semibold xl:text-sm md:text-xs sm:text-xs text-xs">
                        ISSAC
                      </span>
                      <br />
                      <span className="text-xs text-myColors-blue ">
                        09 Feb 2017
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white flex lg:flex-col xl:h-128 lg:h-102 lg:w-31/100 md:h-32 md:flex-row md:w-11/12  sm:h-32 sm:flex-row sm:w-11/12  h-32 flex-row w-11/12">
              <img
                src={process.env.PUBLIC_URL + "/images/news2.jpg"}
                style={{ height: "47%" }}
                className="lg:block md:hidden  sm:hidden hidden"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/news2.jpg"}
                className="md:h-full lg:hidden md:block sm:h-full sm:block h-full block hidden"
              />

              <div className="flex lg:flex-col md:flex-col sm:flex-col flex-col ">
                <h2 className=" font-bold text-myColor-darkBlack  xl:text-lg xl:pl-6 xl:pt-5 md:text-base md:pl-6 md:pt-5   sm:text-sm sm:pl-6 sm:pt-5 text-sm pl-2 pt-1">
                  EFFECTIVE ADVERTISING POINTERS
                </h2>
                <div className="flex lg:flex-col md:flex-row md:justify-between    sm:flex-row  sm:justify-between flex-row justify-between">
                  <p className="pl-2 sm:pl-6 mr-4 text-myColors-lightBlack pt-2 xl:pl-6 xl:pt-2  xl:mr-4  lg:pl-6 lg:pt-1 lg:mr-4 lg:w-full md:w-8/12 md:mr-2 md:pt-0 md:text-base   sm:w-8/12 sm:mr-2 sm:pt-0 sm:text-xs  w-8/12 mr-2 pt-0 text-xs ">
                    Having home based issue is a wonderful asset of your life.
                  </p>
                  <div className="flex sm:flex-row flex-col   items-center xl:mt-10 xl:pl-6 lg:pl-6 lg:mt-2  md:mt-0 md:pl-2 md:pr-2    sm:mt-2 sm:pl-0 sm:pr-2  mt-2 pl-0 pr-2 ">
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/profileNews2.jpg"
                        }
                        style={{}}
                        className="rounded-full  xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-10 sm:h-10 w-10 h-10"
                      />
                    </div>
                    <div className=" xl:ml-5 md:ml-3 sm:ml-2 ml-1  ">
                      <span className="font-semibold xl:text-sm md:text-xs sm:text-xs text-xs">
                        DOMMINIC
                      </span>
                      <br />
                      <span className="text-xs text-myColors-blue">
                        09 Feb 2017
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white flex lg:flex-col xl:h-128 lg:h-102 lg:w-31/100 md:h-32 md:flex-row md:w-11/12  sm:h-32 sm:flex-row sm:w-11/12  h-32 flex-row w-11/12">
              <img
                src={process.env.PUBLIC_URL + "/images/news3.jpg"}
                style={{ height: "47%" }}
                className="lg:block md:hidden  sm:hidden hidden"
              />
              <img
                src={process.env.PUBLIC_URL + "/images/news3.jpg"}
                className="md:h-full lg:hidden md:block sm:h-full sm:block h-full block hidden"
              />

              <div className="flex lg:flex-col md:flex-col sm:flex-col flex-col ">
                <h2 className=" font-bold text-myColor-darkBlack  xl:text-lg xl:pl-6 xl:pt-5 md:text-base md:pl-6 md:pt-5   sm:text-sm sm:pl-6 sm:pt-5 text-sm pl-2 pt-1">
                  HYPTONIZE YOURSELF INTO THE GHOST.
                </h2>
                <div className="flex lg:flex-col md:flex-row md:justify-between    sm:flex-row  sm:justify-between flex-row justify-between">
                  <p className="pl-2 sm:pl-6 mr-4 text-myColors-lightBlack pt-2 xl:pl-6 xl:pt-2  xl:mr-4  lg:pl-6 lg:pt-1 lg:mr-4 lg:w-full md:w-8/12 md:mr-2 md:pt-0 md:text-base   sm:w-8/12 sm:mr-2 sm:pt-0 sm:text-xs  w-8/12 mr-2 pt-0 text-xs ">
                    There are many things that are important to catalog
                    design....
                  </p>
                  <div className="flex sm:flex-row flex-col   items-center xl:mt-10 xl:pl-6 lg:pl-6 lg:mt-2  md:mt-0 md:pl-2 md:pr-2    sm:mt-2 sm:pl-0 sm:pr-2  mt-2 pl-0 pr-2 ">
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/profileNews3.jpg"
                        }
                        style={{}}
                        className="rounded-full  xl:w-16 xl:h-16 lg:w-12 lg:h-12 md:w-10 md:h-10 sm:w-10 sm:h-10 w-10 h-10"
                      />
                    </div>
                    <div className=" xl:ml-5 md:ml-3 sm:ml-2 ml-1  ">
                      <span className="font-semibold xl:text-sm md:text-xs sm:text-xs text-xs">
                        ALICE
                      </span>
                      <br />
                      <span className="text-xs text-myColors-blue">
                        09 Feb 2017
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute left-0   px-3 py-3 border border-white rounded-full xl:block lg:hidden md:hidden sm:hidden hidden "
            style={{
              marginTop: "550px",
              marginLeft: "60px",
              marginRight: "30px",
            }}
          >
            <IoIosArrowBack className="text-white " />
          </div>
          <div
            className="absolute right-0  px-3 py-3 border border-white rounded-full xl:block lg:hidden md:hidden sm:hidden hidden"
            style={{
              marginTop: "550px",
              marginLeft: "30px",
              marginRight: "60px",
            }}
          >
            <IoIosArrowForward className="text-white " />
          </div>
          <div className="flex justify-between sm:mt-16 mt-4 w-1/6">
            <div className="border rounded-full border-white w-2 h-2 "></div>
            <div className="border rounded-full border-white bg-white w-2 h-2 "></div>
            <div className="border rounded-full border-white w-2 h-2 "></div>
            <div className="border rounded-full border-white w-2 h-2 "></div>
            <div className="border rounded-full border-white w-2 h-2 "></div>
          </div>
        </div>

        <img
          style={{
            height: "590px",
            marginTop: "-590px",
            opacity: "0.1",
            filter:
              "invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)",
          }}
          src={process.env.PUBLIC_URL + "/images/NewsBG.png"}
        />
      </div>
    );
  }
}
export default News;
