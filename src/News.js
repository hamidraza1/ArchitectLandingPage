import React, { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class News extends Component {
  render() {
    return (
      <div style={{ height: "1035px", marginTop: "140px" }}>
        <div
          className="gradient2 flex flex-col items-center w-full "
          style={{ height: "1035px" }}
        >
          <div className="mt-40 border-t border-white h-2 w-24"></div>
          <div className="text-white text-3xl font-bold tracking-wider mt-4">
            LATEST NEWS
          </div>
          <div
            className="flex mt-24 w-9/12  justify-between"
            style={{ height: "515px" }}
          >
            <div
              className="bg-white flex flex-col"
              style={{ height: "515px", width: "31%" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/news1.jpg"}
                style={{ height: "47%" }}
              />
              <h2 className="text-lg font-bold text-myColor-darkBlack pl-6 pt-5">
                SEE THE UNMATCHED
                <br /> BEAUTY OF THE GREAT.
              </h2>
              <p className="pl-6 text-myColors-lightBlack pt-2">
                Free directories: directories are perfect <br /> for customers
                that are... searching for
              </p>
              <div className="flex pl-6 mt-10 items-center">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/profileNews1.jpg"}
                    style={{}}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <span className="text-sm font-semibold">ISSAC DUNN </span>
                  <br />
                  <span className="text-xs text-myColors-blue">
                    09 Feb 2017
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-white flex flex-col"
              style={{ height: "515px", width: "31%" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/news2.jpg"}
                style={{ height: "47%" }}
              />
              <h2 className="text-lg font-bold text-myColor-darkBlack pl-6 pt-5">
                EFFECTIVE ADVERTISING
                <br /> POINTERS
              </h2>
              <p className="pl-6 text-myColors-lightBlack pt-2">
                Having home based issue is a <br /> wonderful asset of your
                life.
              </p>
              <div className="flex pl-6 mt-10 items-center">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/profileNews2.jpg"}
                    style={{}}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <span className="text-sm font-semibold">
                    DOMMINIC FREEMAN
                  </span>
                  <br />
                  <span className="text-xs text-myColors-blue">
                    24 April 2017
                  </span>
                </div>
              </div>
            </div>
            <div
              className="bg-white flex flex-col"
              style={{ height: "515px", width: "31%" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/news3.jpg"}
                style={{ height: "47%" }}
              />
              <h2 className="text-lg font-bold text-myColor-darkBlack pl-6 pt-5">
                HYPTONIZE YOURSELF
                <br />
                INTO THE GHOST.
              </h2>
              <p className="pl-6 text-myColors-lightBlack pt-2">
                There are many things that are <br /> important to catalog
                design....
              </p>
              <div className="flex pl-6 mt-10 items-center">
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/profileNews3.jpg"}
                    style={{}}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-5">
                  <span className="text-sm font-semibold">ALICE WARD </span>
                  <br />
                  <span className="text-xs text-myColors-blue">
                    30 Dec 2017
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-0  px-3 py-3 border border-white rounded-full  "
            style={{
              marginTop: "550px",
              marginLeft: "60px",
              marginRight: "30px",
            }}
          >
            <IoIosArrowBack className="text-white " />
          </div>
          <div
            className="absolute right-0  px-3 py-3 border border-white rounded-full  "
            style={{
              marginTop: "550px",
              marginLeft: "30px",
              marginRight: "60px",
            }}
          >
            <IoIosArrowForward className="text-white " />
          </div>
          <div className="flex justify-between mt-16 w-1/6">
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
